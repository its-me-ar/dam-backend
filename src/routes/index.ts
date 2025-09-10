import { Router } from "express";
import authRoutes from "./auth";
import invitationRoutes from "./invitation";
import assetsRoutes from "./assets";
import userRoutes from "./user";
const router = Router();

router.get("/health", (_req, res) => {
	res.success({ status: "OK" }, "Health check passed");
});
router.use("/auth", authRoutes);
router.use("/invitations", invitationRoutes);
router.use("/assets", assetsRoutes);
router.use("/users", userRoutes);

export default router;
