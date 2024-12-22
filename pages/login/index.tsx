import LoginForm from "@/components/loginForm";
import { useSession } from "next-auth/react";
import Head from "next/head";
export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Explore Login Page" />
      </Head>
      <LoginForm />
    </div>
  );
}
