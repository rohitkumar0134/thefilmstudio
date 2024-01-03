import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import beforeAfter from '@/models/beforeAfter';
import verifyToken from '../verify-token/route';



export async function GET(request) {
  await connectMongoDB();
  const beforeAfterdata = await beforeAfter.find();
  console.log(beforeAfterdata)
  return NextResponse.json({ beforeAfter: beforeAfterdata }, { status: 200 });
}



export async function POST(request) {
  try {
    const { token, beforeImage, AfterImage, status } = await request.json();
    if (!token) {
      return NextResponse.json({ message: 'Provide token' }, { status: 400 });
    }

    const valid = await verifyToken(token);
    if (!valid) {
      return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
  }
    await connectMongoDB();
    const createdLog = await beforeAfter.create({
      status: Number(status),
      beforeImage: beforeImage,
      AfterImage: AfterImage
    });

    console.log(createdLog);

    return NextResponse.json({ success: true, message: "Image created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, message: "An error occurred while creating image" }, { status: 500 });
  }
}


export async function PUT(request) {
  try {
    const { token,_id, beforeImage, AfterImage, status } = await request.json();
    if (!token) {
      return NextResponse.json({ message: 'Provide token' }, { status: 400 });
    }

    const valid = await verifyToken(token);
    if (!valid) {
      return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
  }
    await connectMongoDB();
    const updatedLog = await beforeAfter.updateOne({ _id: _id }, {
      status: Number(status),
      beforeImage: beforeImage,
      AfterImage: AfterImage
    });

    console.log(updatedLog);

   
      return NextResponse.json({ success: true, message: "Image updated successfully" }, { status: 201 });
    
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, message: "An error occurred while updating image" }, { status: 500 });
  }
}
