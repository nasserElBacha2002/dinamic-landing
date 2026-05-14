import { z } from 'zod';

/** Body for POST /api/contact (matches frontend mapping). */
export const contactApiBodySchema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
  company: z.string().min(1, 'Empresa requerida'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  operationType: z.string().min(1, 'Tipo de operación requerido'),
  message: z.string().min(1, 'Mensaje requerido'),
  /** Honeypot (JSON key distinto a `website` para evitar falsos positivos). Debe ir vacío. */
  botTrap: z.string().optional(),
});

export type ContactApiBody = z.infer<typeof contactApiBodySchema>;
