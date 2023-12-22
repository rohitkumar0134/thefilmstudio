import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export async function POST(request) {
    const body = await request.json();


    const { token } = body;
    console.log(token)
    if (!token) {
      return NextResponse.json({ message: 'provide token ' }, { status: 400 })
    }
let valid
    jwt.verify(token,JWT_SECRET, (err, decoded) => {
        if (err) {
            valid=false
            // return NextResponse.json({ valid: false }, { status: 200 })
          
        } else {
            valid=true
            // return NextResponse.json({ valid: true }, { status: 200 })
          
        }
      });

      return NextResponse.json({ valid: valid }, { status: 200 })

}






