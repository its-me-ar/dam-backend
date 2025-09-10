import { Router } from "express";
import { login, registerWithInvitation } from "../controllers/authController";
import { validate } from "src/middlewares/validate";
import { loginSchema } from "src/schemas/authSchema";
import { registerInvitationSchema } from "src/schemas/registerInvitationSchema";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.post(
	"/register",
	validate(registerInvitationSchema),
	registerWithInvitation,
);

export default router;
