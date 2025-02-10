


import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import DomesticElectrician from "@/components/Services/DomesticElectrician/DomesticElectrician";
import EICR from "./EICR";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Comprehensive EICR Services in London | OW Electrician London",
    description: "Ensure the safety of your electrical installations with our professional EICR services in London. Call 07307565444 for inspections and reports by qualified electricians.",
    keywords: [
        "EICR London", 
        "Electrical Installation Condition Report", 
        "EICR services", 
        "London electricians", 
        "electrical safety inspection", 
        "periodic inspection", 
        "qualified electricians", 
        "electrical compliance", 
        "OW Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Comprehensive EICR Services in London | OW Electrician London",
      description: "Ensure the safety of your electrical installations with our professional EICR services in London. Call 07307565444 for inspections and reports by qualified electricians.",
      url: "https://www.owresearch.netlify.app/",
      siteName: "OW Electrician & Home Automation Engineers",
      images: [
        {
          url: "https://www.owresearch.netlify.app/images/ow-london-bs7671-multifunctional-tester-eicr-testing.png",
          width: 1200,
          height: 630,
          alt: 'OpenGraph Image',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <EICR/>
      <Footer />
    </>
  );
};
