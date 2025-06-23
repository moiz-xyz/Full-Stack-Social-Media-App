import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI
        );
        console.log((`MongoDB connected `));

    } catch (error) {
        console.error(("MongoDB Connection failed:", error));
    }
}

export default connectDB;