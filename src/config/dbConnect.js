import mongoose from "mongoose";

export default async function dbConnect(){
    mongoose.connect(process.env.DB_STRING);

    return mongoose.connection;
}