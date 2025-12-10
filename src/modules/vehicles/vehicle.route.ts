// src/modules/vehicles/vehicle.route.ts
import express from 'express';
import {
  createVehicleController,
  getVehiclesController,
  getVehicleController,
  updateVehicleController,
  deleteVehicleController,
} from './vehicle.controller';
import { authenticate, authorize } from '../../middlewares/auth.middleware';

const router = express.Router();

// Admin only
router.post('/', authenticate, authorize('admin'), createVehicleController);
router.put(
  '/:vehicleId',
  authenticate,
  authorize('admin'),
  updateVehicleController
);
router.delete(
  '/:vehicleId',
  authenticate,
  authorize('admin'),
  deleteVehicleController
);

// Public
router.get('/', getVehiclesController);
router.get('/:vehicleId', getVehicleController);

export default router;
