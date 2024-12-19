import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "./pages/api/conntectToDatabase";
import User from "./pages/api/models/User.model";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      _id: string; // Add MongoDB _id
      email?: string | null;
      name?: string | null;
    };
  }

  interface User {
    id: string;
    _id: string; // Add MongoDB _id
    email: string;
    name?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    _id: string; // Add MongoDB _id
    email: string;
    name?: string;
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

          const isPasswordValid = await compare(credentials.password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(),
            _id: user._id.toString(), // Include both id and _id
            email: user.email,
            name: user.name,
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
        console.log("User in JWT callback:", user); // Debugging user data
        token.id = user.id;
        token._id = user._id; // Include _id
        token.email = user.email;
        token.name = user.name;
      }
      console.log("Token in JWT callback:", token); // Debugging token data
      return token;
    },
    async session({ session, token }) {
      console.log("Token in session callback:", token); // Debugging token passed to session
      if (session.user) {
        session.user.id = token.id;
        session.user._id = token._id; // Include _id
        session.user.email = token.email;
        session.user.name = token.name;
      }
      console.log("Session in session callback:", session); // Debugging session data
      return session;
    },
  },
};
