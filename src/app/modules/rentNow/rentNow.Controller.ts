import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RentNowService } from './rentNow.service';

const rentBooking = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { homeId } = req.params as any;
  const { userId } = req.user as any;
  const bookingData = req.body;
  const result = await RentNowService.rentBooking(homeId, bookingData, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rent Booking Successfully !',
    data: result,
  });
});
const myBooking = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userId } = req.user as any;

  const result = await RentNowService.myBooking(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Booking Fesaed Successfully !',
    data: result,
  });
});
const bookingNotifactuin = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userId } = req.user as any;

  const result = await RentNowService.bookingNotifactuin(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Notifactuin Successfully !',
    data: result,
  });
});

export const RentNowController = {
  rentBooking,
  myBooking,
  bookingNotifactuin,
};
