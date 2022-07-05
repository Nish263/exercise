import express from "express";
import { insertExercise } from "../model/exerciseModel/Exercise.Model.js";
import { insertUser, findUser } from "../model/userModel/User.Model.js";
const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("router got hit");
  next();
});

// get user
router.get("/", (req, res) => {
  res.send("Welcome to the exercise Api");
});

// register user
router.post("/", async (req, res) => {
  try {
    const { authorization } = req.body;
    const result = await insertExercise(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "expenses added successfully",
        })
      : res.json({
          status: "error",
          message: "Failed to add expenses",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("duplicate key error collection")) {
      message = "This email had been already registered";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const user = await findUser(req.body);

    user?._id
      ? res.json({
          status: "success",
          user,
        })
      : res.json({
          status: "error",
          message: "Login failed, Please try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
