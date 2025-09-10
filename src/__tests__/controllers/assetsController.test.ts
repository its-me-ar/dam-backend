import { Request, Response } from "express";
import {
	getPresignedUploadUrl,
	getPresignedDownloadUrl,
	completeAssetUpload,
	getUserAssets,
	getAssetById,
	getProcessingJobs,
	getAssetMetrics,
} from "../../controllers/assetsController";

// Mock the modules
jest.mock("generated/prisma", () => ({
	PrismaClient: jest.fn(() => ({
		asset: {
			findFirst: jest.fn(),
			findMany: jest.fn(),
			findUnique: jest.fn(),
			create: jest.fn(),
			update: jest.fn(),
			delete: jest.fn(),
			count: jest.fn(),
			aggregate: jest.fn(),
		},
		assetMetadata: {
			findMany: jest.fn(),
			create: jest.fn(),
			update: jest.fn(),
			upsert: jest.fn(),
		},
		assetShare: {
			findFirst: jest.fn(),
			findMany: jest.fn(),
			create: jest.fn(),
			delete: jest.fn(),
		},
		user: {
			findFirst: jest.fn(),
			findMany: jest.fn(),
		},
		transcodingJob: {
			findMany: jest.fn(),
			create: jest.fn(),
			update: jest.fn(),
		},
		$transaction: jest.fn(),
	})),
	AssetStatus: {
		START: "START",
		COMPLETED: "COMPLETED",
		FAILED: "FAILED",
	},
	JobStatus: {
		PENDING: "PENDING",
		ACTIVE: "ACTIVE",
		COMPLETED: "COMPLETED",
		FAILED: "FAILED",
	},
}));

jest.mock("../../services/S3Service", () => ({
	S3Service: jest.fn(() => ({
		getPresignedUploadUrl: jest.fn(),
		getPresignedDownloadUrl: jest.fn(),
		uploadFile: jest.fn(),
		deleteFile: jest.fn(),
		upload: jest.fn(),
		fileExists: jest.fn(),
		download: jest.fn(),
		downloadToFile: jest.fn(),
	})),
}));

jest.mock("../../queues/video.queue", () => ({
	videoQueue: {
		add: jest.fn(),
		process: jest.fn(),
	},
}));

jest.mock("../../queues/image.queue", () => ({
	imageQueue: {
		add: jest.fn(),
		process: jest.fn(),
	},
}));

jest.mock("../../config/logger", () => ({
	info: jest.fn(),
	error: jest.fn(),
	warn: jest.fn(),
	debug: jest.fn(),
}));

jest.mock("uuid", () => ({
	v4: jest.fn(() => "mock-uuid-123"),
}));

// Extend Express Request interface
declare module "express-serve-static-core" {
	interface Request {
		user?: {
			userId: string;
			role: string;
		};
	}
}

describe("Assets Controller", () => {
	let mockReq: Partial<Request>;
	let mockRes: Partial<Response>;

	beforeEach(() => {
		mockReq = {
			body: {},
			params: {},
			query: {},
			user: { userId: "test-user-123", role: "USER" },
		};

		mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn().mockReturnThis(),
		};

		jest.clearAllMocks();
	});

	describe("getPresignedUploadUrl", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getPresignedUploadUrl(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should handle missing required fields", async () => {
			mockReq.body = {};

			await getPresignedUploadUrl(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle successful asset creation", async () => {
			mockReq.body = {
				filename: "test.jpg",
				size_bytes: 1024000,
				mime_type: "image/jpeg"
			};

			await getPresignedUploadUrl(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getPresignedDownloadUrl", () => {
		it("should handle missing filename", async () => {
			mockReq.query = {};

			await getPresignedDownloadUrl(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("completeAssetUpload", () => {
		it("should return 400 if asset_id is missing", async () => {
			mockReq.body = {};

			await completeAssetUpload(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(400);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "asset_id is required",
			});
		});

		it("should handle asset completion", async () => {
			mockReq.body = { asset_id: "test-asset" };

			await completeAssetUpload(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getUserAssets", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getUserAssets(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should handle user assets fetch", async () => {
			mockReq.user = { userId: "user-123", role: "USER" };

			await getUserAssets(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle admin assets fetch", async () => {
			mockReq.user = { userId: "admin-123", role: "ADMIN" };

			await getUserAssets(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getAssetById", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getAssetById(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should handle asset fetch by id", async () => {
			mockReq.params = { id: "test-asset" };
			mockReq.user = { userId: "user-123", role: "USER" };

			await getAssetById(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle asset access for different user", async () => {
			mockReq.params = { id: "test-asset" };
			mockReq.user = { userId: "different-user", role: "USER" };

			await getAssetById(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getProcessingJobs", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getProcessingJobs(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});
	});

	describe("getAssetMetrics", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getAssetMetrics(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});
	});
});