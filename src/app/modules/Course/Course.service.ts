import { object } from 'zod';
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
  const { details, ...remainingCourseData } = payLoad;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingCourseData,
  };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }
  console.log(modifiedUpdatedData);

  const result = await Course.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
// get reviews with CourseId
const getASpecificCoursewithReviewsFromDB = async (courseId: string) => {
  const course = await Course.findById(courseId);
  const reviews = await Review.find({ courseId });
  return { course, reviews };
};

export const courseServices = {
  createCourseIntoDB,
  getCoursesFromDB,
  getASpecificCoursewithReviewsFromDB,
  updateCourseFromDB,
};
