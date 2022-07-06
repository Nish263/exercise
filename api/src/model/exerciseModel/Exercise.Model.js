import ExerciseSchema from "./Exercise.Schema.js";

// insert exercise
export const createExercise = (expense) => {
  return ExerciseSchema.create(expense);
};

// get exercise
export const getExercises = (filter) => {
  return ExerciseSchema.find(filter);
};

// delete exercise
export const deleteExercise = (filter) => {
  return ExerciseSchema.findOneAndDelete(filter);
};
