import { z } from 'zod';
import { operationTypes } from '../types/content';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Ingresá tu nombre completo'),
  company: z.string().min(2, 'Ingresá la empresa'),
  email: z.string().email('Ingresá un email profesional válido'),
  phone: z.string().min(6, 'Ingresá un teléfono de contacto'),
  operation: z.enum(operationTypes),
  message: z.string().min(10, 'Contanos un poco más sobre tu necesidad'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
