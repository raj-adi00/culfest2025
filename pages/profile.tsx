import React from "react";

import Head from "next/head";
import MediaPage from "../components/MediaPage";

const Media: React.FC = () => {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Profile Page" />
      </Head>
      <div>
        <a href="/payme">Continue Payment</a>
      </div>
    </>
  );
};

export default Media;
