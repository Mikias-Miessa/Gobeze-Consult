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
        // const response = axios.post('/user', credentials, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        // if (!response.ok) {
        //   return null;
        // }

        // // Parse the response body as JSON
        // const data = await response.json();

        // // Extract the user data from the response
        // const user = data.user;
        // return user;
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
