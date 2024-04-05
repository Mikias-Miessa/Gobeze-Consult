import connectMongoDB from '@/utils/db';
import Test from '@/models/Testimonial';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    const test = await Test.findOne({ _id: id });
    return NextResponse.json({ test }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to get testimonial' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, name, image, qualification } = await request.json();
  try {
    await connectMongoDB();
    await Test.findByIdAndUpdate(
      id,
      { title: title, name: name, image: image, qualification: qualification },
      { new: true }
    );
    return NextResponse.json({ message: 'Test updated' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update Testimonial' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    await Test.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Test deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}
