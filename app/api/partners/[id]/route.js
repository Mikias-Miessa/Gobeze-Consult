import connectMongoDB from '@/utils/db';
import Partner from '@/models/Partner';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const partner = await Partner.findOne({ _id: id });
  return NextResponse.json({ partner }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, description, logo, image } = await request.json();
  await connectMongoDB();
  await Partner.findByIdAndUpdate(
    id,
    { name: name, description: description, logo: logo, image: image },
    { new: true }
  );
  return NextResponse.json({ message: 'Partner updated' }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Partner.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Partner deleted' }, { status: 200 });
}

