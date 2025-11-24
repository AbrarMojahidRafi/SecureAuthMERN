import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "SecureAuthMERN",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB is Connected`);
    } catch (error) {
        console.error(`Error while connecting to database: ${error.message}`);
        process.exit(1);
    }
};
