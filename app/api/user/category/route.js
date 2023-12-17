
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';


export async function GET(request) {
  await connectMongoDB()
const categories= await Category.find().sort({_id:-1})

    return NextResponse.json(categories);

}

