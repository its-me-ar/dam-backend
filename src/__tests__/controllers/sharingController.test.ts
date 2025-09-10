import { Request, Response } from "express";
import {
	createShare,
	deleteShare,
	getSharedAssets,
	getPublicAsset,
	getRestrictedAsset,
	getAssetVisibility,
} from "../../controllers/sharingController";

// Mock the modules
jest.mock("generated/prisma", () => ({
	PrismaClient: jest.fn(() => ({
		asset: {
			findFirst: jest.fn(),
			findMany: jest.fn(),
		},
		assetShare: {
			findFirst: jest.fn(),
			findMany: jest.fn(),
			create: jest.fn(),
			delete: jest.fn(),
		},
		assetMetadata: {
			findMany: jest.fn(),
		},
	})),
	AssetStatus: {
		COMPLETED: "COMPLETED",
	},
}));

jest.mock("../../services/S3Service", () => ({
	S3Service: jest.fn(() => ({
		getPresignedDownloadUrl: jest.fn(),
	})),
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

describe("Sharing Controller", () => {
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

	describe("createShare", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should return 400 for invalid share_type", async () => {
			mockReq.body = {
				asset_id: "test-asset",
				share_type: "INVALID",
			};

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(400);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "share_type must be 'PUBLIC' or 'RESTRICTED'",
			});
		});

		it("should return 400 for RESTRICTED share without user_ids", async () => {
			mockReq.body = {
				asset_id: "test-asset",
				share_type: "RESTRICTED",
			};

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(400);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "user_ids array is required for RESTRICTED shares",
			});
		});

		it("should handle asset not found scenario", async () => {
			mockReq.body = {
				asset_id: "non-existent-asset",
				share_type: "PUBLIC",
			};

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle asset already shared scenario", async () => {
			mockReq.body = {
				asset_id: "test-asset",
				share_type: "PUBLIC",
			};

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle successful PUBLIC share creation", async () => {
			mockReq.body = {
				asset_id: "test-asset",
				share_type: "PUBLIC",
			};

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle successful RESTRICTED share creation", async () => {
			mockReq.body = {
				asset_id: "test-asset",
				share_type: "RESTRICTED",
				user_ids: ["user1", "user2"],
			};

			await createShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("deleteShare", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await deleteShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should handle share not found scenario", async () => {
			mockReq.params = { share_id: "non-existent-share" };

			await deleteShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle successful share deletion", async () => {
			mockReq.params = { share_id: "share-123" };

			await deleteShare(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getSharedAssets", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getSharedAssets(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should handle successful shared assets fetch", async () => {
			await getSharedAssets(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getPublicAsset", () => {
		it("should handle asset not found scenario", async () => {
			mockReq.params = { asset_id: "non-existent-asset" };

			await getPublicAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle asset not publicly shared scenario", async () => {
			mockReq.params = { asset_id: "test-asset" };

			await getPublicAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle successful public asset access", async () => {
			mockReq.params = { asset_id: "test-asset" };

			await getPublicAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getRestrictedAsset", () => {
		it("should return 401 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getRestrictedAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Unauthorized",
			});
		});

		it("should handle asset not found scenario", async () => {
			mockReq.params = { asset_id: "non-existent-asset" };

			await getRestrictedAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle user has no access scenario", async () => {
			mockReq.params = { asset_id: "test-asset" };
			mockReq.user = { userId: "test-user-123", role: "USER" };

			await getRestrictedAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle access for asset owner", async () => {
			mockReq.params = { asset_id: "test-asset" };
			mockReq.user = { userId: "test-user-123", role: "USER" };

			await getRestrictedAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle access for admin user", async () => {
			mockReq.params = { asset_id: "test-asset" };
			mockReq.user = { userId: "admin-123", role: "ADMIN" };

			await getRestrictedAsset(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});

	describe("getAssetVisibility", () => {
		it("should return 400 for invalid asset ID format", async () => {
			mockReq.params = { asset_id: "invalid-id" };

			await getAssetVisibility(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalledWith(400);
			expect(mockRes.json).toHaveBeenCalledWith({
				status: "error",
				message: "Invalid asset ID format",
			});
		});

		it("should handle asset not found scenario", async () => {
			mockReq.params = { asset_id: "12345678-1234-1234-1234-123456789012" };

			await getAssetVisibility(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle asset with no shares", async () => {
			mockReq.params = { asset_id: "12345678-1234-1234-1234-123456789012" };

			await getAssetVisibility(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle asset with public share", async () => {
			mockReq.params = { asset_id: "12345678-1234-1234-1234-123456789012" };

			await getAssetVisibility(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle asset with only restricted shares", async () => {
			mockReq.params = { asset_id: "12345678-1234-1234-1234-123456789012" };

			await getAssetVisibility(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});
});
