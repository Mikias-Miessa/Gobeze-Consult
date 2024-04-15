import connectMongoDB from '@/utils/db';
import Partner from '@/models/Partner';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    console.log(id);
    await connectMongoDB();
    const partner = await Partner.findOne({ _id: id });
    return NextResponse.json({ partner }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to get the specific partner' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { name, description, logo, image, link} = await request.json();

    await connectMongoDB();

    const partner = await Partner.findByIdAndUpdate(
      id,
      { name, description, logo, image, link },
      { new: true }
    );

    if (!partner) {
      return NextResponse.json(
        { message: 'Partner not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Partner updated', partner },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update partner', error },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Partner.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Partner deleted' }, { status: 200 });
}
