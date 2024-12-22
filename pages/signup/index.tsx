import SignupForm from "@/components/signUpForm";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="Register on the Culfest 2025" />
      </Head>
      <div>
        <SignupForm />
      </div>
    </>
  );
}
