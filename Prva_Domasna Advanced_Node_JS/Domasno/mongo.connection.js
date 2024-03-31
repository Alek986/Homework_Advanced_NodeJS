import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const mongoConnection = async () => {
try {
    await mongoose.connect(process.env.MONGO_URL, {
        dbName: "recipe_db",
    });
    console.log("Connection to MongoDb success.")
} catch (error) {
    throw new Error ("Connection to MongoDB failed.")
};
};