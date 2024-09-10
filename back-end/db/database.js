import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// make the function connection to database on demand
let isConnected = false;
const URL = `${process.env.DB_URL}`;                // .env    information
const dbName = `${process.env.DB_NAME}`;            // .env     information

export const connectToDatabase = async () =>{
    mongoose.set("strictQuery",true);
    if (isConnected) {
        console.log('Mongo is already connected');
        return
    }
    try {
        await mongoose.connect(URL, {
            dbName: dbName,
        });
        isConnected = true;
        console.log('connection to the database is established');
    } catch (error) {
        throw new Error(`MongoAPIError: ${error.message}`);
    }
}; 

export const disconnectFromDatabase = async () => {
    if (isConnected) {
        await mongoose.connection.close();
        isConnected = false;                  
    }
    console.log("connection closed... Wait until the next connection is established");
};

