const connectMongoDB = require('@/lib/mongodb').default;
const Gallery = require('./gallery').default;
const Category = require('./category').default;


async function seedDatabase() {
    // Clear existing data
    await Gallery.deleteMany();
    await Category.deleteMany();
  
    // Insert new data for Gallery
    for (let i = 0; i < 5; i++) {
      await Gallery.create({
        thumbnailimg: `https://biati-digital.github.io/glightbox/demo/img/large/gm${i + 1}.jpg`,
        image: `https://biati-digital.github.io/glightbox/demo/img/large/gm${i + 1}.jpg`,
        video: "",
        status: 1,
        category: i,
      });
    }
  
    // Insert new data for Category
    for (let i = 0; i < 5; i++) {
      await Category.create({
        status: 1,
        category: `catg ${i}`,
      });
    }
  
    console.log('Seed completed');
  }
  
  seedDatabase()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      // Disconnect from MongoDB after seeding
      await mongoose.disconnect();
    });