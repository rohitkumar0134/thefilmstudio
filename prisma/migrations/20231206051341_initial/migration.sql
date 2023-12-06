-- CreateTable
CREATE TABLE "gallery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "thumbnailimg" TEXT NOT NULL,
    "image" TEXT,
    "video" TEXT,
    "status" INTEGER NOT NULL,
    "category" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" INTEGER NOT NULL,
    "category" TEXT NOT NULL
);
