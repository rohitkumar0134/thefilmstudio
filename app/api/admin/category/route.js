
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';



export async function POST(request) {
    const { status, category } = await request.json();
    await connectMongoDB();
    const createdlog=await Category.create({ status:1, category });
    console.log(createdlog)
    return NextResponse.json({ message: "Category Created" }, { status: 201 });
  }
  

  export async function GET(request) {
    await connectMongoDB();
    const categories= await Category.find().sort({_id:-1})
    console.log(categories)
    return NextResponse.json({ category:categories }, { status: 200 });
  }  

  export async function PUT(request) {
    const { _id, category } = await request.json();
    await connectMongoDB();
    const createdlog=await Category.updateOne({_id:_id},{  category });
    console.log(createdlog)
    return NextResponse.json({ message: "Category updated" }, { status: 201 });
  }