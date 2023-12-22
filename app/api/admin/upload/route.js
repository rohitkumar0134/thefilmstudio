
import { NextResponse } from "next/server";
import axios from "axios";


export async function POST(req) {

  const formData = await req.formData();
  const file = formData.get("file"); // Assuming the file input field name is "file"
  console.log(file)
  
  if (file && typeof file === "object" && "arrayBuffer" in file) {
  

      const data = new FormData();
      data.append('image', file);
      console.log(file)

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://api.imgbb.com/1/upload?key=b7dbad10fd1fcb57d8776e348a24e54f',
  
  data : data
};


const response=await axios(config)
console.log(JSON.stringify(response.data.data));

    return NextResponse.json({ success: true,fileName:response.data.data.medium?.url});
  }
  
  return NextResponse.json({ success: false, error: "No file uploaded" });
}

