import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
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

/*exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { Name, Email, Password } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { Name, Email, Password },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Could not update user" });
  }
};
*/
