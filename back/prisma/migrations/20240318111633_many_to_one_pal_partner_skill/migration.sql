/*
  Warnings:

  - You are about to drop the `_PalToPartnerSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `palId` on the `Drop` table. All the data in the column will be lost.
  - Added the required column `partnerSkillId` to the `Pal` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_PalToPartnerSkill_B_index";

-- DropIndex
DROP INDEX "_PalToPartnerSkill_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PalToPartnerSkill";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_DropToPal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DropToPal_A_fkey" FOREIGN KEY ("A") REFERENCES "Drop" ("idDrop") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DropToPal_B_fkey" FOREIGN KEY ("B") REFERENCES "Pal" ("idPal") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drop" (
    "idDrop" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Drop" ("idDrop", "name") SELECT "idDrop", "name" FROM "Drop";
DROP TABLE "Drop";
ALTER TABLE "new_Drop" RENAME TO "Drop";
CREATE TABLE "new_Pal" (
    "idPal" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "partnerSkillId" INTEGER NOT NULL,
    CONSTRAINT "Pal_partnerSkillId_fkey" FOREIGN KEY ("partnerSkillId") REFERENCES "PartnerSkill" ("idPartnerSkill") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pal" ("idPal", "name", "number", "url") SELECT "idPal", "name", "number", "url" FROM "Pal";
DROP TABLE "Pal";
ALTER TABLE "new_Pal" RENAME TO "Pal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_DropToPal_AB_unique" ON "_DropToPal"("A", "B");

-- CreateIndex
CREATE INDEX "_DropToPal_B_index" ON "_DropToPal"("B");
