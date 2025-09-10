import { Request, Response } from "express";
import { PrismaClient } from "generated/prisma";
import logger from "src/config/logger";

const prisma = new PrismaClient();

/**
 * Get all users
 * GET /api/users
 */
export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany({
			select: {
				id: true,
				full_name: true,
				email: true,
				role: true,
				createdAt: true,
			},
			orderBy: { createdAt: "desc" },
		});

		return res.status(200).json({
			status: "success",
			message: "Users fetched successfully",
			data: users,
		});
	} catch (err) {
		logger.error("getUsers error:", err);
		return res.status(500).json({
			status: "error",
			message: "Failed to fetch users",
		});
	}
};
