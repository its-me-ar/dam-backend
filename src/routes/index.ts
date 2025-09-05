import { Router } from "express";
import authRoutes from "./auth";
import invitationRoutes from "./invitation";
import assetsRoutes from "./upload";
const router = Router();

router.get("/health", (_req, res) => {
	res.success({ status: "OK" }, "Health check passed");
});
router.use("/auth", authRoutes);
router.use("/invitations", invitationRoutes);
router.use("/assets", assetsRoutes);

export default router;
