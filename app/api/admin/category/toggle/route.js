
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Category from '@/models/category';
import verifyToken from '../../verify-token/route';

export async function POST(request) {
  try {
      const {token, status, _id } = await request.json();
      if (!token) {
        return NextResponse.json({ message: 'Provide token' }, { status: 400 });
      }
  
      const valid = await verifyToken(token);
      if (!valid) {
        return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
    }
      await connectMongoDB();
      const updatedLog = await Category.updateOne({ _id: _id }, { status: status });

      console.log(updatedLog);

      
          // Document(s) were modified, indicating a successful update
          return NextResponse.json({ success: true, message: "Category toggled successfully" }, { status: 201 });
      
  } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ success: false, message: "An error occurred while toggling category" }, { status: 500 });
  }
}


