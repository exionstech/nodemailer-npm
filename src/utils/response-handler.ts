import { Response } from 'express';

export const sendSuccess = (res: Response, data: any, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const sendError = (res: Response, message = 'Error occurred', statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    message
  });
};