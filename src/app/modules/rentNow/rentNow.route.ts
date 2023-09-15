import express from 'express';
import { RentNowController } from './rentNow.Controller';

const router = express.Router();

router.post('/:homeId/rent-booking', RentNowController.rentBooking);

export const RentNowRoutes = router;
