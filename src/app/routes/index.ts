import express from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();
const moduleRutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
];
moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
