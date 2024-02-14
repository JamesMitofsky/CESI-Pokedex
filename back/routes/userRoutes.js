import express from "express";
import { getUsers, addUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.post("/addUser", addUser);

module.exports = router;
