import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { InvitationStatus, PrismaClient, Role } from "../../generated/prisma";
import logger from "src/config/logger";
import { InvitationTokenPayload } from "src/types/InvitationTokenPayload";

const prisma = new PrismaClient();



export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {return res.error("Invalid credentials", 401);}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {return res.error("Invalid credentials", 401);}

		const secret = process.env.JWT_SECRET;
		if (!secret) {return res.error("JWT secret is not defined", 500);}

		const options: SignOptions = { expiresIn: "1d" };

		const token = jwt.sign(
			{ userId: user.id, role: user.role },
			secret,
			options,
		);

		return res.success(
			{
				token,
				user: {
					id: user.id,
					full_name: user.full_name,
					email: user.email,
					role: user.role,
				},
			},
			"Login successful",
		);
	} catch (err) {
		logger.error(err);
		return res.error("Server error", 500);
	}
};

export const registerWithInvitation = async (req: Request, res: Response) => {
	try {
		const { token, full_name, password } = req.body;

		if (!token) {return res.error("Invitation token is required", 400);}

		const secret = process.env.SIGNED_LINK_SECRET;
		if (!secret) {throw new Error("SIGNED_LINK_SECRET  not defined");}

		// Verify JWT token (signature + expiration)
		let decoded: { invitationId: string; email: string; role: string };
		try {
			decoded = jwt.verify(token, secret) as InvitationTokenPayload;
		} catch (err) {
			logger.error(err);
			return res.error("Invalid or expired invitation token", 400);
		}

		// Fetch invitation from DB
		const invitation = await prisma.invitation.findUnique({
			where: { id: decoded.invitationId },
		});

		if (!invitation || invitation.status !== InvitationStatus.PENDING) {
			return res.error("Invitation is invalid or already used", 400);
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create user
		const user = await prisma.user.create({
			data: {
				email: decoded.email,
				full_name,
				password: hashedPassword,
				role: decoded.role as Role,
			},
		});

		// Mark invitation as JOINED
		await prisma.invitation.update({
			where: { id: invitation.id },
			data: { status: InvitationStatus.JOINED, acceptedAt: new Date() },
		});

		const _user: Omit<typeof user, "password"> & { password?: string | null } = {
			...user,
			password: user.password,
		};
		delete _user.password;
		return res.success({ user: _user }, "User registered successfully");
	} catch (err) {
		logger.error(err);
		return res.error("Server error", 500);
	}
};
