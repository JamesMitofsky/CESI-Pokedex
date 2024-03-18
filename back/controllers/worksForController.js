import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getWorksFor = async (req, res) => {
  try {
    const worksFors = await prisma.worksFor.findMany({
      include: {
        pals: true,
      },
    });
    res.json(worksFors);
  } catch (error) {
    console.error('Error getting worksFors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createWorksFor = async (req, res) => {
  const { libelle, pals } = req.body;
  try {
    const worksFor = await prisma.worksFor.create({
      data: {
        libelle, pals: { connect: pals.map((pal) => ({ idElement: pal.id })) },
      },
      include: {
        pals: true,
      },
    });
    res.json(worksFor);
  } catch (error) {
    console.error('Error creating worksFor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.deleteWorksFor = async (req, res) => {
  const { idWorksFor } = req.body;
  try {
    const worksFor = await prisma.worksFor.delete({
      where: { idWorksFor: idWorksFor },
      include: {
        pals: true,
      },
    });
    res.json(worksFor);
  } catch (error) {
    console.error('Error deleting worksFor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateWorksFor = async (req, res) => {
    const { idWorksFor, libelle, pals } = req.body;
    try {
        const worksFor = await prisma.worksFor.update({
        where: { idWorksFor: idWorksFor },
        data: {
          libelle, pals: { connect: pals.map((pal) => ({ idElement: pal.id })) },
        },
        include: {
          pals: true,
        },
      });
    res.json(worksFor);
  } catch (error) {
    console.error('Error updating worksFor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};