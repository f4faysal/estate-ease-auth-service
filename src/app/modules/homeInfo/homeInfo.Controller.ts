import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { default as sendResponce } from '../../../shared/sendResponse';
import { HomeFilterableFields } from './homeInfo.constant';
import { IHomeInfo } from './homeInfo.interface';
import { HomeInfoService } from './homeInfo.service';

const insertInToHomeInfo = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userId }: any = req.user;
  // const { ...HomeInfoData } = req.body;

  const result = await HomeInfoService.insertInToHomeInfo(req.body, userId);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HomeInfo is created successfully !',
    data: result,
  });
});
const createReview = catchAsync(async (req: Request, res: Response) => {
  const homeInfoID = req.params.id;
  const review = req.body.review;
  const { userId }: any = req.user;
  console.log(userId);
  const result = await HomeInfoService.createReview(homeInfoID, review, userId);

  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Home retrieved successfully !',
    data: result,
  });
});

const getAllHomeInfo = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, HomeFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await HomeInfoService.getAllHomeInfo(
    filters,
    paginationOptions
  );
  sendResponce<IHomeInfo[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HomeInfo retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});
const getSingleHomeInfo = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await HomeInfoService.getSingleHomeInfo(id);
  sendResponce<IHomeInfo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HomeInfo retrieved successfully !',
    data: result,
  });
});
const getMyProperty = catchAsync(async (req: Request, res: Response) => {
  // const filters = pick(req.query, HomeFilterableFields);
  // const paginationOptions = pick(req.query, paginationFields);
  const { userId }: any = req.user;
  const result = await HomeInfoService.getMyProperty(userId);
  sendResponce<IHomeInfo[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'my property retrieved successfully !',
    data: result,
  });
});

const deleteHomeInfo = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await HomeInfoService.deleteHomeInfo(id);
  sendResponce<IHomeInfo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HomeInfo deleted successfully !',
    data: result,
  });
});

export const HomeInfoController = {
  insertInToHomeInfo,
  getSingleHomeInfo,
  getAllHomeInfo,
  createReview,
  getMyProperty,
  deleteHomeInfo,
};
