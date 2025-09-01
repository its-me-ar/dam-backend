import { z } from "zod";

export const registerInvitationSchema = z.object({
  token: z
    .string()
    .min(1, "Invitation token is required"),
  full_name: z
    .string()
    .min(2, "Full name must be at least 2 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});
