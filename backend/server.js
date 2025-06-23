
import dotenv from "dotenv";
dotenv.config(); // Must come before using process.env

console.log("🌐 FRONTEND_URL from .env:", process.env.FRONTEND_URL);

import mongoose from "mongoose";
import app from "./app.js";


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ DATABASE CONNECTED");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 SERVER HAS STARTED AT PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
