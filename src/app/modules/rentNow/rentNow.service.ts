import { ObjectId } from 'mongoose';
import { IRentNow } from './rentNow.interface';

const rentBooking = (homeId: ObjectId): Promise<IRentNow> => {
  console.log('rentBooking', homeId);

  return homeId;
};

export const RentNowService = {
  rentBooking,
};
