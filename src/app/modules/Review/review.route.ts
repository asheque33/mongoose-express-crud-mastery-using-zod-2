import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { reviewValidations } from './review.validation';
import { reviewController } from './review.controller';

const router = express.Router();

router.post(
  '/reviews',
  validateRequest(reviewValidations.createReviewValidationSchema),
  reviewController.createReview,
);
router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getSingleReview);
router.put(
  '/:id',
  validateRequest(reviewValidations.updateReviewValidationSchema),
  reviewController.updateReview,
);

export const reviewRoutes = router;
