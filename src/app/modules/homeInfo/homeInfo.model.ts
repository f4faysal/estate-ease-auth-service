import { Schema, Types, model } from 'mongoose';
import { locationsEnaum, residential, statusEnaum } from './homeInfo.constant';
import { HomeInfoModel, IHomeInfo } from './homeInfo.interface';

// Define the schema for IHomeFeatures
// const HomeFeaturesSchema = new Schema<IHomeFeatures>({
//   hasGarden: { type: Boolean },
//   hasGarage: { type: Boolean },
//   hasInternet: { type: Boolean },
//   hasSecurity: { type: Boolean },
//   hasCleaning: { type: Boolean },
//   hasAirConditioning: { type: Boolean },
// });

// // Define the schema for IHomeSige
// const HomeSizeSchema = new Schema<IHomeSige>({
//   StringOfRooms: { type: String },
//   StringOfBathrooms: { type: String },
//   StringOfBalconies: { type: String },
//   StringOfWindos: { type: String },
//   StringOfFloors: { type: String },
//   sizePerUnit: { type: String },
//   totalSQFT: { type: String },
// });

// // Define the schema for IReview
// const ReviewSchema = new Schema<IReview>({
//   rating: { type: String, required: true },
//   review: [{ type: String }],
// });

// // Define the schema for IQuestion
// const QuestionSchema = new Schema<IQuestion>({
//   question: { type: String, required: true },
//   answers: [{ type: String }],
// });

// // Define the schema for IHomeDetails
// const HomeDetailsSchema = new Schema<IHomeDetails>({
//   title: { type: String, required: true },
//   tageLine: { type: String, required: true },
//   tages: [{ type: String }],
//   price: { type: String, required: true },
//   offerPrice: { type: String },
//   address: { type: String, required: true },
//   description: { type: String, required: true },
//   images: [{ type: String }],
//   homeType: { type: String, required: true },
//   homeSize: { type: String, required: true },
//   Location: {
//     type: String,
//     enum: [
//       'Demra', 'Dhaka Cantt.', 'Dhamrai', 'Dhanmondi', 'Gulshan', 'Jatrabari',
//       'Joypara', 'Keraniganj', 'Khilgaon', 'Khilkhet', 'Lalbag', 'Mirpur',
//       'Mohammadpur', 'Motijheel', 'Nawabganj', 'New Market', 'Palton', 'Ramna',
//       'Sabujbag', 'Savar', 'Sutrapur', 'Tejgaon', 'Tejgaon Industrial Area', 'Uttara'
//     ],
//     required: true,
//   },
//   homeSizeDetails: { type: HomeSizeSchema },
//   features: { type: HomeFeaturesSchema },
// });

const HomeSchema = new Schema<IHomeInfo, HomeInfoModel>(
  {
    homeOwnerId: { type: Types.ObjectId, ref: 'User' },
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
