import { ICategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payLoad: ICategory) => {
  const result = await Category.create(payLoad);
  return result;
};
// const getReviewsFromDB = async () => {
//   const result = await Review.find();
//   return result;
// };
// const getASpecificReviewFromDB = async (id: string) => {
//   const result = await Review.findById(id);
//   return result;
// };
// const updateReviewFromDB = async (id: string, payLoad: Partial<IReview>) => {
//   const result = await Review.findByIdAndUpdate(id, payLoad, {
//     new: true,
//     runValidators: true,
//   });
//   return result;
// };

export const categoryServices = {
  createCategoryIntoDB,
};
