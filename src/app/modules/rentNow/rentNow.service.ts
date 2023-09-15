import { ObjectId } from 'mongoose';
import { IRentNow } from './rentNow.interface';
import { RentNow } from './rentNow.model';

const rentBooking = async (
  homeId: ObjectId,
  payload: IRentNow,
  userId: ObjectId
): Promise<IRentNow> => {
  payload.homeId = homeId;
  payload.userId = userId;

  const rentNow = await RentNow.create(payload);
  return rentNow;
};

const myBooking = async (userId: ObjectId): Promise<IRentNow[]> => {
  const rentNow = await RentNow.find({ id: userId });
  return rentNow;
};
const bookingNotifactuin = async (userId: ObjectId): Promise<IRentNow[]> => {
  const rentNow = await RentNow.find({ id: userId });
  return rentNow;
};

export const RentNowService = {
  rentBooking,
  myBooking,
  bookingNotifactuin,
};
