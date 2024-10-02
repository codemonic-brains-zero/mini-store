import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import itemRouter from './routes/itemRoutes.js'
import { dbCon } from './database/dbCon.js';
import { errorMiddleware } from './middleware/error.js';

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/item',itemRouter)

dbCon();

app.use(errorMiddleware);

export default app;