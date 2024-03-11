import connectMongoDB from '@/utils/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, content, image } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, content, image });
  return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ blogs });
  }
