import React from "react";
import Head from "next/head";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";


const Layout = ({ children, title = "Book best Hotels" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
