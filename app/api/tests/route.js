import connectMongoDB from '@/utils/db';
import Test from '@/models/Testimonial';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { qualification, name, image, description } = await request.json();
    await connectMongoDB();
    await Test.create({ qualification, name, image, description, job });
    return NextResponse.json(
      { message: 'Testimonial Created' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const tests = await Test.find().sort({ createdAt: -1 });
  return NextResponse.json({ tests });
}
