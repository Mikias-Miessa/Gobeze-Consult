import connectMongoDB from '@/utils/db';
import Team from '@/models/Teams';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const team = await Team.findOne({ _id: id });
    return NextResponse.json({ team }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to get the specific team' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { name, position, image } = await request.json();

    await connectMongoDB();

    const team = await Team.findByIdAndUpdate(
      id,
      { name, position, image },
      { new: true }
    );

    if (!team) {
      return NextResponse.json(
        { message: 'Team not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Team updated', partner },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update Team', error },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Team.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Team deleted' }, { status: 200 });
}

