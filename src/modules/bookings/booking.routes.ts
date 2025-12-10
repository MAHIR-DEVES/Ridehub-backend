import { Router } from 'express';
import bookingController from './booking.controller';
import { authenticate, authorize } from '../../middlewares/auth.middleware';

const router = Router();

router.post(
  '/',
  authenticate,
  authorize('admin', 'customer'),
  bookingController.createBooking
);
router.get(
  '/',
  authenticate,
  authorize('admin', 'customer'),
  bookingController.getBookings
);
router.put(
  '/cancel/:bookingId',
  authenticate,
  authorize('customer'),
  bookingController.cancelBooking
);
router.put(
  '/return/:bookingId',
  authenticate,
  authorize('admin'),
  bookingController.returnVehicle
);

export default router;
