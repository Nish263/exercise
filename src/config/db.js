import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const conString = "mongodb://localhost:27017/exercise";
    const newConnect = mongoose.connect(conString);

    newConnect && console.log("mongoDb is connected");
  } catch (error) {
    console.log(error);
  }
};
