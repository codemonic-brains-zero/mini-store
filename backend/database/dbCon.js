import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbCon = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in the environment variables.');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "MINI_STORE",
            connectTimeoutMS: 20000, // 20 seconds timeout
            // Removed useNewUrlParser and useUnifiedTopology
        });
        console.log('Connected to database');
    } catch (err) {
        console.error(`An error occurred while connecting to the database: ${err.message}`);
    }

    mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.once('open', () => {
        console.log('MongoDB connection established successfully');
    });
};
