import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import LoginForm from "../../components/Auth/LoginForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Login" />

      <LoginForm />

      <Footer />
    </>
  );
};
