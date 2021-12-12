import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home = (props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>~Self Introduction~</p>
        <p>
          (This is sample website - you'll building a site like this on <a href="https://nextjs.org/learn">our Next.js Tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
