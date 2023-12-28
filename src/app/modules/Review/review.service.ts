import { IReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (payLoad: IReview) => {
  const result = await Review.create(payLoad);
  return result;
};
const getReviewsFromDB = async () => {
  const result = await Review.find();
  return result;
};
const getASpecificReviewFromDB = async (id: string) => {
  const result = await Review.findById(id);
  return result;
};
const updateReviewFromDB = async (id: string, payLoad: Partial<IReview>) => {
  const result = await Review.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const reviewServices = {
  createReviewIntoDB,
  getReviewsFromDB,
  getASpecificReviewFromDB,
  updateReviewFromDB,
};
