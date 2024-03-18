import express from "express";
import {
  getUsers,
  registerUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);
//router.put("/users/:id", updateUser);

module.exports = router;
