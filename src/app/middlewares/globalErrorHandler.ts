/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Response, Request, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { IErrorSources } from '../Interface/error';
import config from '../config';
import handleZodError from '../errors/handleZodError';
import handleMongooseError from '../errors/handleMongooseError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import AppError from '../errors/AppError';

// Only for express application development
const globalErrorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next,
) => {
  // default error handler
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorSources: IErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  // customize error handler with zod error for Validation
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handleMongooseError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }

  // ultimate return value
  return response.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
    stack: config.node_env === 'development' ? error?.stack : null,
  });
};

export default globalErrorHandler;

/*
pattern =>
1.message;
2.statusCode
3.errorSources= [
  path: '',
  message: '',
]
4.stack

*/
