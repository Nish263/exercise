import UserSchema from "./User.Schema.js";

// insert user
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

// get user
export const getUser = (_id) => {
  return UserSchema.findById(_id);
};

// update user
export const updateUser = (_id, obj) => {
  return UserSchema.findByIdAndUpdate(_id, obj);
};
