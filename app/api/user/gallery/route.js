
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()





export async function GET(request) {
    const url = new URL(request.url);
   const category= url.searchParams.get("cat")
    console.log(category)
    if(category){
        const gallerydata = await prisma.gallery.findMany({
            where: {
                status: 1,
                category:Number(category)
            },
            orderBy: {
                id: 'desc',
            }
            ,
    
        })
        return NextResponse.json(gallerydata);

    }else{
        const gallerydata = await prisma.gallery.findMany({
            where: {
                status: 1
            },
            orderBy: {
                id: 'desc',
            }
            ,
    
        })
        return NextResponse.json(gallerydata);

    }



}

