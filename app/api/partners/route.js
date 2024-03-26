import connectMongoDB from '@/utils/db';
import Partner from '@/models/Partner';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, description, logo, image } = await request.json();
  await connectMongoDB();
  await Partner.create({ name, description, logo, image });
  return NextResponse.json({ message: 'Partner Created' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const partners = await Partner.find().sort({ createdAt: -1 });
    return NextResponse.json({ partners });
  }
