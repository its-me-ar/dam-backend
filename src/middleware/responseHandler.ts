import { Request, Response, NextFunction } from "express";

export const responseHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.success = <T = unknown>(data: T, message = "success"): Response => {
    return res.json({ success: true, message, data });
  };

  res.error = (message = "error", status = 500): Response => {
    return res.status(status).json({ success: false, message });
  };

  next();
};

// Module augmentation (ESM-friendly)
declare module "express-serve-static-core" {
  interface Response {
    success: <T = unknown>(data: T, message?: string) => Response;
    error: (message?: string, status?: number) => Response;
  }
}
