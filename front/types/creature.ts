type Work = {
  name: string;
  level: number;
};

type NatureElement = "Feu" | "Eau" | "Terre" | "Vent" | "Neutre";

export type Creature = {
  id: number;
  name: string;
  number: number;
  element: NatureElement;
  partnerSkill: string;
  worksFor: Work[];
  drop: string[];
};
