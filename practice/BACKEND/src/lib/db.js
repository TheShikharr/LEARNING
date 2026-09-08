import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const app = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected :)")

    } catch (error) {
        console.log("MongoDB connection Failed", error)
    }
}