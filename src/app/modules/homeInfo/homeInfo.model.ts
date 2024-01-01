import { Schema, Types, model } from 'mongoose';

import { locationsEnaum, residential, statusEnaum } from './homeInfo.constant';
import { HomeInfoModel, IHomeInfo } from './homeInfo.interface';

const HomeSchema = new Schema<IHomeInfo, HomeInfoModel>(
  {
    homeOwnerId: {
      type: Types.ObjectId,
      ref: 'User',
    },
    homeStatus: {
      type: String,
      enum: statusEnaum,
      required: true,
    },

    home: {
      title: { type: String, required: true },
      tageLine: { type: String, required: true },
      tages: [{ type: String }],
      price: { type: String, required: true },
      offerPrice: { type: String },
      address: { type: String, required: true },
      description: { type: String, required: true },
      images: {
        type: [{ url: { type: String } }],
      },
      homeType: { type: String, required: true },
      homeSize: { type: String, required: true },
      residential: {
        type: String,
        enum: residential,
        required: true,
      },
      location: {
        type: String,
        enum: locationsEnaum,
        required: true,
      },
      homeSizeDetails: {
        numberOfRooms: { type: String },
        numberOfBathrooms: { type: String },
        numberOfBalconies: { type: String },
        numberOfWindos: { type: String },
        numberOfFloors: { type: String },
        sizePerUnit: { type: String },
        totalSQFT: { type: String },
      },
      features: {
        hasGarden: { type: Boolean },
        hasGarage: { type: Boolean },
        hasInternet: { type: Boolean },
        hasSecurity: { type: Boolean },
        hasCleaning: { type: Boolean },
      },
    },

    homeReview: {
      rating: { type: String, required: true },
      review: {
        review: { type: String },
        reviewer: { type: Types.ObjectId, ref: 'User' },
      },
    },
    ownerBehaviourCommonQuestion: [],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const HomeInfo = model<IHomeInfo, HomeInfoModel>('HomeInfo', HomeSchema);
