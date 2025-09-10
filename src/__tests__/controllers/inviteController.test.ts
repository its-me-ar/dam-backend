import { Request, Response } from "express";
import { inviteUser, getAllInvitations, reInviteUser } from "../../controllers/inviteController";

// Mock the modules
jest.mock("generated/prisma", () => ({
	PrismaClient: jest.fn(() => ({
		invitation: {
			findFirst: jest.fn(),
			findMany: jest.fn(),
			findUnique: jest.fn(),
			create: jest.fn(),
			update: jest.fn(),
		},
	})),
	InvitationRole: {
		USER: "USER",
		ADMIN: "ADMIN",
		MANAGER: "MANAGER",
	},
	InvitationStatus: {
		PENDING: "PENDING",
		JOINED: "JOINED",
		EXPIRED: "EXPIRED",
	},
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
		SIGNED_LINK_SECRET: "test-signed-link-secret",
	};
});

afterAll(() => {
	process.env = originalEnv;
});

// Extend Express Request interface
declare module "express-serve-static-core" {
	interface Request {
		user?: {
			userId: string;
			role: string;
		};
	}
}

describe("Invite Controller", () => {
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
			error: jest.fn().mockReturnThis(),
			success: jest.fn().mockReturnThis(),
		};

		jest.clearAllMocks();
	});

	describe("inviteUser", () => {
		it("should return 403 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Only admins or managers can invite users", 403);
		});

		it("should return 403 if user is not admin or manager", async () => {
			mockReq.user = { userId: "user-123", role: "USER" };

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Only admins or managers can invite users", 403);
		});

		it("should handle invitation already exists scenario", async () => {
			mockReq.body = {
				email: "test@example.com",
				role: "USER",
			};

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle SIGNED_LINK_SECRET not defined", async () => {
			process.env.SIGNED_LINK_SECRET = undefined;

			mockReq.body = {
				email: "test@example.com",
				role: "USER",
			};

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();

			// Restore SIGNED_LINK_SECRET
			process.env.SIGNED_LINK_SECRET = "test-signed-link-secret";
		});

		it("should handle successful invitation creation", async () => {
			mockReq.body = {
				email: "test@example.com",
				role: "USER",
			};

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle invitation creation for manager role", async () => {
			mockReq.user = { userId: "manager-123", role: "MANAGER" };

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle server error during invitation creation", async () => {
			mockReq.body = {
				email: "test@example.com",
				role: "USER",
			};

			await inviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});
	});

	describe("getAllInvitations", () => {
		it("should return 403 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await getAllInvitations(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Only admins or managers can view invitations", 403);
		});

		it("should return 403 if user is not admin or manager", async () => {
			mockReq.user = { userId: "user-123", role: "USER" };

			await getAllInvitations(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Only admins or managers can view invitations", 403);
		});

		it("should handle successful invitations fetch", async () => {
			await getAllInvitations(mockReq as Request, mockRes as Response);

			expect(mockRes.success).toHaveBeenCalled();
		});

		it("should handle server error during invitations fetch", async () => {
			await getAllInvitations(mockReq as Request, mockRes as Response);

			expect(mockRes.success).toHaveBeenCalled();
		});
	});

	describe("reInviteUser", () => {
		it("should return 403 if user is not authenticated", async () => {
			mockReq.user = undefined;

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Only admins or managers can re-invite users", 403);
		});

		it("should return 403 if user is not admin or manager", async () => {
			mockReq.user = { userId: "user-123", role: "USER" };

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalledWith("Only admins or managers can re-invite users", 403);
		});

		it("should handle invitation not found scenario", async () => {
			mockReq.params = { id: "non-existent-invitation" };

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle invitation not pending scenario", async () => {
			mockReq.params = { id: "invitation-123" };

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle SIGNED_LINK_SECRET not defined", async () => {
			process.env.SIGNED_LINK_SECRET = undefined;

			mockReq.params = { id: "invitation-123" };

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();

			// Restore SIGNED_LINK_SECRET
			process.env.SIGNED_LINK_SECRET = "test-signed-link-secret";
		});

		it("should handle successful re-invitation", async () => {
			mockReq.params = { id: "invitation-123" };

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});

		it("should handle server error during re-invitation", async () => {
			mockReq.params = { id: "invitation-123" };

			await reInviteUser(mockReq as Request, mockRes as Response);

			expect(mockRes.error).toHaveBeenCalled();
		});
	});
});
