import connectMongoDB from '@/utils/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, content, image } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(
    id,
    { title: title, content: content, image: image },
    { new: true }
  );
  return NextResponse.json({ message: 'Blog updated' }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Blog deleted' }, { status: 200 });
}
