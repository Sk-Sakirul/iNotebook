import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

export default connectDB;
