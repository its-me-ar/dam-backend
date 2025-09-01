import { Router } from "express";
import { inviteUser } from "../controllers/inviteController";
import { validate } from "../middlewares/validate";
import { invitationSchema } from "src/schemas/invitationSchema";
import { authenticate } from "src/middlewares/authMiddleware";

const router = Router();


// POST /api/invitations
router.post("/", authenticate, validate(invitationSchema), inviteUser);

export default router;
