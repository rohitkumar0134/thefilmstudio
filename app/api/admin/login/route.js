import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
const useremail= process.env.useremail
const userpassword= process.env.userpassword

export async function POST(request) {
    const body = await request.json();


    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json({ message: 'email and password are required' }, { status: 400 })
    }


    if (useremail==email&&password==userpassword) {
        const token = jwt.sign({ id: 100, password:password,email:email }, JWT_SECRET, { expiresIn: '60m' });

    
    
      return NextResponse.json({ success:true,token:token }, { status: 200 })

      } else {
       
      return NextResponse.json({ message: 'Invalid password' }, { status: 400 })

      }

}


