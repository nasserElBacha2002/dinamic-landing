import { z } from 'zod';
import { operationTypes } from '../types/content';

/** Optional: whether operations continue during the count. Stable API values. */
export const operationActiveDuringCountValues = ['yes', 'no', 'to_define'] as const;
export type OperationActiveDuringCount = (typeof operationActiveDuringCountValues)[number];

export const operationActiveDuringCountLabels: Record<OperationActiveDuringCount, string> = {
  yes: 'Sí',
  no: 'No',
  to_define: 'A definir',
};

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Ingresá tu nombre completo'),
  company: z.string().min(2, 'Ingresá la empresa'),
  email: z.string().email('Ingresá un email profesional válido'),
  phone: z.string().min(6, 'Ingresá un teléfono de contacto'),
  operation: z.enum(operationTypes),
  /** Optional locality / province — empty string allowed in the form. */
  locality: z.string().max(120, 'Usá como máximo 120 caracteres'),
  /** Optional select; empty string = not provided. */
  operationActiveDuringCount: z.union([z.enum(operationActiveDuringCountValues), z.literal('')]),
  message: z.string().min(10, 'Contanos un poco más sobre tu necesidad'),
  /** Honeypot (campo oculto; no usar input text oculto — el autofill lo rellena). */
  honeypot: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
