import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getPartnerSkills = async (req, res) => {
  try {
    const partnerSkills = await prisma.partnerSkill.findMany({
      include: {
        pals: true,
      },
    });
    res.json(partnerSkills);
  } catch (error) {
    console.error('Error getting partnerSkills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createPartnerSkill = async (req, res) => {
  const { libelle, pals } = req.body;
  try {
    const partnerSkill = await prisma.partnerSkill.create({
      data: {
        libelle, pals: { connect: pals.map((pal) => ({ idPal: pal.id })) },
      },
      include: {
        pals: true,
      },
    });
    res.json(partnerSkill);
  } catch (error) {
    console.error('Error creating partnerSkill:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePartnerSkill = async (req, res) => {
  const { idPartnerSkill } = req.body;
  try {
    const partnerSkill = await prisma.partnerSkill.delete({
      where: { idPartnerSkill: idPartnerSkill },
      include: {
        pals: true,
      },
    });
    res.json(partnerSkill);
  } catch (error) {
    console.error('Error deleting partnerSkill:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePartnerSkill = async (req, res) => {
  const { idPartnerSkill, libelle, pals } = req.body;
  try {
    const partnerSkill = await prisma.partnerSkill.update({
      where: { idPartnerSkill: idPartnerSkill },
      data: {
        libelle, pals: { connect: pals.map((pal) => ({ idPal: pal.id })) },
      },
      include: {
        pals: true,
      },
    });
    res.json(partnerSkill);
  } catch (error) {
    console.error('Error updating partnerSkill:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};