import express from "express";
import { createExercise } from "../model/exerciseModel/Exercise.Model.js";

const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("router got hit");
  next();
});

// get user
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the exercise Api",
  });
});

// create user
router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await createExercise({ ...req.body, userId: authorization });

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
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// login user
router.delete("/", (req, res) => {
  res.json({
    status: "success",
    user,
  });
});

export default router;
