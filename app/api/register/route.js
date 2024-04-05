import connectMongoDB from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    await connectMongoDB();
    const exists = await User.findOne({ username });
    if (exists) {
      return NextResponse.json({ msg: 'username exist' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
}
