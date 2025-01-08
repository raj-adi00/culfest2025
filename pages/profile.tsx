import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProfilePage from "../components/profilePage";
// import { useSession } from "next-auth/react";
import axios from "axios";
import PaymentComponent from "./payment";
import { useSession, signIn, getSession } from "next-auth/react";
const Profile: React.FC = () => {
  const session = useSession();
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    if (session.status === "authenticated") {
      const fetchPosts = async () => {
        // Use a function expression here
        try {
          const res = await axios.post("/api/verifyPaymentStatus", {
            session,
          });
          // console.log(res.data);
          setPosts(res.data);
          // console.log(res);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }
  }, [session]);

  if (session.status === "loading") return <div>Loading...</div>;
  // const product = { price: 100 };
  return (
    <div>
      {/* SEO and Metadata */}

      <Head>
        <title>{session?.data?.user?.name?.toUpperCase()}</title>
        <meta name="description" content="Explore user details" />
        <link rel="icon" href="/culfest_logo.png" />
      </Head>
      {/* Render ProfilePage only after posts are fetched */}
      {posts && <ProfilePage session={session} res={posts} />}
    </div>
  );
};

export default Profile;
