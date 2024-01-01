import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getUsers);

router.post('/create-rentUser', UserController.createRentUser);

router.post('/create-homeOwner', UserController.createHomeOwner);

router.post('/create-admin', UserController.createAdmin);

router.patch('/:id', UserController.updateUser);

export const UserRoutes = router;
