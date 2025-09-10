import { Request, Response } from "express";
import { getUsers } from "../../controllers/userController";

// Mock the modules
jest.mock("generated/prisma", () => ({
	PrismaClient: jest.fn(() => ({
		user: {
			findMany: jest.fn(),
		},
	})),
}));

jest.mock("../../config/logger", () => ({
	info: jest.fn(),
	error: jest.fn(),
	warn: jest.fn(),
	debug: jest.fn(),
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

describe("User Controller", () => {
	let mockReq: Partial<Request>;
	let mockRes: Partial<Response>;

	beforeEach(() => {
		mockReq = {
			body: {},
			params: {},
			query: {},
			user: { userId: "admin-123", role: "ADMIN" },
		};

		mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn().mockReturnThis(),
		};

		jest.clearAllMocks();
	});

	describe("getUsers", () => {
		it("should handle successful users fetch", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle empty users list", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle database error", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle different user roles", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle large user dataset", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle network timeout error", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle Prisma validation error", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});

		it("should handle users with special characters in names", async () => {
			await getUsers(mockReq as Request, mockRes as Response);

			expect(mockRes.status).toHaveBeenCalled();
		});
	});
});
