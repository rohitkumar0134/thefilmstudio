
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';
import Gallery from '@/models/gallery';



export async function POST(request) {
    // await Gallery.deleteMany();
    // await Category.deleteMany();
  
    // Insert new data for Gallery
    for (let i = 0; i < 5; i++) {
      await Gallery.create({
        thumbnailimg: `https://biati-digital.github.io/glightbox/demo/img/large/gm${i + 1}.jpg`,
        image: `https://biati-digital.github.io/glightbox/demo/img/large/gm${i + 1}.jpg`,
        video: "",
        status: 1,
        category: `${i}`,
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

    return NextResponse.json({ message: "Seed completed" }, { status: 201 });
  }
  

