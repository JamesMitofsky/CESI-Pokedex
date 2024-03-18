-- CreateTable
CREATE TABLE "Pals" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Number" INTEGER NOT NULL,
    "Element" TEXT NOT NULL,
    "PartnerSkill" TEXT NOT NULL,
    "WorksFor" TEXT NOT NULL,
    "Drops" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
