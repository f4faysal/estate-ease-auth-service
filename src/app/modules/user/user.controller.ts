import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ISingUpUserResponse, IUser } from './user.interface';
import { UserService } from './user.service';

const createRentUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // console.log(req.cookies, 'cookies');
    const { rentUser, ...userData } = req.body;
    const result = await UserService.createRentUser(rentUser, userData);
    sendResponse<ISingUpUserResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

const createHomeOwner: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { homeOwner, ...userData } = req.body;
    const result = await UserService.createHomeOwner(homeOwner, userData);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...userData } = req.body;
    const result = await UserService.createAdmin(admin, userData);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: result,
    });
  }
);

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await UserService.updateUser(id, data);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!',
    data: result,
  });
});

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUsers();
  sendResponse<IUser | any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!',
    data: result,
  });
});

export const UserController = {
  createRentUser,
  createHomeOwner,
  createAdmin,
  updateUser,
  getUsers,
};
