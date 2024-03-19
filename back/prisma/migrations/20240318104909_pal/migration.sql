/*
  Warnings:

  - You are about to drop the `Pals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DropToPals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ElementToPals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PalsToPartnerSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PalsToWorksFor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Pals";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DropToPals";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ElementToPals";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PalsToPartnerSkill";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PalsToWorksFor";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Pal" (
    "idPal" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Number" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PalToPartnerSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PalToPartnerSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Pal" ("idPal") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PalToPartnerSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "PartnerSkill" ("idPartnerSkill") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PalToWorksFor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PalToWorksFor_A_fkey" FOREIGN KEY ("A") REFERENCES "Pal" ("idPal") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PalToWorksFor_B_fkey" FOREIGN KEY ("B") REFERENCES "WorksFor" ("idWorksFor") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ElementToPal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ElementToPal_A_fkey" FOREIGN KEY ("A") REFERENCES "Element" ("idElement") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ElementToPal_B_fkey" FOREIGN KEY ("B") REFERENCES "Pal" ("idPal") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DropToPal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DropToPal_A_fkey" FOREIGN KEY ("A") REFERENCES "Drop" ("idDrop") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DropToPal_B_fkey" FOREIGN KEY ("B") REFERENCES "Pal" ("idPal") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PalToPartnerSkill_AB_unique" ON "_PalToPartnerSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_PalToPartnerSkill_B_index" ON "_PalToPartnerSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PalToWorksFor_AB_unique" ON "_PalToWorksFor"("A", "B");

-- CreateIndex
CREATE INDEX "_PalToWorksFor_B_index" ON "_PalToWorksFor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElementToPal_AB_unique" ON "_ElementToPal"("A", "B");

-- CreateIndex
CREATE INDEX "_ElementToPal_B_index" ON "_ElementToPal"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DropToPal_AB_unique" ON "_DropToPal"("A", "B");

-- CreateIndex
CREATE INDEX "_DropToPal_B_index" ON "_DropToPal"("B");
