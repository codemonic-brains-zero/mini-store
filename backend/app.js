import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { dbCon } from './database/dbCon.js';
import { errorMiddleware } from './middleware/error.js';

const app = express();

// Load environment variables from .env files
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dbCon();

// Global error handling middleware
app.use(errorMiddleware);

export default app;
