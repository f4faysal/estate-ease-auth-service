import express from 'express';
import { AdminController } from './admin.Controller';

const router = express.Router();

router.get('/:id', AdminController.getSingleAdmin);
router.get('/', AdminController.getAllAdmins);

router.patch('/:id', AdminController.updateAdmin);

router.delete('/:id', AdminController.deleteAdmin);

export const AdminRoutes = router;
