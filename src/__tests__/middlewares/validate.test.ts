import { Request, Response, NextFunction } from "express";
import { validate } from "../../middlewares/validate";
import { filenameQuerySchema } from "../../schemas/assetsSchema";
import { z } from "zod";

// Mock request and response helpers
const createMockRequest = (overrides: Record<string, unknown> = {}) => ({
	body: {},
	params: {},
	query: {},
	user: null,
	headers: {},
	...overrides,
});

const createMockResponse = () => {
	const res: Record<string, unknown> = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	res.send = jest.fn().mockReturnValue(res);
	res.success = jest.fn().mockReturnValue(res);
	res.error = jest.fn().mockReturnValue(res);
	return res;
};

describe("Validate Middleware", () => {
	let req: Request;
	let res: Response;
	let next: NextFunction;

	beforeEach(() => {
		req = createMockRequest() as unknown as Request;
		res = createMockResponse() as unknown as Response;
		next = jest.fn();
	});

	it("should pass validation for valid data", () => {
		req.body = {
			filename: "test-file.jpg",
			mime_type: "image/jpeg",
			size_bytes: 1024000,
		};

		const middleware = validate(filenameQuerySchema);
		middleware(req, res, next);

		expect(next).toHaveBeenCalled();
		expect(res.status).not.toHaveBeenCalled();
	});

	it("should return 400 for invalid data", () => {
		req.body = {
			filename: "",
			mime_type: "image/jpeg",
			size_bytes: -100,
		};

		const middleware = validate(filenameQuerySchema);
		middleware(req, res, next);

		expect(res.error).toHaveBeenCalledWith("Validation error", 400, {
			errors: expect.arrayContaining([
				expect.objectContaining({
					path: expect.any(String),
					message: expect.any(String),
				}),
			]),
		});
		expect(next).not.toHaveBeenCalled();
	});

	it("should return 400 for missing required fields", () => {
		req.body = {};

		const middleware = validate(filenameQuerySchema);
		middleware(req, res, next);

		expect(res.error).toHaveBeenCalledWith("Validation error", 400, {
			errors: expect.arrayContaining([
				expect.objectContaining({
					path: "filename",
					message: expect.stringContaining("expected string, received undefined"),
				}),
			]),
		});
		expect(next).not.toHaveBeenCalled();
	});

	it("should handle custom schema validation", () => {
		const customSchema = z.object({
			name: z.string().min(1, "Name is required"),
			age: z.number().min(0, "Age must be positive"),
		});

		req.body = {
			name: "John Doe",
			age: 25,
		};

		const middleware = validate(customSchema);
		middleware(req, res, next);

		expect(next).toHaveBeenCalled();
		expect(res.status).not.toHaveBeenCalled();
	});
});