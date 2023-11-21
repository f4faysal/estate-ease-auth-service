/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import { ObjectId, SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { User } from '../user/user.model';
import { IHomeFilters, IHomeInfo } from './homeInfo.interface';
import { HomeInfo } from './homeInfo.model';

const insertInToHomeInfo = async (
  payload: IHomeInfo,
  userId: ObjectId
): Promise<IHomeInfo> => {
  const isUserExist = await User.findOne({ _id: userId });

  console.log(payload);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  if (!isUserExist.nidVerified) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'Please verify your NID first ! Contact with admin for more info.'
    );
  }

  payload.homeOwnerId = userId;
  payload.homeStatus = 'pending';

  payload.home.homeSize = payload.home.homeSizeDetails.totalSQFT || '0';

  payload.ownerBehaviourCommonQuestion = [
    {
      question: 'Owner behavior?',
      answers: ['Good', 'Average', 'Poor'],
    },
    {
      question: 'The owner provides the information when you rent, is it true?',
      answers: ['No', 'Yes'],
    },
    {
      question: 'Is there any electricity or gas problem?',
      answers: ['Yes', 'No'],
    },
    {
      question: 'Does the owner create problems when guests come?',
      answers: ['No', 'Yes'],
    },
  ];
  payload.homeReview = {
    rating: 0,
    review: [],
  };

  const result = await HomeInfo.create(payload);
  return result;
};

const createReview = async (
  homeInfoID: string,
  reviewText: string,
  userId: string
): Promise<any> => {
  const reviewData = {
    review: reviewText, // Assign the review text
    reviewer: userId, // Assign the user ID as the reviewer
  };

  const result = await HomeInfo.updateOne(
    { _id: homeInfoID },
    { $push: { 'homeReview.review': reviewData } }
  );
  return result;
};

const getAllHomeInfo = async (
  filters: IHomeFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IHomeInfo[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  // Search needs $or for searching in specified fields
  // if (searchTerm) {
  //   andConditions.push({
  //     $or: homeSearchableFields.map(field => ({
  //       [field]: {
  //         $regex: searchTerm,
  //         $options: 'i',
  //       },
  //     })),
  //   });
  // }

  if (searchTerm) {
    const searchableFields = [
      'home.title',
      'home.tageLine',
      'home.tages',
      'home.description',
      'home.location',
      'home.residential',
      // Add other fields you want to search here
    ];

    andConditions.push({
      $or: searchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // Filters needs $and to fulfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [`home.${field}`]: value,
      })),
    });
  }
  // Dynamic sort needs  fields to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // If there is no condition , put {} to give all data
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await HomeInfo.find(whereConditions)
    .populate('homeOwnerId')
    .populate({
      path: 'homeOwnerId.homeOwner',
      model: 'HomeOwner',
    })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await HomeInfo.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleHomeInfo = async (id: string): Promise<IHomeInfo | null> => {
  const result = await HomeInfo.findOne({ _id: id })
    .populate('homeOwnerId')
    .populate({
      path: 'homeOwnerId.homeOwner',
      model: 'HomeOwner',
    });

  return result;
};

export const HomeInfoService = {
  insertInToHomeInfo,
  getAllHomeInfo,
  createReview,
  getSingleHomeInfo,
};
