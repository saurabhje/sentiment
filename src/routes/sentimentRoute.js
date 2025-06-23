import express from "express";
import { analyzeSentiment } from "../controller/sentimentController.js";
import apiLimiter from "../middleware/ratelimitter.js";
import { validateInput } from "../middleware/validation.js";

const router = express.Router();
router.post("/", apiLimiter, validateInput, analyzeSentiment);

export default router;