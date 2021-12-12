import Link from "next/link";
import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";

const FirstPost = (props) => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>Back to main</a>
        </Link>
      </h2>
    </Layout>
  );
};
export default FirstPost;
