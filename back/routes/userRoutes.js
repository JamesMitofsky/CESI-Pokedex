import express from "express";
import {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;
