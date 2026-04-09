import express from "express";
import authRoutes from "./routes/authRoutes.js";
import apartRoutes from "./routes/apartmentRoutes.js"
import { globalLimiter, loginLimiter } from "./middleware/ratelimiter.js"
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(globalLimiter, loginLimiter);
app.use("/api/auth", authRoutes);
app.use("/api/apartments", apartRoutes)
app.use("/uploads", express.static("uploads"));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(errorHandler);

export default app;