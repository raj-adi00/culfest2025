import React from "react";

import Head from "next/head";
import MediaPage from "../components/MediaPage";;

const Media: React.FC = () => {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>Media Page</title>
        <meta name="description" content="Explore media content" />
        <link rel="icon" href="/culfest_logo.png" />
      </Head>
      <div>
        <MediaPage />
      </div>
    </>
  );
};

export default Media;
