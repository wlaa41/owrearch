import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import CheckoutForm from "../../components/Checkout/CheckoutForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Checkout" />

      <CheckoutForm />

      <Footer />
    </>
  );
};
