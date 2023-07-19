import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';


const router = express.Router();
const moduleRutes = [

  {
    path: '/admins',
    route: AdminRoutes,
  },
];
moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
