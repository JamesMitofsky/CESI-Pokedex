type ElementName = "Feu" | "Eau" | "Terre" | "Vent" | "Neutre";

type Element = {
  idElement: number;
  name: ElementName;
};

type Creature = {
  idPal: number;
  number: string;
  name: string;
  url: string;
  elements: Element[];
  partnerSkillId: number;
  partnerSkill: PartnerSkill;
  worksFor: WorksFor[];
  drops: Drop[];
};

type PartnerSkill = {
  idPartnerSkill: number;
  libelle: string;
};

type WorksFor = {
  idWorksFor: number;
  libelle: string;
};

type Drop = {
  idDrop: number;
  name: string;
};

export type { Creature };
