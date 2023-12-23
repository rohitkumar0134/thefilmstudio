import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export default function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

export async function POST(request) {
    const body = await request.json();

    const { token } = body;

    if (!token) {
        return NextResponse.json({ message: 'Provide token' }, { status: 400 });
    }

    const valid = await verifyToken(token);

    return NextResponse.json({ valid: valid }, { status: 200 });
}
