import { InvitationRole } from "generated/prisma";

export interface InvitationTokenPayload {
  invitationId: string;
  email: string;
  role: InvitationRole; 
}