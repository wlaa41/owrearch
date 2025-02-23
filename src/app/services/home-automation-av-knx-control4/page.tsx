



import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import DomesticElectrician from "@/components/Services/DomesticElectrician/DomesticElectrician";
import HomeAutomation from "./HomeAutomation";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Automation Services in London | OW Electrician & Home Automation Engineers",
  description: "OW London provides expert home automation services including smart lighting, security systems, and bespoke home cinema installation. Call 07307565444.",
  keywords: [
    "home automation London",
    "smart home services",
    "smart lighting installation",
    "home security systems",
    "bespoke home cinema",
    "Control4 programming",
    "audio-visual installation",
    "smart home design",
    "climate control automation",
    "energy-efficient automation",
    "lighting control",
    "heating control",
    "multiroom audio",
    "intelligent home control",
    "Loxone integration",
    "WiFi solutions",
    "Crestron systems",
    "Lutron systems",
    "CCTV installation",
    "fire alarms",
    "smart home integration",
    "voice control",
    "remote access",
    "HVAC automation",
    "Knightsbridge SW1X",
    "Mayfair W1K",
    "Chelsea SW3",
    "Kensington W8",
    "Hampstead NW3"
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "Home Automation Services in London | OW Electrician & Home Automation Engineers",
    description: "OW London provides expert home automation services including smart lighting, security systems, and bespoke home cinema installation. Call 07307565444.",
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
      <HomeAutomation/>
      <Footer />
    </>
  );
};
