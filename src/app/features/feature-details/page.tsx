import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import FeatureDetailsContent from "../../../components/Features/FeatureDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Feature Details" />

      <FeatureDetailsContent />

      <Footer />
    </>
  );
};
