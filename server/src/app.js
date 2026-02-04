import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import aiRoutes from "./routes/ai.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

app.use("/api/auth", authRoutes);


app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl
  });
});

export default app;
