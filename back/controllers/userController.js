import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const secretKey = "moncodesecret";

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

exports.loginUser = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await prisma.user.findFirst({ where: { Email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.ID }, secretKey, {
      expiresIn: "12h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Could not log in user" });
  }
};

exports.registerUser = async (req, res) => {
  const { Name, Email, Password } = req.body;
  try {
    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(Password, 10);
    // Créer l'utilisateur avec le mot de passe hashé
    const user = await prisma.user.create({
      data: { Name, Email, Password: hashedPassword },
    });
    res.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Could not create user" });
  }
};

exports.updateUser = async (req, res) => {
  const { ID, Name, Email } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { ID: ID },
      data: { Name, Email },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Could not update user" });
  }
};

exports.deleteUser = async (req, res) => {
  const { ID } = req.body;

  try {
    await prisma.user.delete({
      where: { ID: ID },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Could not delete user" });
  }
};
