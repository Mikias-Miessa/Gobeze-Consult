import connectMongoDB from '@/utils/db';
import User from '@/models/User';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

async function login(credentials) {
  try {
    await connectMongoDB();
    const user = await User.findOne({ username: credentials.username });
    // console.log(user)
    if (!user) throw new Error('Wrong Credentials.');
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error('Wrong Credentials.');
    return user;
  } catch (error) {
    console.log('error while log');
    throw new Error('Something Went Wrong');
  }
}
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          await connectMongoDB();
          // console.log(credentials);
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log('Error: ', error);
          throw new Error('Cannot login user');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.id = user.id;
      }
      // console.log("the token= ", token)
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.id = token.id;
      }
      // console.log("the session= ", session)
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
