import React, { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

const url = "https://john-dempster-mediation.vercel.app/";

const PageHead: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="https://live.staticflickr.com/65535/53584045406_121ed92b86.jpg"
      />
      <meta property="og:url" content={url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image:src"
        content="https://live.staticflickr.com/65535/53584045406_121ed92b86.jpg"
      />
      {/* Standard */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default PageHead;
