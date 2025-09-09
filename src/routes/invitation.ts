import { Router } from "express";
import {
	getAllInvitations,
	inviteUser,
	reInviteUser,
} from "../controllers/inviteController";
import { validate } from "../middlewares/validate";
import { invitationSchema } from "src/schemas/invitationSchema";
import { authenticate } from "src/middlewares/authMiddleware";
import { authorizeRoles } from "src/middlewares/authorizeRoles";

const router = Router();

// POST /api/invitations
router.post(
	"/",
	authenticate,
	authorizeRoles("ADMIN", "MANAGER"),
	validate(invitationSchema),
	inviteUser,
);

// POST /api/invitations
router.get(
	"/",
	authenticate,
	authorizeRoles("ADMIN", "MANAGER"),
	getAllInvitations,
);

// PUT /api/invitations/:id/reinvite -> resend an invitation
router.put(
	"/:id/reinvite",
	authenticate,
	authorizeRoles("ADMIN", "MANAGER"),
	reInviteUser,
);

export default router;
