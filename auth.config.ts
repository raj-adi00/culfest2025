import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "./pages/api/conntectToDatabase";
import User from "./pages/api/models/User.model";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      _id: string;
      email?: string | null;
      name?: string | null;
      phone?: string | null;
      city?: string | null;
      state?: string | null;
      college?: string | null;
      gender?: string | null;
      graduationYear?: string | null;
      isNITJSR?: boolean | null;
      registeredEvents?: [String] | [];
    };
  }

  interface User {
    id: string;
    _id: string;
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    city?: string | null;
    state?: string | null;
    college?: string | null;
    gender?: string | null;
    graduationYear?: string | null;
    isNITJSR?: boolean | null;
    registeredEvents?: [String] | [];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    _id: string;
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    city?: string | null;
    state?: string | null;
    college?: string | null;
    gender?: string | null;
    graduationYear?: string | null;
    isNITJSR?: boolean | null;
    registeredEvents?: [String] | [];
  }
}

export const authConfig: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials");
          }

          await connectToDatabase();

          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(),
            _id: user._id.toString(),
            email: user.email,
            name: user.name,
            phone: user.phone,
            city: user.city,
            state: user.state,
            college: user.college,
            gender: user.gender,
            graduationYear: user.graduationYear,
            isNITJSR: user.isNITJSR,
            registeredEvents: user.registeredEvents,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token._id = user._id; // Include _id
        token.email = user.email;
        token.name = user.name;
        token.phone = user.phone;
        token.city = user.city;
        token.state = user.state;
        token.college = user.college;
        token.gender = user.gender;
        token.graduationYear = user.graduationYear;
        token.isNITJSR = user.isNITJSR;
        token.registeredEvents = user.registeredEvents;
      }

      return token;
    },
    async session({ session, token }) {
      // console.log(session);
      if (session.user) {
        session.user.id = token.id;
        session.user._id = token._id; // Include _id
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.phone = token.phone;
        session.user.city = token.city;
        session.user.state = token.state;
        session.user.college = token.college;
        session.user.gender = token.gender;
        session.user.graduationYear = token.graduationYear;
        session.user.isNITJSR = token.isNITJSR;
        session.user.registeredEvents = token.registeredEvents;
      }

      return session;
    },
  },
};
