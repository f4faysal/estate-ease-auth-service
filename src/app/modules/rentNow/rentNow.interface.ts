import { Model, ObjectId } from 'mongoose';

export type IRentNow = {
  homeId: ObjectId;
  userId: ObjectId;
  offerMessage: string;
  status: 'pending' | 'accepted' | 'rejected';
  offerPrice: number;
  familyMembers: number;
  createdAt: Date;
  updatedAt: Date;
};

export type RentNowModel = Model<IRentNow, Record<string, unknown>>;

// export type IHomeFilters = {
//   searchTerm?: string;
//   location?: string;
//   residential?: string;
//   price?: number;
//   homeSize?: number;
// };
