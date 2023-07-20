import express from 'express';
import { RentUserController } from './rentUser.controller';

const router = express.Router();

router.get('/:id', RentUserController.getSingleRentUser);
router.get('/', RentUserController.getAllRentUsers);
router.delete('/:id', RentUserController.deleteRentUser);
router.patch('/:id', RentUserController.updateRentUser);

export const RentUserRoutes = router;
