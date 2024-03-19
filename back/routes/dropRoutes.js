import express from "express";
import { getDrops, createDrop, updateDrop, deleteDrop } from "../controllers/dropController";

const router = express.Router();

router.get("/", getDrops);
router.post("/createDrop", createDrop);
router.put("/updateDrop", updateDrop);
router.delete("/deleteDrop", deleteDrop);

module.exports = router;
