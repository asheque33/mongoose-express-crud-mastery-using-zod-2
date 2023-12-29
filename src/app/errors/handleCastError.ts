// import mongoose from 'mongoose';
// import { IGenericErrorResponse } from '../Interface/error';

// const handleCastError = (
//   error: mongoose.Error.CastError,
// ): IGenericErrorResponse => {
//   const errorSources = [
//     {
//       path: error?.path,
//       message: error?.message,
//     },
//   ];
//   const statusCode = 400;
//   return {
//     statusCode,
//     message: 'Invalid ID Provided',
//     errorSources,
//   };
// };
// export default handleCastError;
