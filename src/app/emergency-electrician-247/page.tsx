

import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import EmergencyElectrician from "./EmergencyElectrician";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Emergency Electrician Services in London | OW Electrician & Home Automation Engineers",
    description: "OW London, Electrician, and Smart Home Engineers provide 24-hour emergency electrical services across North, West, East, and South London. Call 07307565444",
    keywords: [
        "Emergency Electrician London", 
        "24-hour Electrician London", 
        "Emergency Electrical Services London", 
        "Electrician Central London", 
        "Electrician East London", 
        "Electrician North London", 
        "Electrician West London", 
        "Electrical Maintenance London", 
        "Electrical Repairs London", 
        "NICEIC Approved Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Emergency Electrician Services in London | OW Electrician & Home Automation Engineers",
      description: "OW London, Electrician, and Smart Home Engineers provide 24-hour emergency electrical services across North, West, East, and South London. Call 07307565444",
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
       <EmergencyElectrician/>
      <Footer />
    </>
  );
};
