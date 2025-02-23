


import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PATTesting from "./PATTesting";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PAT Testing Services in London | OW Electrician & Home Automation Engineers",
  description: "OW London offers professional PAT Testing services for homes and businesses, ensuring electrical appliance safety and compliance. Call 07307565444.",
  keywords: [
    "PAT testing London",
    "portable appliance testing",
    "electrical safety testing",
    "business PAT testing",
    "home PAT testing",
    "health and safety compliance",
    "electrical appliance testing",
    "school PAT testing",
    "clinic PAT testing",
    "restaurant PAT testing", "office PAT testing",
    "landlord PAT testing",
    "electrical compliance testing",
    "PAT testing cost",
    "PAT testing benefits",
    "electrical inspection",
    "workplace safety testing",
    "insurance compliance",
    "electrician London",
    "OW Electrician",
    "electrical testing services",
    "evening PAT testing",
    "weekend PAT testing",
    "PAT testing regulations",
    "Health & Safety at Work Act",
    "Electricity at Work Regulations",
    "PUWER compliance",
    "electrical fault detection",
    "fire risk reduction",
    "PAT testing for landlords",
    "PAT testing for schools",
    "PAT testing for clinics",
    "PAT testing for restaurants",
    "PAT testing for offices",
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "PAT Testing Services in London | OW Electrician & Home Automation Engineers",
    description: "OW London offers professional PAT Testing services for homes and businesses, ensuring electrical appliance safety and compliance. Call 07307565444.",
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
      <PATTesting/>
      <Footer />
    </>
  );
};
