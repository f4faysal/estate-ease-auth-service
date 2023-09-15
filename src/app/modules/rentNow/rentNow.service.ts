import { ObjectId } from 'mongoose';
import { HomeInfo } from '../homeInfo/homeInfo.model';
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
  const rentNow = await RentNow.find({ userId });
  return rentNow;
};

const bookingNotifactuin = async (
  homeOwnerId: ObjectId
): Promise<IRentNow[]> => {
  const myHomes = await HomeInfo.find({ homeOwnerId }).select('homeOwnerId');

  // const rentNotifactuin = await RentNow.find({ homeId: myHomes[0].homeOwnerId });

  const rentNotifactuin = await RentNow.find({
    homeId: { $in: myHomes.map(home => home.homeOwnerId) },
  }).select(['status', 'offerPrice', 'offerMessage', 'familyMembers']);

  console.log(rentNotifactuin);

  // await RentNow.find({ homeId: { $in: myHomes.map((home) => home._id) } });
  return rentNotifactuin;
};

export const RentNowService = {
  rentBooking,
  myBooking,
  bookingNotifactuin,
};
