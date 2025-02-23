



import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import DomesticElectrician from "@/components/Services/DomesticElectrician/DomesticElectrician";
import LightingInstallation from "./LightingInstallation";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Lighting Installation Services in London | OW Electrician London",
  description: "Expert lighting installation services in London. Our skilled electricians offer comprehensive interior, exterior, security, and emergency lighting solutions. Call 07307565444",
  keywords: [
    "lighting installation London",
    "professional lighting services",
    "exterior lighting London",
    "interior lighting solutions",
    "security lighting installation",
    "emergency lighting London",
    "NICEIC Approved Electricians",
    "energy-efficient lighting",
    "London lighting experts",
    "home lighting installation",
    "commercial lighting services"
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "Professional Lighting Installation Services in London | OW Electrician London",
  description: "Expert lighting installation services in London. Our skilled electricians offer comprehensive interior, exterior, security, and emergency lighting solutions. Call 07307565444",
  url: "https://www.owresearch.netlify.app/opengraph-image.png",
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
      <LightingInstallation/>
      <Footer />
    </>
  );
};
