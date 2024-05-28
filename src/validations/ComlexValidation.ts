import { z } from 'zod';

export const ComplexValidation = z.object({
  complexId: z.number().min(1),
});

export type PageComplex = z.infer<typeof ComplexValidation>;
