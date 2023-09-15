import { Schema, Types, model } from 'mongoose';

import { IRentNow, RentNowModel } from './rentNow.interface';

const RentNowSchema = new Schema<IRentNow, RentNowModel>(
  {
    homeId: {
      type: Types.ObjectId,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
    },
    offerMessage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending',
    },
    offerPrice: {
      type: Number,
      required: true,
    },
    familyMembers: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const RentNow = model<IRentNow, RentNowModel>('HomeInfo', RentNowSchema);
