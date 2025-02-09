import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import ProductDetailsContent from "../../../components/Shop/ProductDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Product Details" />

      <ProductDetailsContent />

      <Footer />
    </>
  );
};
