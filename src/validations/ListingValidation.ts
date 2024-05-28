import { z } from 'zod';

export const QueryValidation = z.object({
  location: z.string().min(2),
  checkIn: z.coerce.date().optional(),
  checkOut: z.coerce.date().optional(),
  guests: z.number().min(1).max(16),
  rooms: z.number().min(1).max(5),
});

export type PageQuery = z.infer<typeof QueryValidation>;

export const ParamsValidation = z.object({
  apartmentId: z.number().min(1),
});

export type PageParams = z.infer<typeof ParamsValidation>;
