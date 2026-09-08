import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .regex(/^[A-Za-z\s]+$/, 'Name can only contain alphabetic characters and spaces'),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Phone number must be a valid 10-digit Indian number starting with 6, 7, 8, or 9'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(5, 'Message must be at least 5 characters long'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
