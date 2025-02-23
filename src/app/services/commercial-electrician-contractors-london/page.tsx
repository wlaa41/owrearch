

import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import CommercialElectrician from "@/components/Services/CommercialElactrician/CommercialElactrician";
import ServicesList from "@/components/ServiceList/ServiceList";


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commercial Electrician Services in London | OW Electrician",
  description: "OW Electrician London offers top-notch commercial electrical services, ensuring compliance and safety. Call 07307565444",
  keywords: [
    "commercial electrician London",
    "emergency commercial electrician",
    "commercial electrical services",
    "business electrical maintenance",
    "NICEIC-approved electrician",
    "commercial electrical repairs",
    "office electrical fit-outs",
    "industrial electrician London",
    "commercial lighting design",
    "electrical inspection London"
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "Commercial Electrician Services in London | OW Electrician",
    description: "OW Electrician London offers top-notch commercial electrical services, ensuring compliance and safety. Call 07307565444",
    url: "https://www.owresearch.netlify.app/",
    siteName: "OW Electrician & Home Automation Engineers",
    images: [
      {
        url: "https://www.owresearch.netlify.app/opengraph-image.png",        width: 1200,
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
        <CommercialElectrician/>
        <ServicesList/>
      <Footer />
    </>
  );
};
