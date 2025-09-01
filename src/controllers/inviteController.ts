import { Request, Response } from "express";
import {
	PrismaClient,
	InvitationRole,
	InvitationStatus,
} from "../../generated/prisma";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const inviteUser = async (req: Request, res: Response) => {
	try {
		const { email, role } = req.body;

		// Assuming you have middleware to attach logged-in user info
		const userId = req.user?.userId;
		const userRole = req.user?.role;

		if (!userId || userRole !== "ADMIN") {
			return res.error("Only admins can invite users", 403);
		}

		// Check if invitation already exists
		const existingInvite = await prisma.invitation.findFirst({
			where: { email, status: InvitationStatus.PENDING },
		});

		if (existingInvite) {
			return res.error("Invitation already sent to this email", 400);
		}

		// Create invitation
		const invitation = await prisma.invitation.create({
			data: {
				email,
				inviteBy: userId,
				status: InvitationStatus.PENDING,
				role: role as InvitationRole,
			},
		});

		// Generate a signed invitation token (JWT)
		const secret = process.env.SIGNED_LINK_SECRET;
		if (!secret) {throw new Error("SIGNED_LINK_SECRET  not defined");}

		const token = jwt.sign(
			{
				invitationId: invitation.id,
				email: invitation.email,
				role: invitation.role,
			},
			secret,
			{ expiresIn: "7d" }, // token valid for 7 days
		);

		return res.success(
			{ ...invitation, invitationLink: token },
			"Invitation sent successfully",
		);
	} catch (err) {
		console.error(err);
		return res.error("Server error", 500);
	}
};
