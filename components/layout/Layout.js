import React from "react";
import Head from "next/head";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
const Layout = ({ childern, title = "Book best Hotels" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {childern}
      <Footer />
    </>
  );
};

export default Layout;
