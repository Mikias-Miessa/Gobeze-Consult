import bcrypt from 'bcrypt';
import dbConnect from '@/utils/db';
import { NextResponse } from 'next/server';
import { User } from '@/models/User';

export async function POST(request) {
  const { username, password } = await request.json();
  await dbConnect();

  // Find the user by username
  const user = await User.findOne({ username });

  // If user doesn't exist or password doesn't match, return error
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response(
      JSON.stringify({ message: 'Invalid username or password' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // If user exists and password matches, return success along with the user object
  // Make sure to sanitize the user object if it contains sensitive information
  return new Response(
    JSON.stringify({ message: 'Authentication successful', user }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
