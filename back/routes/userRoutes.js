import express from "express";
import { getUsers, addUser, getPals } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.post("/addUser", addUser);
router.get("/pals", getPals);

module.exports = router;
