import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyle1 from "../../components/Services/ServicesStyle1";
import ServicesList from "@/components/ServiceList/ServiceList";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Electrical, Home Automation, CCTV & More" />

      <ServicesList/>

      <Footer />
    </>
  );
};
 
