import express from "express";
import { getPals, createPal, updatePal, deletePal, createManyPals } from "../controllers/palController";

const router = express.Router();

router.get("/", getPals);
router.post("/createPal", createPal);
router.put("/updatePal", updatePal);
router.delete("/deletePal", deletePal);
router.post("/createManyPals", createManyPals);

module.exports = router;
