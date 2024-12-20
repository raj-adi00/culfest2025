import LoginForm from "@/components/loginForm";
import { useSession } from "next-auth/react";

export default function Login() {
  const session = useSession();
  // console.log("session in usesession", session);
  if (session && session.status === "authenticated") {
    return <h1>logged in</h1>;
  } else if (!session || session?.status === "unauthenticated") {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
