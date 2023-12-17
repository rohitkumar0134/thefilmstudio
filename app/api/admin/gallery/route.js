
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Gallery from '@/models/gallery';


export async function POST(request) {

    const { thumbnailimg, image,video,status,category } = await request.json();
    await connectMongoDB();
    const createdlog=await Gallery.create({
       status:Number(status),
       thumbnailimg:thumbnailimg,
       image:image,
       category:category,
       video:video
    });
    console.log(createdlog)
    return NextResponse.json({ message: "image  Created" }, { status: 201 });
  }


  export async function PUT(request) {

    const { thumbnailimg, image,video,status,category,_id } = await request.json();
    await connectMongoDB();
    const createdlog=await Gallery.updateOne({_id:_id},{
       status:Number(status),
       thumbnailimg:thumbnailimg,
       image:image,
       category:category,
       video:video
    });
    console.log(createdlog)
    return NextResponse.json({ message: "image updated Created" }, { status: 201 });
  }