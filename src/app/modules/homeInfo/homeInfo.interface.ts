import { Model } from 'mongoose';

export type HomeFeatures = {
  hasGarden?: boolean;
  hasGarage?: boolean;
  hasInternet?: boolean;
  hasSecurity?: boolean;
  hasCleaning?: boolean;
  hasAirConditioning?: boolean;
};

export type HomeSige = {
  numberOfRooms?: number;
  numberOfBathrooms?: number;
  numberOfFloors?: number;
  sizePerUnit?: string;
  totalSQFT?: number;
};

export type HomeDetails = {
  title: string;
  price: number;
  address: string;
  description: string;
  images: string[];
  homeType: string;
  homeSize: number;
  location: string;
  homeSizeDetails: HomeSige;
  features: HomeFeatures;
};

export type IHomeInfo = {
  homeOwnerId: string;
  home: HomeDetails;
};

export type HomeInfoModel = Model<IHomeInfo, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  gender?: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
};
