import connectMongoDB from '@/utils/db';
import Team from '@/models/Teams';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, position, image } = await req.json();
  try {
    // console.log(name);
    await connectMongoDB();
    await Team.create({ name, position, image });
    return NextResponse.json({ message: 'Team Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to add team' },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  try {
    const teams = await Team.find().sort({ createdAt: -1 });
    return NextResponse.json({ teams }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to fetch teams' },
      { status: 500 }
    );
  }
}


