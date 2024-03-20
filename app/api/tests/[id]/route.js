import connectMongoDB from '@/utils/db';
import Test from '@/models/Testimonial';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const test = await Test.findOne({ _id: id });
  return NextResponse.json({ test }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, name, image, description } = await request.json();
  await connectMongoDB();
  await Test.findByIdAndUpdate(
    id,
    { title: title, name: name, image: image, description: description },
    { new: true }
  );
  return NextResponse.json({ message: 'Test updated' }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Test.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Test deleted' }, { status: 200 });
}
