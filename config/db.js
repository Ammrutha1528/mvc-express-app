import mongoose from "mongoose";

const connectDB = (mongoUri) => {
  const uri = mongoUri || "mongodb+srv://amruthakande0_db_user:2bNmUKwwhRO2XqQk@cluster0.xzvaat5.mongodb.net/fsd_db?retryWrites=true&w=majority";
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.error("Problem while connecting mongoDB", err);
    });
};

export default connectDB;
