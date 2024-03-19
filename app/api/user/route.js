// import bcrypt from 'bcrypt';
// import dbConnect from '@/utils/db';
// import { NextResponse } from 'next/server';
// import { User } from '@/models/User';

// export async function POST(request) {
//   const { username, password } = await request.json();
//   await dbConnect();

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   await User.create({ username, password: hashedPassword });
//   return NextResponse.json({ message: 'User Created' }, { status: 201 });
// }

// export async function GET() {
//   await dbConnect();
//   const users = await User.find();
//   const msg = 'connected';
//   return NextResponse.json({ msg });
// }
import bcrypt from 'bcrypt';
import dbConnect from '@/utils/db';
import { NextResponse } from 'next/server';
import User  from '@/models/User';

// export async function POST(request) {
//   const { username, password } = await request.json();
//   await dbConnect();

//   // Find the user by username
//   const user = await User.findOne({ username });

//   // If user doesn't exist or password doesn't match, return error
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     console.log(failed);
//     return NextResponse.json(
//       { message: 'User Created failed' },
//       { status: 500 }
//     );
//     // return new Response(
//     //   JSON.stringify({ message: 'Invalid username or password' }),
//     //   { status: 401, headers: { 'Content-Type': 'application/json' } }
//     // );
//   }
//   console.log('success');
//   // If user exists and password matches, return success along with the user object
//   // Make sure to sanitize the user object if it contains sensitive information
//   return NextResponse.json({ message: 'User Created' }, { status: 201 });
//   // return new Response(
//   //   JSON.stringify({ message: 'Authentication successful', user }),
//   //   { status: 200, headers: { 'Content-Type': 'application/json' } }
//   // );
// }
export async function POST(request) {
  try {
    const { username, password } = await request.json();
    console.log(username, ' from the back end');
    await dbConnect();

    // Find the user by username
    const user = await User.findOne({ username });

    // If user doesn't exist or password doesn't match, return error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('from the backend', user);

    // If user exists and password matches, return success along with the user object
    // Make sure to sanitize the user object if it contains sensitive information
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    // Handle any potential errors
    console.error('An error occurred:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
