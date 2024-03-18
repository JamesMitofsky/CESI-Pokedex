import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getDrops = async (req, res) => {
  try {
    const drops = await prisma.drop.findMany({
      include: {
        pals: true,
      },
    });
    res.json(drops);
  } catch (error) {
    console.error('Error getting drops:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createDrop = async (req, res) => {
  const { name, pals } = req.body;
  try {
    const drop = await prisma.drop.create({
      data: {
        name, pals: { connect: pals.map((pal) => ({ idPal: pal.id })) },
      },
      include: {
        pals: true,
      },
    });
    res.json(drop);
  } catch (error) {
    console.error('Error creating drop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteDrop = async (req, res) => {
  const { idDrop } = req.body;
  try {
    const drop = await prisma.drop.delete({
      where: { idDrop: idDrop },
      include: {
        pals: true,
      },
    });
    res.json(drop);
  } catch (error) {
    console.error('Error deleting drop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateDrop = async (req, res) => {
  const { idDrop, name, pals } = req.body;
  try {
    const drop = await prisma.drop.update({
      where: { idDrop: idDrop },
      data: {
        name, pals: { connect: pals.map((pal) => ({ idPal: pal.id })) },
      },
      include: {
        pals: true,
      },
    });
    res.json(drop);
  } catch (error) {
    console.error('Error updating drop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};