
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import connectMongoDB from '@/lib/mongodb';
import Gallery from '@/models/gallery';

const prisma = new PrismaClient()





export async function GET(request) {
    const url = new URL(request.url);
    const category = url.searchParams.get("cat");
    // console.log(category);
    await connectMongoDB();

    if (category) {
        const gallerydata=await Gallery.find({
            status:1,
            category: category
        })
       
        const randomOrder = gallerydata.sort(() => Math.random() - 0.5);
        return NextResponse.json(randomOrder);
    } else {
        // const gallerydata = await prisma.gallery.findMany({
        //     where: {
        //         status: 1
        //     },
        //     take: 10, // Adjust the number based on how many random items you want
        //     orderBy: {
        //         id: 'asc', // Use 'asc' or 'desc' based on your preference
        //     },
        // });
        const gallerydata=await Gallery.find({
            status:1
        })
        const randomOrder = gallerydata.sort(() => Math.random() - 0.5);
        return NextResponse.json(randomOrder);
    }
}


