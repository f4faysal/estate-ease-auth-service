// const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, adminFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);
//   const result = await AdminService.getAllAdmins(filters, paginationOptions);
//   sendResponse<IAdmin[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admins retrieved successfully !',
//     meta: result.meta,
//     data: result.data,
//   });
// });
// const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await AdminService.getSingleAdmin(id);
//   sendResponse<IAdmin>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin retrieved successfully !',
//     data: result,
//   });
// });
// const updateAdmin = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const result = await AdminService.updateAdmin(id, updatedData);
//   sendResponse<IAdmin>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin updated successfully !',
//     data: result,
//   });
// });
// const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await AdminService.deleteAdmin(id);
//   sendResponse<IAdmin>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin deleted successfully !',
//     data: result,
//   });
// });

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { default as sendResponce } from '../../../shared/sendResponse';
import { HomeInfoService } from './homeInfo.service';

const insertInToHomeInfo = catchAsync(async (req: Request, res: Response) => {
  const { ...HomeInfoData } = req.body;
  const result = await HomeInfoService.insertInToHomeInfo(HomeInfoData);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully !',
    data: result,
  });
});

export const HomeInfoController = {
  insertInToHomeInfo,
};
