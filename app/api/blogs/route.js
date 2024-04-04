import connectMongoDB from '@/utils/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { title, content, image, tag, quote, author } = await request.json();
    await connectMongoDB();
    await Blog.create({ title, content, image, tag, quote, author });
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Topic Creation failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to get blogs' },
      { status: 500 }
    );
  }
}
