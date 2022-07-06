import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

//database connection
import { dbConnect } from "./src/config/db.js";
dbConnect();

// middleware
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// api here
import userRouter from "./src/routers/userRouter.js";
import exerciseRouter from "./src/routers/exerciseRouter.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/exercises", exerciseRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1> 404 NOT FOUND </h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running on ${PORT}`);
});
