// import LoginForm from "@/components/";
// import { useSession } from "next-auth/react";
import ForgotPasswordPage from "@/components/forgotPassword";
import LoginForm from "@/components/loginForm";
import Head from "next/head";
export default function Login() {
  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Forgot Password Page" />
      </Head>
      <ForgotPasswordPage />
    </div>
  );
}
