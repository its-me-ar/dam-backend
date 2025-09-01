import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validate =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      schema.parse(req.body);
      return next(); // explicitly return
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.issues.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        }));
        return res.error("Validation error", 400, { errors });
      }
      return next(err); // also explicitly return
    }
  };
