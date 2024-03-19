import express from "express";
import { getElements, createElement, updateElement, deleteElement } from "../controllers/elementController";

const router = express.Router();

router.get("/", getElements);
router.post("/createElement", createElement);
router.put("/updateElement", updateElement);
router.delete("/deleteElement", deleteElement);

module.exports = router;
