import express from "express";
import { insertUser } from "../model/userModel/User.Model.js";
const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("router got hit");
  next();
});

// get user
router.get("/", (req, res) => {
  res.send("get user");
});

// register user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          statsu: "success",
          message: "User registration successfull",
        })
      : res.json({
          status: "error",
          message: "User registration failed, Please try again later",
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
router.post("/login", (req, res) => {
  console.log(req.body);
  res.json("login user");
});

export default router;
