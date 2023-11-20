import { Model, ObjectId } from 'mongoose';

export type IHomeFeatures = {
  hasGarden?: boolean;
  hasGarage?: boolean;
  hasInternet?: boolean;
  hasSecurity?: boolean;
  hasCleaning?: boolean;
};

export type IHomeSige = {
  numberOfRooms?: string;
  numberOfBathrooms?: string;
  numberOfBalconies?: string;
  numberOfWindos?: string;
  numberOfFloors?: string;
  sizePerUnit?: string;
  totalSQFT?: string;
};
export type Images = {
  url: string;
};

export type IHomeDetails = {
  title: string;
  tageLine: string;
  tages?: string[];
  price: string;
  offerPrice?: string;
  address: string;
  description: string;
  images: Images[];
  homeSize: string;
  homeType: string;
  residential:
    | 'Apartment'
    | 'House'
    | 'Duplex'
    | 'Condo'
    | 'Townhouse'
    | 'Villa'
    | 'Penthouse'
    | 'Studio';
  location:
    | 'Demra'
    | 'Dhaka Cantt.'
    | 'Dhamrai'
    | 'Dhanmondi'
    | 'Gulshan'
    | 'Jatrabari'
    | 'Joypara'
    | 'Keraniganj'
    | 'Khilgaon'
    | 'Khilkhet'
    | 'Lalbag'
    | 'Mirpur'
    | 'Mohammadpur'
    | 'Motijheel'
    | 'Nawabganj'
    | 'New Market'
    | 'Palton'
    | 'Ramna'
    | 'Sabujbag'
    | 'Savar'
    | 'Sutrapur'
    | 'Tejgaon'
    | 'Tejgaon Industrial Area'
    | 'Uttara';
  homeSizeDetails: IHomeSige;
  features: IHomeFeatures;
};

export type IReviewer = {
  review: string;
  reviewer: ObjectId | string;
};

export type IReview = {
  rating: number;
  review: IReviewer[];
};

export type IQuestion = {
  question: string;
  answers: string[];
};

export type IHomeInfo = {
  homeOwnerId: ObjectId;
  homeStatus:
    | 'available'
    | 'rentedOut'
    | 'rentedOutApproval'
    | 'pending'
    | 'unavailableApproval';
  home: IHomeDetails;
  homeReview: IReview;
  ownerBehaviourCommonQuestion: IQuestion[];
};

export type HomeInfoModel = Model<IHomeInfo, Record<string, unknown>>;

export type IHomeFilters = {
  searchTerm?: string;
  location?: string;
  residential?: string;
  price?: string;
  homeSize?: string;
};
