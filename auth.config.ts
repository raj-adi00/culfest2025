import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "./pages/api/conntectToDatabase";
import User from "./pages/api/models/User.model";
// username: String,
//     email: String,
//     password: String,

//     phone: String,
//     city: String,
//     state: String,
//     college: String,
//     gender: String,
//     graduationYear: String,
//     isNITJSR: Boolean,
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      _id: string; // Add MongoDB _id
      email?: string | null;
      name?: string | null;
      phone?: string | null;
      city?: string | null;
      state?: string | null;
      college?: string | null;
      gender?: string | null;
      graduationYear?: string | null;
      isNITJSR?: boolean | null;
    };
  }

  interface User {
    id: string;
    _id: string; // Add MongoDB _id
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    city?: string | null;
    state?: string | null;
    college?: string | null;
    gender?: string | null;
    graduationYear?: string | null;
    isNITJSR?: boolean | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    _id: string; // Add MongoDB _id
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    city?: string | null;
    state?: string | null;
    college?: string | null;
    gender?: string | null;
    graduationYear?: string | null;
    isNITJSR?: boolean | null;
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
            _id: user._id.toString(), // Include both id and _id
            email: user.email,
            name: user.name,
            phone: user.phone,
            city: user.city,
            state: user.state,
            college: user.college,
            gender: user.gender,
            graduationYear: user.graduationYear,
            isNITJSR: user.isNITJSR,
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
        // console.log("User in JWT callback:", user); // Debugging user data
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
      }
      // console.log("Token in JWT callback:", token); // Debugging token data
      return token;
    },
    async session({ session, token }) {
      // console.log("Token in session callback:", token); // Debugging token passed to session
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
      }
      // console.log("Session in session callback:", session); // Debugging session data
      // console.log("tojken", token); // Debugging
      return session;
    },
  },
};
