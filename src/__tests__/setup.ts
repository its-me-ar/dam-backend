import { PrismaClient } from "generated/prisma";
import { S3Service } from "../services/S3Service";

// Mock Prisma Client
export const mockPrisma = {
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
} as unknown as PrismaClient;

// Mock S3Service
export const mockS3Service = {
	getPresignedUploadUrl: jest.fn(),
	getPresignedDownloadUrl: jest.fn(),
	uploadFile: jest.fn(),
	deleteFile: jest.fn(),
	upload: jest.fn(),
	fileExists: jest.fn(),
	download: jest.fn(),
	downloadToFile: jest.fn(),
} as unknown as S3Service;

// Mock video and image queues
export const mockVideoQueue = {
	add: jest.fn(),
	process: jest.fn(),
};

export const mockImageQueue = {
	add: jest.fn(),
	process: jest.fn(),
};

// Mock logger
export const mockLogger = {
	info: jest.fn(),
	error: jest.fn(),
	warn: jest.fn(),
	debug: jest.fn(),
};

// Mock JWT
export const mockJwt = {
	verify: jest.fn(),
	sign: jest.fn(),
};

// Mock UUID
export const mockUuid = {
	v4: jest.fn(),
};

// Mock Express Request and Response
export const createMockRequest = (overrides: Record<string, unknown> = {}) => ({
	body: {},
	params: {},
	query: {},
	user: null,
	...overrides,
});

export const createMockResponse = () => {
	const res: Record<string, unknown> = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	res.send = jest.fn().mockReturnValue(res);
	return res;
};

// Test data factories
export const createMockUser = (overrides: Record<string, unknown> = {}) => ({
	id: "user-123",
	full_name: "Test User",
	email: "test@example.com",
	role: "USER",
	createdAt: new Date(),
	...overrides,
});

export const createMockAsset = (overrides: Record<string, unknown> = {}) => ({
	asset_id: "asset-123",
	filename: "test-file.jpg",
	mime_type: "image/jpeg",
	storage_path: "assets/asset-123/test-file.jpg",
	uploader_id: "user-123",
	size_bytes: 1024000,
	status: "COMPLETED",
	createdAt: new Date(),
	updatedAt: new Date(),
	uploader: createMockUser(),
	metadata: [],
	...overrides,
});

export const createMockAssetShare = (overrides: Record<string, unknown> = {}) => ({
	id: "share-123",
	asset_id: "asset-123",
	shared_by: "user-123",
	share_type: "PUBLIC",
	share_token: "token-123",
	user_id: null,
	is_active: true,
	created_at: new Date(),
	updated_at: new Date(),
	...overrides,
});

export const createMockAssetMetadata = (overrides: Record<string, unknown> = {}) => ({
	metadata_id: "meta-123",
	asset_id: "asset-123",
	key: "video_variants",
	value: {
		original: {
			path: "assets/asset-123/original.mp4",
			width: 1920,
			height: 1080,
			size: 1000000,
		},
		"480p": {
			path: "assets/asset-123/480p.mp4",
			width: 852,
			height: 480,
			size: 500000,
		},
		"720p": {
			path: "assets/asset-123/720p.mp4",
			width: 1280,
			height: 720,
			size: 750000,
		},
		thumbnails: [
			{
				path: "assets/asset-123/thumbnail.jpg",
				width: 320,
				height: 180,
				size: 10000,
			},
		],
	},
	created_at: new Date(),
	updated_at: new Date(),
	...overrides,
});

// Setup mocks before each test
beforeEach(() => {
	jest.clearAllMocks();
	
	// Reset all mock implementations
	Object.values(mockPrisma).forEach((mock: unknown) => {
		if (typeof mock === "object" && mock !== null) {
			Object.values(mock).forEach((fn: unknown) => {
				if (typeof fn === "function" && 'mockReset' in fn) {
					(fn as jest.Mock).mockReset();
				}
			});
		}
	});
	
	Object.values(mockS3Service).forEach((fn: unknown) => {
		if (typeof fn === "function" && 'mockReset' in fn) {
			(fn as jest.Mock).mockReset();
		}
	});
});
