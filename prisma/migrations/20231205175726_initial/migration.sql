-- CreateTable
CREATE TABLE "gallery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "thumbnailimg" TEXT NOT NULL,
    "image" TEXT,
    "video" TEXT,
    "status" INTEGER NOT NULL
);
