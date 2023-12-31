/* eslint-disable no-unused-vars */
import { Model, ObjectId, Types } from 'mongoose';

export type IUser = {
  _id?: ObjectId;
  id: string;
  role: 'Admin' | 'RentUser' | 'HomeOwner';
  password: string;
  nidNumber: number;
  nidVerified: boolean;
  needsPasswordChange: boolean;
  admin?: Types.ObjectId;
  rentUser?: Types.ObjectId;
  homeOwner?: Types.ObjectId;
};

export type ISingUpUserResponse = {
  accessToken: string;
  refreshToken?: string;
  newUserAllData: IUser | null;
};

// export type IUserMethods = {
//   isUserExist(id: string): Promise<Partial<IUser> | null>;
//   isPasswordMatched(
//     givenPassword: string,
//     savedPassword: string
//   ): Promise<boolean>;
// };

export type UserModel = {
  isUserExist(
    id: string
  ): Promise<Pick<IUser, 'id' | 'password' | 'role' | 'needsPasswordChange'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
