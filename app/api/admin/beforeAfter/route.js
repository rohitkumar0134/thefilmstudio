import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import beforeAfter from '@/models/beforeAfter';



export async function GET(request) {
    await connectMongoDB();
    const beforeAfterdata=await beforeAfter.find({ status:1});
    console.log(beforeAfterdata)
    return NextResponse.json({ beforeAfter: beforeAfterdata }, { status: 200 });
  }



export async function POST(request) {

    const { beforeImage,AfterImage,status } = await request.json();
    await connectMongoDB();
    const createdlog=await beforeAfter.create({
       status:Number(status),
      beforeImage:beforeImage,
      AfterImage:AfterImage
    });
    console.log(createdlog)
    return NextResponse.json({ message: "image  Created" }, { status: 201 });
  }

  export async function PUT(request) {

    const { _id,beforeImage,AfterImage,status } = await request.json();
    await connectMongoDB();
    const createdlog=await beforeAfter.updateOne({_id:_id},{
       status:Number(status),
      beforeImage:beforeImage,
      AfterImage:AfterImage
    });
    console.log(createdlog)
    return NextResponse.json({ message: "image  Updated" }, { status: 201 });
  }