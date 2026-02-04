import express from "express";
import { runTool } from "../controllers/ai.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/:tool", runTool);

export default router;
