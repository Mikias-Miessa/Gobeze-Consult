import connectMongoDB from '@/utils/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const blog = await Blog.findOne({ _id: id });
    return NextResponse.json({ blog }, { status: 200 });
  }