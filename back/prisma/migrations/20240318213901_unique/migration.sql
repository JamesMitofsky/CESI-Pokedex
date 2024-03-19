/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Drop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Element` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[libelle]` on the table `PartnerSkill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[libelle]` on the table `WorksFor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Drop_name_key" ON "Drop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Element_name_key" ON "Element"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerSkill_libelle_key" ON "PartnerSkill"("libelle");

-- CreateIndex
CREATE UNIQUE INDEX "WorksFor_libelle_key" ON "WorksFor"("libelle");
