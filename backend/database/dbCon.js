import mongoose from 'mongoose';

export const dbCon = () => {
mongoose.connect(process.env.MONGODB_URI,
    {
        dbName: "MINI_STORE",
    }).then(()=>{
        console.log('connected to database');
    }).catch((err)=>{
        console.log(`some error occured while connecting to the database: ${err}`);
    });
}