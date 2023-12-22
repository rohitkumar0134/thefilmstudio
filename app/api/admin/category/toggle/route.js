
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';

export async function POST(request) {
    const { status, _id } = await request.json();
    await connectMongoDB();
    const createdlog=await Category.updateOne({_id:_id},{ status:status });
    console.log(createdlog)
    return NextResponse.json({ message: "Category toggled" }, { status: 201 });
  }

