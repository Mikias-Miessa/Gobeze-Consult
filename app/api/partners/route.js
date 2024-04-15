import connectMongoDB from '@/utils/db';
import Partner from '@/models/Partner';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, description, logo, image, link } = await req.json();
  try {
    // console.log(name);
    await connectMongoDB();
    await Partner.create({ name, description, logo, image, link });
    return NextResponse.json({ message: 'Partner Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to add partner' },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    return NextResponse.json({ partners }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to fetch partners' },
      { status: 500 }
    );
  }
}
