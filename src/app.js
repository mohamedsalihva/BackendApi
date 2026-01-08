import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import userRoutes from './routes/UserRoutes.js';
import authRoutes  from './routes/AuthRoutes.js';
import adminRoutes from './routes/AdminRoutes.js';

const app = express();


app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

export default app;
