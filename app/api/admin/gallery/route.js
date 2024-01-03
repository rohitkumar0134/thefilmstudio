
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb';
import Gallery from '@/models/gallery';
import verifyToken from '../verify-token/route';



export async function GET(request) {
   const url = new URL(request.url);
   const category = url.searchParams.get("cat");
   // console.log(category);
   await connectMongoDB();

   if (category) {
       const gallerydata=await Gallery.find({
           category: category
       })
      
       const randomOrder = gallerydata.sort(() => Math.random() - 0.5);
       return NextResponse.json(randomOrder);
   } else {
       
       const gallerydata=await Gallery.find()
       const randomOrder = gallerydata.sort(() => Math.random() - 0.5);
       return NextResponse.json(randomOrder);
   }
}

export async function POST(request) {
   try {
       const { token, thumbnailimg, image, video, status, category } = await request.json();

       if (!token) {
           return NextResponse.json({ message: 'Provide token' }, { status: 400 });
       }

       const valid = await verifyToken(token);

       if (!valid) {
           return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
       }

       await connectMongoDB();
       const createdLog = await Gallery.create({
           status: Number(status),
           thumbnailimg: thumbnailimg,
           image: image,
           category: category,
           video: video
       });

       console.log(createdLog);

       return NextResponse.json({ success:true,message: "Image created successfully" }, { status: 201 });
   } catch (error) {
       console.error("Error:", error);
       return NextResponse.json({ message: "An error occurred while creating image" }, { status: 500 });
   }
}


  export async function PUT(request) {
   try {
       const { token,thumbnailimg, image, video, status, category, _id } = await request.json();
       if (!token) {
         return NextResponse.json({ message: 'Provide token' }, { status: 400 });
       }
   
       const valid = await verifyToken(token);
       if (!valid) {
         return NextResponse.json({ message: 'Unauthorized access. Invalid token.' }, { status: 401 });
     }
       await connectMongoDB();
       const updatedLog = await Gallery.updateOne({ _id: _id }, {
           status: Number(status),
           thumbnailimg: thumbnailimg,
           image: image,
           category: category,
           video: video
       });

       console.log(updatedLog);


           // Document(s) were modified, indicating a successful update
           return NextResponse.json({ success: true, message: "Image updated successfully" }, { status: 201 });
       
   } catch (error) {
       console.error("Error:", error);
       return NextResponse.json({ success: false, message: "An error occurred while updating image" }, { status: 500 });
   }
}
