import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config();

// ✅ Console log outside the object to debug env
console.log("Frontend URL is:", process.env.FRONTEND_URL);

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "HELLO WORLD AGAIN" });
});

app.use(errorMiddleware);

export default app;
