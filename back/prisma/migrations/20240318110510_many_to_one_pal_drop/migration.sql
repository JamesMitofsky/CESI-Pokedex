/*
  Warnings:

  - You are about to drop the `_DropToPal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_DropToPal_B_index";

-- DropIndex
DROP INDEX "_DropToPal_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DropToPal";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drop" (
    "idDrop" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "palId" INTEGER,
    CONSTRAINT "Drop_palId_fkey" FOREIGN KEY ("palId") REFERENCES "Pal" ("idPal") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Drop" ("idDrop", "name") SELECT "idDrop", "name" FROM "Drop";
DROP TABLE "Drop";
ALTER TABLE "new_Drop" RENAME TO "Drop";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
