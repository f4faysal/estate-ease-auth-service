import express from 'express';
import { HomeOwnerController } from './homeOwner.controller';

const router = express.Router();

router.get('/:id', HomeOwnerController.getSingleHomeOwner);
router.get('/', HomeOwnerController.getAllHomeOwners);
router.delete('/:id', HomeOwnerController.deleteHomeOwner);
router.patch('/:id', HomeOwnerController.updateHomeOwner);

export const HomeOwnerRoutes = router;
