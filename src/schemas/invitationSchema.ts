import { z } from "zod";

// Login request schema
export const invitationSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	role: z.enum(["USER", "MANAGER"]),
});
