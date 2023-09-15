import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RentNowService } from './rentNow.service';

const rentBooking = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { homeId } = req.params as any;
  const result = await RentNowService.rentBooking(homeId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rent Booking Successfully !',
    data: result,
  });
});

export const RentNowController = {
  rentBooking,
};
