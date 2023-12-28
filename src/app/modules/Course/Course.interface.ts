import { Types } from 'mongoose';

export type ITags = {
  name: string;
  isDeleted: boolean;
};
export type IDetails = {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
};
export type ICourse = {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId;
  price: number;
  tags: ITags[];
  startData: string;
  endData: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: IDetails;
};
