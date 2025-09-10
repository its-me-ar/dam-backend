import { Request, Response, NextFunction } from "express";

export const responseHandler = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	res.success = <T = unknown>(data: T, message = "success"): Response => {
		return res.json({ success: true, message, data });
	};

	res.error = <T = unknown>(
		message = "error",
		status = 500,
		data?: T,
	): Response => {
		return res.status(status).json({ success: false, message, data });
	};

	next();
};

// Module augmentation
declare module "express-serve-static-core" {
	interface Response {
		success: <T = unknown>(data: T, message?: string) => Response;
		error: <T = unknown>(
			message?: string,
			status?: number,
			data?: T,
		) => Response;
	}
}
