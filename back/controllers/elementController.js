import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getElements = async (req, res) => {
  try {
    const elements = await prisma.element.findMany({
      include: {
        pals: true,
      },
    });
    res.json(elements);
  } catch (error) {
    console.error('Error getting elements:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createElement = async (req, res) => {
  const { name, pals } = req.body;
  try {
    const element = await prisma.element.create({
      data: {
        name, pals: { connect: pals.map((pal) => ({ idPals: pal.id })) },
      },
      include: {
        pals: true,
      },
    });
    res.json(element);
  } catch (error) {
    console.error('Error creating element:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.deleteElement = async (req, res) => {
  const { idElement } = req.body;
  try {
    const element = await prisma.element.delete({
      where: { idElement: idElement },
      include: {
        pals: true,
      },
    });
    res.json(element);
  } catch (error) {
    console.error('Error deleting element:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateElement = async (req, res) => {
    const { idElement, name, pals } = req.body;
    try {
        const element = await prisma.element.update({
        where: { idElement: idElement },
        data: {
          name, pals: { connect: pals.map((pal) => ({ idPals: pal.id })) },
        },
        include: {
          pals: true,
        },
      });
      res.json(element);
  } catch (error) {
    console.error('Error updating element:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};