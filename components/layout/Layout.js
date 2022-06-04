import React from "react";
import Head from "next/head";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title = "Book best Hotels" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
      <ToastContainer position="bottom-right"/>
    </>
  );
};

export default Layout;
