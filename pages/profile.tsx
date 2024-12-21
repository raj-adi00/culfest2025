import React from "react";

import Head from "next/head";

import ProfilePage from "../components/profilePage";

const Profile: React.FC = () => {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>Profile</title>
        <meta name="description" content="Explore user details" />
      </Head>
      <div>
        <ProfilePage />
      </div>
    </>
  );
};

export default Profile;
