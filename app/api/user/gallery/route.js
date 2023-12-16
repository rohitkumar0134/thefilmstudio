
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()





export async function GET(request) {
    const url = new URL(request.url);
    const category = url.searchParams.get("cat");
    // console.log(category);

    if (category) {
        const gallerydata = await prisma.gallery.findMany({
            where: {
                status: 1,
                category: Number(category)
            },
            take: 10, // Adjust the number based on how many random items you want
            orderBy: {
                id: 'asc', // Use 'asc' or 'desc' based on your preference
            },
        });
        const randomOrder = gallerydata.sort(() => Math.random() - 0.5);
        return NextResponse.json(randomOrder);
    } else {
        const gallerydata = await prisma.gallery.findMany({
            where: {
                status: 1
            },
            take: 10, // Adjust the number based on how many random items you want
            orderBy: {
                id: 'asc', // Use 'asc' or 'desc' based on your preference
            },
        });
        const randomOrder = gallerydata.sort(() => Math.random() - 0.5);
        return NextResponse.json(randomOrder);
    }
}


