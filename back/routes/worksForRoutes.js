import express from "express";
import { getWorksFor, createWorksFor, updateWorksFor, deleteWorksFor } from "../controllers/worksForController";

const router = express.Router();

router.get("/", getWorksFor);
router.post("/createWorksFor", createWorksFor);
router.put("/updateWorksFor", updateWorksFor);
router.delete("/deleteWorksFor", deleteWorksFor);

module.exports = router;
