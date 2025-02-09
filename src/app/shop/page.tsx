import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ProductCard from "../../components/Shop/ProductCard";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Products" />

      <ProductCard />

      <Footer />
    </>
  );
};
 
