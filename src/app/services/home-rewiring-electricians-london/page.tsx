


import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import RewiringHome from "./RewiringHome";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expert Electrical Rewiring Services in London - OW Electrician & Smart Home Engineers",
    description: "Professional electrical rewiring services across London. Ensure safety and compliance with OW Electrician. Call 07307565444.",
    keywords: [
        "Electrical rewiring London", 
        "professional electricians London", 
        "home rewiring services", 
        "NICEIC approved electricians", 
        "safety compliance rewiring", 
        "London electrical services", 
        "rewiring experts", 
        "residential rewiring London", 
        "commercial rewiring services", 
        "OW Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Expert Electrical Rewiring Services in London - OW Electrician & Smart Home Engineers",
      description: "Professional electrical rewiring services across London. Ensure safety and compliance with OW Electrician. Call 07307565444.",
      url: "https://www.owresearch.netlify.app/",
      siteName: "OW Electrician & Home Automation Engineers",
      images: [
        {
          url: "https://www.owresearch.netlify.app/opengraph-image.png",          
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
      <RewiringHome/>
      <Footer />
    </>
  );
};
