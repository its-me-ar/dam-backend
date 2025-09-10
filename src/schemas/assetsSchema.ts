import { z } from "zod";

export const filenameQuerySchema = z.object({
	filename: z.string().min(1, "filename is required"),
	mime_type: z.string().min(1, "mime_type is required"),
	size_bytes: z
		.number()
		.int("size_bytes must be an integer")
		.positive("size_bytes must be positive"),
});
