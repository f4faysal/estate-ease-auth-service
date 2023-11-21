import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { HomeInfoController } from './homeInfo.Controller';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.HOMEOWNER),
  HomeInfoController.insertInToHomeInfo
);
router.post(
  '/review/:id',
  auth(ENUM_USER_ROLE.RENTUSER),
  HomeInfoController.createReview
);

router.get('/', HomeInfoController.getAllHomeInfo);
router.get('/:id', HomeInfoController.getSingleHomeInfo);
router.get(
  '/my-property',
  auth(ENUM_USER_ROLE.HOMEOWNER),
  HomeInfoController.getMyProperty
);
router.get('/review/:id');

export const HomeInfoRoutes = router;
