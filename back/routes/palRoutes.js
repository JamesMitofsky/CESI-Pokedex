import express from "express";
import { getPals, getOnePal, createPal, updatePal, deletePal } from "../controllers/palController";

const router = express.Router();

router.get("/", getPals);
router.get("/getOnePal", getOnePal);
router.post("/createPal", createPal);
router.put("/updatePal", updatePal);
router.delete("/deletePal", deletePal);

module.exports = router;
