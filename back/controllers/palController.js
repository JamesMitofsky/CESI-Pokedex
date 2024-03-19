import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.getPals = async (req, res) => {
  try {
    const pals = await prisma.pal.findMany({
      include: {
        elements: true,
        partnerSkill: true,
        worksFor: true,
        drops: true,
      },
    });
    res.json(pals);
  } catch (error) {
    console.error('Error getting pals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getOnePal = async (req, res) => {
  const { idPal } = req.body;
  try {
    const pal = await prisma.pal.findUnique({
      where: { idPal: idPal },
      include: {
        elements: true,
        partnerSkill: true,
        worksFor: true,
        drops: true,
      },
    });
    res.json(pal);
  } catch (error) {
    console.error('Error getting pal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createPal = async (req, res) => {
  const { number, name, url, elements, partnerSkill, worksFor, drops } = req.body;
  try {
    const pal = await prisma.pal.create({
      data: {
        number, name, url, elements: { connect: elements.map((element) => ({ idElement: element.id })) },
        partnerSkill: { connect: { idPartnerSkill: partnerSkill } },
        worksFor: { connect: worksFor.map((WorkFor) => ({ idWorksFor: WorkFor.id })) },
        drops: { connect: drops.map((Drop) => ({ idDrop: Drop.id })) }
      },
      include: {
        elements: true,
        partnerSkill: true,
        worksFor: true,
        drops: true,
      },
    });
    res.json(pal);
  } catch (error) {
    console.error('Error creating pal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.deletePal = async (req, res) => {
  const { idPal } = req.body;
  try {
    const pal = await prisma.pal.delete({
      where: { idPal: idPal },
      include: {
        elements: true,
        partnerSkill: true,
        worksFor: true,
        drops: true,
      },
    });
    res.json(pal);
  } catch (error) {
    console.error('Error deleting pal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePal = async (req, res) => {
  const { idPal, number, name, url, elements, partnerSkill, worksFor, drops } = req.body;
  try {
    const pal = await prisma.pal.update({
      where: { idPal: idPal },
      data: {number, name, url, elements: { connect: elements.map((element) => ({ idElement: element.id })) },
      partnerSkill: { connect: { idPartnerSkill: partnerSkill } },
      worksFor: { connect: worksFor.map((WorkFor) => ({ idworksFor: WorkFor.id })) },
      drops: { connect: drops.map((Drop) => ({ idDrop: Drop.id })) }},
      include: {
        elements: true,
        partnerSkill: true,
        worksFor: true,
        drops: true,
      },
    });
    res.json(pal);
  } catch (error) {
    console.error('Error updating pal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};