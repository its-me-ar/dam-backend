import { Router } from "express";
import { getUsers } from "../controllers/userController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

// ===== USER ROUTES =====

// Get all users
router.get("/", authenticate, getUsers);

export default router;
