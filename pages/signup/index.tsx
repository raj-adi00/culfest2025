import SignupForm from "@/components/signUpForm";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Signup() {
  const session = useSession();
  // console.log("session in usesession", session);
  if (session && session.status === "authenticated") {
    return <h1>logged in</h1>;
  } else if (!session || session?.status === "unauthenticated") {
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
}
