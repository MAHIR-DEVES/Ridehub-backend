import express from 'express';
import cors from 'cors';
import userRoutes from './modules/users/user.route';
import authRoutes from './modules/auth/auth.route';
import vehicleRoutes from './modules/vehicles/vehicle.route';
import bookingRoutes from './modules/bookings/booking.routes';

const app = express();

app.use(express.json());
app.use(cors());

// auth
app.use('/api/v1/auth', authRoutes);

// Mount users route
app.use('/api/v1/users', userRoutes);

// vehicles
app.use('/api/v1/vehicles', vehicleRoutes);

// booking
app.use('/api/v1/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Vehicle Rental API Running...');
});

export default app;
