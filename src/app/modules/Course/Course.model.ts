import { Schema, model } from 'mongoose';
import { ICourse, IDetails, ITags } from './Course.interface';

const tagsSchema = new Schema<ITags>({
  name: { type: String, required: [true, 'Name is required'] },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const detailsSchema = new Schema<IDetails>({
  level: {
    type: String,
    enum: {
      values: ['Beginner', 'Intermediate', 'Advanced'],
      message: '{VALUE} is not a valid level',
    },
  },
  description: { type: String, required: [true, 'Description is required'] },
});

const courseSchema = new Schema<ICourse>({
  title: { type: String, unique: true, required: [true, 'title is required'] },
  instructor: { type: String, required: [true, 'instructor is required'] },
  categoryId: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: 'Category',
    required: [true, 'categoryId is required'],
  },
  price: { type: Number, required: [true, 'price is required'] },
  tags: [tagsSchema],
  startData: { type: String, required: [true, 'startData is required'] },
  endData: { type: String, required: [true, 'endData is required'] },
  language: { type: String, required: [true, 'Language is required'] },
  provider: { type: String, required: [true, 'provider is  required'] },
  durationInWeeks: {
    type: Number,
    required: [true, 'durationInWeeks is required'],
  },
  details: detailsSchema,
});

export const Course = model<ICourse>('Course', courseSchema);
