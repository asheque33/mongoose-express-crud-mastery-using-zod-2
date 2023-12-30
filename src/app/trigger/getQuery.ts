import { Query } from 'mongoose';
import { IQueryObject } from '../interface/iQueryObject';

import { filter } from './filterData';
import { sort } from './sortData';
import { paginate } from './paginateData';

export const getQuery = <T>(modelQuery: Query<T[], T>, query: IQueryObject) => {
  const filteredQuery = filter(modelQuery, query);
  //   const searchedQuery = search(filteredQuery, query);
  const sortedQuery = sort(filteredQuery, query);
  const paginatedQuery = paginate(sortedQuery, query);
  return paginatedQuery;
};
