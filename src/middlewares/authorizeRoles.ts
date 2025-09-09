import { Request, Response, NextFunction } from "express";

export const authorizeRoles = (...allowedRoles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const userRole = req.user?.role;
		if (!userRole || !allowedRoles.includes(userRole)) {
			return res.error("Forbidden: insufficient permissions", 403);
		}
		return next();
	};
};
