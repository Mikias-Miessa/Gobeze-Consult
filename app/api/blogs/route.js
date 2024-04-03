import connectMongoDB from '@/utils/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { title, content, image, tag, quote } = await request.json();
    await connectMongoDB();
    await Blog.create({ title, content, image, tag, quote });
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Topic Creation failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json({ blogs });
}
