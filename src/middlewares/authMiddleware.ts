import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

// Extend Request to include user info
declare module "express-serve-static-core" {
	interface Request {
		user?: { userId: string; role: string };
	}
}

export const authenticate = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.error("Authorization token missing", 401);
	}

	const token = authHeader.split(" ")[1];

	try {
		const secret = process.env.JWT_SECRET;
		if (!secret) {throw new Error("JWT secret not defined");}

		const decoded = jwt.verify(token, secret) as {
			userId: string;
			role: string;
		};

		// Check if user exists in DB
		const user = await prisma.user.findUnique({
			where: { id: decoded.userId },
		});
		if (!user) {return res.error("User not found", 401);}

		req.user = { userId: user.id, role: user.role };
		return next();
	} catch (err) {
		console.error(err);
		return res.error("Invalid or expired token", 401);
	}
};
