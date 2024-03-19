/*
  Warnings:

  - You are about to drop the column `Name` on the `Drop` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Pal` table. All the data in the column will be lost.
  - You are about to drop the column `Number` on the `Pal` table. All the data in the column will be lost.
  - You are about to drop the column `Url` on the `Pal` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Element` table. All the data in the column will be lost.
  - Added the required column `name` to the `Drop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Pal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Pal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Pal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Element` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drop" (
    "idDrop" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Drop" ("idDrop") SELECT "idDrop" FROM "Drop";
DROP TABLE "Drop";
ALTER TABLE "new_Drop" RENAME TO "Drop";
CREATE TABLE "new_Pal" (
    "idPal" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Pal" ("idPal") SELECT "idPal" FROM "Pal";
DROP TABLE "Pal";
ALTER TABLE "new_Pal" RENAME TO "Pal";
CREATE TABLE "new_Element" (
    "idElement" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Element" ("idElement") SELECT "idElement" FROM "Element";
DROP TABLE "Element";
ALTER TABLE "new_Element" RENAME TO "Element";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
