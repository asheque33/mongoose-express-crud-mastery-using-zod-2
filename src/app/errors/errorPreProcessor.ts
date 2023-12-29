/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import handleValidationError from './handlerValidationError';
import handlerGenericError from './handlerGenericError';
import GenericError from '../../classes/errorClasses/GenericError';
import { ZodError } from 'zod';
import { IGenericErrorResponse } from '../interface/error';
import handleZodError from './handleZodError';
import handleDuplicateError from './handleDuplicateError';
import handleCastError from './handleCastError';

const errorPreproccesor = (err: any): IGenericErrorResponse => {
  if (err instanceof ZodError) {
    return handleZodError(err);
  } else if (err instanceof mongoose.Error.ValidationError) {
    return handleValidationError(err);
  } else if (err.code && err.code === 11000) {
    return handleDuplicateError(err);
  } else if (err instanceof mongoose.Error.CastError) {
    return handleCastError(err);
  } else if (err instanceof GenericError) {
    return handlerGenericError(err);
  } else {
    return {
      statusCode: 500,
      message: 'Unknown Error',
      errorMessage: 'error',
      errorDetailss: null,
    };
    // errorResponse = handlerGenericError(err)
  }
};

export default errorPreproccesor;
