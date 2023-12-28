import { z } from 'zod';

export const createReviewValidationSchema = z.object({
  courseId: z.string(),
  rating: z
    .number()
    .int()
    .min(1)
    .max(5, { message: 'Rating must be between 1 and 5' }),
  review: z.string(),
});
export const updateReviewValidationSchema = z.object({
  courseId: z.string().optional(),
  rating: z
    .number()
    .int()
    .min(1)
    .max(5, { message: 'Rating must be between 1 and 5' })
    .optional(),
  review: z.string().optional(),
});

export const reviewValidations = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
};
