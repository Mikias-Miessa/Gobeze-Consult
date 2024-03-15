import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import dbConnect from '@/utils/db';
import User from '@/models/User';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Username Here',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password Here',
        },
      },
      async authorize(credentials, req) {
        await dbConnect();

        const username = credentials.username;
        const user = await User.findOne({ username });

        if (
          !user ||
          !(await bcrypt.compare(credentials.password, user.password))
        ) {
          return null;
        }
        return user;
      },
    }),
  ],
};
