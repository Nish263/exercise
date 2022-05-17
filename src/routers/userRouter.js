import express from "express";

const router = express.Router();

// create user
router.get("/", (req, res) => {
  res.json({
    message: "get method",
  });
});

// login user
router.post("/", (req, res) => {
  res.json({
    message: "post method",
  });
});

// delete user
router.delete("/", (req, res) => {
  res.json({
    message: "delete method",
  });
});

export default router;
