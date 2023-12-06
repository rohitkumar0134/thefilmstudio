
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export async function GET(request) {
  

    const categories = await prisma.categories.findMany({
        where: {
            status: 1
        },
        orderBy: {
            id: 'desc',
        }
        ,

    })
    return NextResponse.json(categories);

}

