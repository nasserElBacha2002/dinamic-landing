import { handleContactRequest } from '../src/lib/contactMailer';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request): Promise<Response> {
  return handleContactRequest(request, {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  });
}
