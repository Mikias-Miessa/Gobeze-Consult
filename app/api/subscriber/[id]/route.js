import connectMongoDB from '@/utils/db';
import Email from '/models/Email';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    console.log(id);
    await connectMongoDB();
    const email = await Email.findOne({ _id: id });
    return NextResponse.json({ email }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to get the specific email' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Email.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Email deleted' }, { status: 200 });
}
