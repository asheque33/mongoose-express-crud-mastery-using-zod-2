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
const getASpecificCourseFromDB = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};
const updateCourseFromDB = async (id: string, payLoad: Partial<ICourse>) => {
  const result = await Course.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const courseServices = {
  createCourseIntoDB,
  getCoursesFromDB,
  getASpecificCourseFromDB,
  updateCourseFromDB,
};
