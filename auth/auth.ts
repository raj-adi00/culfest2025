import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "../auth.config";
import connectToDatabase from "../pages/api/conntectToDatabase";
import User from "../pages/api/models/User.model";
import { compare } from "bcrypt";
import mongoose, { Document, Types } from "mongoose";
export interface ICredentials {
  email: string;
  password: string;
}
export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  _id: Types.ObjectId;
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // These credentials are what you'll receive from the login form
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (
            !credentials ||
            typeof credentials.email !== "string" ||
            typeof credentials.password !== "string"
          ) {
            throw new Error("Invalid credentials format.");
          }

          // Cast credentials to the ICredentials type
          const typedCredentials = credentials as ICredentials;
          const { email, password } = typedCredentials;
          await connectToDatabase();

          const user: IUser | null = await User.findOne({ email: email });

          if (!user) {
            throw new Error("USER_NOT_FOUND");
          }

          const passwordValid = await compare(password, user.password);

          if (!passwordValid) {
            throw new Error("INVALID_PASSWORD");
          }

          // Return the user object on successful authentication
          return {
            id: user._id.toString(),
            email: user.email,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw new Error("Authorization failed.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
