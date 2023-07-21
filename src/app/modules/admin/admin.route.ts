import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.Controller';
import { AdminValidation } from './admin.Validation';

const router = express.Router();

router.get('/:id', AdminController.getSingleAdmin);
router.get('/', AdminController.getAllAdmins);
router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin
);
router.delete('/:id', AdminController.deleteAdmin);

export const AdminRoutes = router;
