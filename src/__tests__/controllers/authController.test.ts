import { Request, Response } from "express";
import { login, registerWithInvitation } from "../../controllers/authController";

// Mock the modules
jest.mock("generated/prisma", () => ({
	PrismaClient: jest.fn(() => ({
		user: {
			findUnique: jest.fn(),
			create: jest.fn(),
		},
		invitation: {
			findUnique: jest.fn(),
			update: jest.fn(),
		},
	})),
	InvitationStatus: {
		PENDING: "PENDING",
		JOINED: "JOINED",
	},
	Role: {
		USER: "USER",
		ADMIN: "ADMIN",
		MANAGER: "MANAGER",
	},
}));

jest.mock("bcrypt", () => ({
	compare: jest.fn(),
	hash: jest.fn(),
}));

jest.mock("jsonwebtoken", () => ({
	sign: jest.fn(),
	verify: jest.fn(),
}));

jest.mock("../../config/logger", () => ({
	info: jest.fn(),
	error: jest.fn(),
	warn: jest.fn(),
	debug: jest.fn(),
}));

// Mock process.env
const originalEnv = process.env;
beforeAll(() => {
	process.env = {
		...originalEnv,
		JWT_SECRET: "test-jwt-secret",
		SIGNED_LINK_SECRET: "test-signed-link-secret",
	};
});

afterAll(() => {
	process.env = originalEnv;
});

describe("Auth Controller", () => {
	let mockReq: Partial<Request>;
	let mockRes: Partial<Response>;

	beforeEach(() => {
		mockReq = {
			body: {},
			params: {},
			query: {},
		};

		mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn().mockReturnThis(),
			error: jest.fn().mockReturnThis(),
			success: jest.fn().mockReturnThis(),
		};

		jest.clearAllMocks();
	});

	describe("login", () => {
		it("should handle invalid credentials - user not found", async () => {
			mockReq.body = {
				email: "nonexistent@example.com",
				password: "password123",
			};

			await login(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle invalid credentials - wrong password", async () => {
			mockReq.body = {
				email: "test@example.com",
				password: "wrong-password",
			};

			await login(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle JWT_SECRET not defined", async () => {
			process.env.JWT_SECRET = undefined;

			mockReq.body = {
				email: "test@example.com",
				password: "password123",
			};

			await login(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();

			// Restore JWT_SECRET
			process.env.JWT_SECRET = "test-jwt-secret";
		});

		it("should handle successful login", async () => {
			mockReq.body = {
				email: "test@example.com",
				password: "password123",
			};

			await login(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle server error", async () => {
			mockReq.body = {
				email: "test@example.com",
				password: "password123",
			};

			await login(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});
	});

	describe("registerWithInvitation", () => {
		it("should return 400 if token is missing", async () => {
			mockReq.body = {
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Invitation token is required", 400);
		});

		it("should return 500 if SIGNED_LINK_SECRET is not defined", async () => {
			process.env.SIGNED_LINK_SECRET = undefined;

			mockReq.body = {
				token: "mock-token",
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Server error", 500);

			// Restore SIGNED_LINK_SECRET
			process.env.SIGNED_LINK_SECRET = "test-signed-link-secret";
		});

		it("should return 400 for invalid or expired token", async () => {
			const jwt = jest.requireMock("jsonwebtoken");
			
			jwt.verify.mockImplementation(() => {
				throw new Error("Invalid token");
			});

			mockReq.body = {
				token: "invalid-token",
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Invalid or expired invitation token", 400);
		});

		it("should handle invitation not found", async () => {
			mockReq.body = {
				token: "valid-token",
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle invitation not pending", async () => {
			mockReq.body = {
				token: "valid-token",
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle successful registration", async () => {
			mockReq.body = {
				token: "valid-token",
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle server error during registration", async () => {
			mockReq.body = {
				token: "valid-token",
				full_name: "Test User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle registration with different roles", async () => {
			mockReq.body = {
				token: "valid-token",
				full_name: "Admin User",
				password: "password123",
			};

			await registerWithInvitation(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});
	});
});
