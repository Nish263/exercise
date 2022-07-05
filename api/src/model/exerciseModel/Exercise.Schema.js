import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Exercise", ExerciseSchema);
