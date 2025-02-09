



import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import DomesticElectrician from "@/components/Services/DomesticElectrician/DomesticElectrician";
import WaterHeaterRepair from "./WaterHeaterRepair ";


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Water Heater Repair Services in London | OW Electrician & Home Automation Engineers",
  description: "OW London provides expert water heater repair services, including installation, maintenance, and repairs, for homes and businesses. Call 07307565444.",
  keywords: [
    "water heater repair London",
    "water heater installation",
    "water heater maintenance",
    "water heater services",
    "tankless water heater repair",
    "electric water heater repair",
    "gas water heater repair",
    "water heater troubleshooting",
    "hot water repair services",
    "certified water heater technicians",
    "water heater warranty",
    "annual water heater service",
    "emergency water heater repair",
    "efficient water heating",
    "home water heater repair",
    "business water heater repair",
    "water heater safety",
    "OW Electrician",
    "water heater inspection",
    "heater installation cost",
    "licensed water heater repair",
    "heater maintenance tips",
    "water heater service London",
    "water heater professionals",
    "plumbing and heating repair",
    "water heater efficiency",
    "heater replacement services",
    "reliable water heater repair",
    "water heater issues",
    "London heater repair services",
    "heater repair company",
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "Water Heater Repair Services in London | OW Electrician & Home Automation Engineers",
    description: "OW London provides expert water heater repair services, including installation, maintenance, and repairs, for homes and businesses. Call 07307565444.",
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
      <WaterHeaterRepair/>
      <Footer />
    </>
  );
};
