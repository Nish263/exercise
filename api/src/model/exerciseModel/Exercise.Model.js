import ExerciseSchema from "./Exercise.Schema.js";

// insert user
export const icreateExercise = (obj) => {
  return ExerciseSchema.create(expense);
};

// get user
export const getExercises = (_id) => {
  return ExerciseSchema.findById(_id);
};

// deleteuser
export const deleteExercise = (filter) => {
  return ExerciseSchema.findOneAndDelete(filter);
};
