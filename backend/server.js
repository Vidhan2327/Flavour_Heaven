import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app.js";

// Optional: fallback for local dev
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("✅ DATABASE CONNECTED");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
