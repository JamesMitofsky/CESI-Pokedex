-- CreateTable
CREATE TABLE "Pals" (
    "idPals" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Number" TEXT NOT NULL,
    "Name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Element" (
    "idElement" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PartnerSkill" (
    "idPartnerSkill" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "libelle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WorksFor" (
    "idWorksFor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "libelle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Drop" (
    "idDrop" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PalsToPartnerSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PalsToPartnerSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Pals" ("idPals") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PalsToPartnerSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "PartnerSkill" ("idPartnerSkill") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PalsToWorksFor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PalsToWorksFor_A_fkey" FOREIGN KEY ("A") REFERENCES "Pals" ("idPals") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PalsToWorksFor_B_fkey" FOREIGN KEY ("B") REFERENCES "WorksFor" ("idWorksFor") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ElementToPals" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ElementToPals_A_fkey" FOREIGN KEY ("A") REFERENCES "Element" ("idElement") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ElementToPals_B_fkey" FOREIGN KEY ("B") REFERENCES "Pals" ("idPals") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DropToPals" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DropToPals_A_fkey" FOREIGN KEY ("A") REFERENCES "Drop" ("idDrop") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DropToPals_B_fkey" FOREIGN KEY ("B") REFERENCES "Pals" ("idPals") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PalsToPartnerSkill_AB_unique" ON "_PalsToPartnerSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_PalsToPartnerSkill_B_index" ON "_PalsToPartnerSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PalsToWorksFor_AB_unique" ON "_PalsToWorksFor"("A", "B");

-- CreateIndex
CREATE INDEX "_PalsToWorksFor_B_index" ON "_PalsToWorksFor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElementToPals_AB_unique" ON "_ElementToPals"("A", "B");

-- CreateIndex
CREATE INDEX "_ElementToPals_B_index" ON "_ElementToPals"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DropToPals_AB_unique" ON "_DropToPals"("A", "B");

-- CreateIndex
CREATE INDEX "_DropToPals_B_index" ON "_DropToPals"("B");
