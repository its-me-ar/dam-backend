import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.success({ status: "OK" }, "Health check passed");
});

export default router;
