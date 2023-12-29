// import { NextFunction, Request, Response } from 'express';
// import { ZodSchema } from 'zod';

// export const validateRequest = (schema: ZodSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const result = await schema.safeParseAsync(req.body);
//     if (!result.success) {
//       next(result.error);
//     } else {
//       req.body = result.data;
//       next();
//     }
//   };
// };
// export default validateRequest;

import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //  validation check
      // is everything ok , send next() to the controller
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};
export default validateRequest;
