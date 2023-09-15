import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { RentNowController } from './rentNow.Controller';

const router = express.Router();

router.get(
  '/my-booking',
  auth(ENUM_USER_ROLE.RENTUSER),
  RentNowController.myBooking
);
router.get(
  '/booking-notifactuin',
  auth(ENUM_USER_ROLE.HOMEOWNER),
  RentNowController.bookingNotifactuin
);
router.post(
  '/:homeId/rent-booking',
  auth(ENUM_USER_ROLE.RENTUSER),
  RentNowController.rentBooking
);

export const RentNowRoutes = router;
