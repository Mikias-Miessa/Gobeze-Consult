
import connectMongoDB from '@/utils/db';
import Email from '@/models/Email';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email} = await request.json();
    await connectMongoDB();
    await Email.create({ email});
    return NextResponse.json({ message: 'Subscribed' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Subscribtion failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const emails = await Email.find().sort({ createdAt: -1 });
    return NextResponse.json({ emails });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to get emails' },
      { status: 500 }
    );
  }
}

