import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
