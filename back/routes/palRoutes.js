import express from "express";
import { getPals } from "../controllers/palController";

const router = express.Router();

router.get("/", getPals);

module.exports = router;
