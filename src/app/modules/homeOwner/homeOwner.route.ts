import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { HomeOwnerController } from './homeOwner.controller';
import { HomeOwnerValidation } from './homeOwner.validation';

const router = express.Router();

router.get('/:id', HomeOwnerController.getSingleHomeOwner);
router.get('/', HomeOwnerController.getAllHomeOwners);
router.delete('/:id', HomeOwnerController.deleteHomeOwner);
router.patch(
  '/:id',
  validateRequest(HomeOwnerValidation.updateHomeOwnerZodSchema),
  HomeOwnerController.updateHomeOwner
);

export const HomeOwnerRoutes = router;
