-- CreateTable
CREATE TABLE "Pal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "element" TEXT NOT NULL,
    "partnerSkill" TEXT NOT NULL,
    "worksFor" TEXT NOT NULL,
    "drops" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pal_number_key" ON "Pal"("number");
