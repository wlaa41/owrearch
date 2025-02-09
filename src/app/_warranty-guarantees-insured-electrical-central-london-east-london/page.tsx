import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import WarrantyGuaranteesPage from "./WarrantyGuaranteesPage ";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Warranty and Guarantees - Comprehensive Electrical Services in London",
    description: "Discover our comprehensive guarantees on all domestic, commercial, and industrial electrical installations and repairs in London. Call 07307565444.",
    keywords: [
        "electrical services London", 
        "electrician guarantees", 
        "domestic electrical repairs", 
        "commercial electrical installations", 
        "industrial electrical services", 
        "certified electricians London", 
        "emergency electrician London", 
        "NICEIC accredited", 
        "PAT testing London", 
        "ECS health and safety assessments"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Warranty and Guarantees - Comprehensive Electrical Services in London",
      description: "Discover our comprehensive guarantees on all domestic, commercial, and industrial electrical installations and repairs in London. Call 07307565444.",
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
        <WarrantyGuaranteesPage/>
      <Footer />
    </>
  );
};
