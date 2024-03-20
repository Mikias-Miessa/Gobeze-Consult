import connectMongoDB from '@/utils/db';
import Test from '@/models/Testimonial';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, name, image, description } = await request.json();
  await connectMongoDB();
  await Test.create({ title, name, image, description });
  return NextResponse.json({ message: 'Testimonial Created' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const tests = await Test.find().sort({ createdAt: -1 });
    return NextResponse.json({ tests });
  }
