import express from "express";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// 👇 middleware applied to ALL routes below
router.use(protect);

router.post("/email", (req, res) => {
  res.json({ message: "AI email generated" });
});

router.post("/resume", (req, res) => {
  res.json({ message: "AI resume generated" });
});

export default router;
