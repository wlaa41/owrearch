


import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import DomesticElectrician from "@/components/Services/DomesticElectrician/DomesticElectrician";
import IndustrialElectrician from "./IndustrialElectrician";


import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Industrial Electrician Services - OW Electrician London",
    description: "OW Electrician London offers top-tier industrial electrical services across London. Call 07307565444 for a 2-hour emergency response, available 24/7.",
    keywords: [
        "industrial electrician London", 
        "industrial electrical services", 
        "emergency industrial electrician", 
        "industrial electrical maintenance", 
        "NICEIC-approved electricians",
        "industrial electrical installations",
        "industrial electrical repairs",
        "industrial electrical contractors",
        "24/7 industrial electrician"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Industrial Electrician Services - OW Electrician London",
      description: "OW Electrician London offers top-tier industrial electrical services across London. Call 07307565444 for a 2-hour emergency response, available 24/7.",
     url: "https://www.owelectric.co.uk/",
      siteName: "OW Electrician & Home Automation Engineers",
      images: [
        {
          url: "https://www.owelectric.co.uk/opengraph-image.jpg",          
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
      <IndustrialElectrician/>
      <Footer />
    </>
  );
};
