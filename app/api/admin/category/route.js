
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';



export async function POST(request) {
    const { status, category } = await request.json();
    await connectMongoDB();
    const createdlog=await Category.create({ status:Number(status), category });
    console.log(createdlog)
    return NextResponse.json({ message: "Category Created" }, { status: 201 });
  }
  

