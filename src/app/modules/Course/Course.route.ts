import express from 'express';
import { courseController } from './Course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidations } from './Course.validation';

const router = express.Router();

router.post(
  '/course',
  validateRequest(courseValidations.createCourseValidationSchema),
  courseController.createCourse,
);
router.get('/courses', courseController.getAllCourses);
router.get('/courses/:courseId', courseController.getSingleCourse);
router.put(
  '/courses/:courseId',
  validateRequest(courseValidations.updateCourseValidationSchema),
  courseController.updateCourse,
);

export const courseRoutes = router;
