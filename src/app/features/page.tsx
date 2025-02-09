import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import OurFeatures from "../../components/Features/OurFeatures";
import SingleFeatures from "../../components/Features/SingleFeatures";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Features" />

      <OurFeatures />

      <SingleFeatures />

      <Footer />
    </>
  );
};
