import { Request, Response } from "express";
import {
	PrismaClient,
	InvitationRole,
	InvitationStatus,
} from "../../generated/prisma";
import jwt from "jsonwebtoken";
import logger from "../config/logger";
const prisma = new PrismaClient();

export const inviteUser = async (req: Request, res: Response) => {
	try {
		const { email, role } = req.body;

		// Assuming you have middleware to attach logged-in user info
		const userId = req.user?.userId;
		const userRole = req.user?.role;

		if (!userId || (userRole !== "ADMIN" && userRole !== "MANAGER")) {
			return res.error("Only admins or managers can invite users", 403);
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
		if (!secret) {
			throw new Error("SIGNED_LINK_SECRET  not defined");
		}

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
		logger.error("inviteController error:", err);
		return res.error("Server error", 500);
	}
};

export const getAllInvitations = async (req: Request, res: Response) => {
	try {
		const userRole = req.user?.role;

		// Only admins and managers can view invitations
		if (!userRole || (userRole !== "ADMIN" && userRole !== "MANAGER")) {
			return res.error("Only admins or managers can view invitations", 403);
		}

		const invitations = await prisma.invitation.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				invitedBy: {
					select: {
						id: true,
						email: true,
						full_name: true,
						role: true,
					},
				},
			},
		});

		return res.success(invitations, "Invitations fetched successfully");
	} catch (err) {
		logger.error("inviteController error:", err);
		return res.error("Server error", 500);
	}
};

export const reInviteUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params; // invitation id
		const userId = req.user?.userId;
		const userRole = req.user?.role;

		if (!userId || (userRole !== "ADMIN" && userRole !== "MANAGER")) {
			return res.error("Only admins or managers can re-invite users", 403);
		}

		// Check if invitation exists
		const invitation = await prisma.invitation.findUnique({
			where: { id },
		});

		if (!invitation) {
			return res.error("Invitation not found", 404);
		}

		// Allow re-invite only if still pending
		if (invitation.status !== InvitationStatus.PENDING) {
			return res.error("Only pending invitations can be resent", 400);
		}

		// Generate a new signed invitation token
		const secret = process.env.SIGNED_LINK_SECRET;
		if (!secret) {
			throw new Error("SIGNED_LINK_SECRET not defined");
		}

		const token = jwt.sign(
			{
				invitationId: invitation.id,
				email: invitation.email,
				role: invitation.role,
			},
			secret,
			{ expiresIn: "7d" },
		);

		// Update updatedAt automatically (no need to change other fields)
		const updatedInvitation = await prisma.invitation.update({
			where: { id },
			data: {}, // only touches updatedAt
			include: {
				invitedBy: {
					select: {
						id: true,
						email: true,
						full_name: true,
						role: true,
					},
				},
			},
		});

		return res.success(
			{ ...updatedInvitation, invitationLink: token },
			"Invitation resent successfully",
		);
	} catch (err) {
		logger.error("inviteController error:", err);
		return res.error("Server error", 500);
	}
};
