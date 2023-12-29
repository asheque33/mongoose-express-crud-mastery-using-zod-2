import { Review } from '../Review/review.model';
import { ICourse } from './Course.interface';
import { Course } from './Course.model';

const createCourseIntoDB = async (payLoad: ICourse) => {
  const result = await Course.create(payLoad);
  return result;
};
const getCoursesFromDB = async () => {
  const result = await Course.find();
  return result;
};
const updateCourseFromDB = async (id: string, payLoad: Partial<ICourse>) => {
  const result = await Course.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};
// get reviews with CourseId
const getASpecificCoursewithReviewsFromDB = async (courseId: string) => {
  const result = await Course.findById(courseId);
  const reviews = await Review.find({ courseId });
  return { result, reviews };
};

export const courseServices = {
  createCourseIntoDB,
  getCoursesFromDB,
  getASpecificCoursewithReviewsFromDB,
  updateCourseFromDB,
};
