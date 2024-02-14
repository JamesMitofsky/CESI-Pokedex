import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getPals = async (req, res) => {
  const pals = await prisma.pal.findMany();
  res.json(pals);
};
