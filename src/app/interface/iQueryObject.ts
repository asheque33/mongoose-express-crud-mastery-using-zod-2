export type IQueryObject = {
  [key: string]: unknown;
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: string;
  minPrice?: string | number;
  maxPrice?: string | number;
  tags?: string;
  starDate?: string;
  endDate?: string;
  language?: string;
  provider?: string;
  durationInWeeks?: number | string;
  level?: string;
};
