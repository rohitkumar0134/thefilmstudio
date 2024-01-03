import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import beforeAfter from '@/models/beforeAfter';



export async function GET(request) {
  await connectMongoDB();
  const beforeAfterdata = await beforeAfter.find({ status: 1 });
  console.log(beforeAfterdata)
  return NextResponse.json({ beforeAfter: beforeAfterdata }, { status: 200 });
}
