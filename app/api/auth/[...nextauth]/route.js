import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          await connectToDB();

          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error('No user found with this email');
          }

          if (!user.password) {
            throw new Error('This account uses Google sign-in. Please sign in with Google.');
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
            image: user.image,
          };
        } catch (error) {
          throw new Error(error.message);
        }
      }
    })
  ],
  callbacks: {
    async session({ session }) {
      await connectToDB();
      const sessionUser = await User.findOne({ email: session.user.email });
      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      // Only run for Google sign-in
      if (account?.provider === 'google') {
        try {
          await connectToDB();

          const userExists = await User.findOne({ email: profile.email });

          if (!userExists) {
            let username = profile.name.replace(/\s+/g, '').toLowerCase();
            if (username.length < 3) {
              username = username.padEnd(3, '0');
            }
            await User.create({
              email: profile.email,
              username: username,
              image: profile.picture,
              authProvider: 'google',
            });
          } else if (userExists.authProvider === 'credentials') {
            // Update to 'both' if user registered with credentials first
            await User.findByIdAndUpdate(userExists._id, { authProvider: 'both' });
          }

          return true;
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST }
