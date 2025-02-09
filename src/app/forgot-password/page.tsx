import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ForgotPasswordForm from "../../components/Auth/ForgotPasswordForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Forgot Password" />

      <ForgotPasswordForm />

      <Footer />
    </>
  );
};
