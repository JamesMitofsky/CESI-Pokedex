import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

exports.registerUser = async (req, res) => {
  const { Name, Email, Password } = req.body;
  const user = await prisma.user.create({
    data: { Name, Email, Password },
  });
  res.json(user);
};
