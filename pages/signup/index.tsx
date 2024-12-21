import SignupForm from "@/components/signUpForm";
import { useSession } from "next-auth/react";

export default function Signup() {
  const session = useSession();
  // console.log("session in usesession", session);
  if (session && session.status === "authenticated") {
    return <h1>logged in</h1>;
  } else if (!session || session?.status === "unauthenticated") {
    return (
      <div>
        <SignupForm />
        //fixing
      </div>
    );
  }
}
