// import type { NextAuthOptions } from "next-auth";
import axios from 'axios';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
export const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
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
        // console.log(credentials);
        // const res = await axios.post('/api/user', credentials, {
        //   headers: { 'Content-Type': 'application/json' },
        // });
        // console.log(res);
        // const user = await res.json();

        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }
        // // Return null if user data could not be retrieved
        // return null;
        const user = { username: 'admin', password: '1234' };
        if (
          user.username === credentials.username &&
          user.password === credentials.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
