const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDatabase() {
  // Clear existing data
  await prisma.gallery.deleteMany();

  // Insert new data
  for (let i = 0; i < 5; i++) {
    await prisma.gallery.create({
      data: {
        thumbnailimg: `https://biati-digital.github.io/glightbox/demo/img/large/gm${i + 1}.jpg`,
        image: `https://biati-digital.github.io/glightbox/demo/img/large/gm${i + 1}.jpg`,
        video: "",
        status: 1,
      },
    });
  }

  console.log('Seed completed');
}

seedDatabase()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
