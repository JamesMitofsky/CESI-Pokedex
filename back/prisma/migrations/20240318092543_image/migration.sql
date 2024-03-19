/*
  Warnings:

  - Added the required column `Url` to the `Pals` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pals" (
    "idPals" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Number" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Url" TEXT NOT NULL
);
INSERT INTO "new_Pals" ("Name", "Number", "idPals") SELECT "Name", "Number", "idPals" FROM "Pals";
DROP TABLE "Pals";
ALTER TABLE "new_Pals" RENAME TO "Pals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
