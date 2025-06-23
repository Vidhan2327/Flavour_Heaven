import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config();

const app = express();


console.log("✅ FRONTEND_URL:", process.env.FRONTEND_URL);


const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/reservation", reservationRouter);


app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "HELLO WORLD AGAIN" });
});

app.use(errorMiddleware);

export default app;
