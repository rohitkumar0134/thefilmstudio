
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';
import verifyToken from '../verify-token/route';



export async function POST(request) {
  try {
      const { token,category } = await request.json();
      if (!token) {
        return NextResponse.json({ message: 'Provide token' }, { status: 400 });
      }
  
      const valid = await verifyToken(token);
      if (!valid) {
        return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
    }
      await connectMongoDB();
      const createdLog = await Category.create({ status: 1, category });

      console.log(createdLog);

      return NextResponse.json({ success: true, message: "Category created successfully" }, { status: 201 });
  } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ success: false, message: "An error occurred while creating category" }, { status: 500 });
  }
}

  

  export async function GET(request) {
    await connectMongoDB();
    const categories= await Category.find().sort({_id:-1})
    console.log(categories)
    return NextResponse.json({ category:categories }, { status: 200 });
  }  

  export async function PUT(request) {
    try {
        const { token,_id, category } = await request.json();
        if (!token) {
          return NextResponse.json({ message: 'Provide token' }, { status: 400 });
        }
    
        const valid = await verifyToken(token);
        if (!valid) {
          return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
      }
        await connectMongoDB();
        const updatedLog = await Category.updateOne({ _id: _id }, { category });

        console.log(updatedLog);

       
            // Document(s) were modified, indicating a successful update
            return NextResponse.json({ success: true, message: "Category updated successfully" }, { status: 201 });
       
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, message: "An error occurred while updating category" }, { status: 500 });
    }
}
