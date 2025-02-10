import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import DomesticElectrician from "@/components/Services/DomesticElectrician/DomesticElectrician";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";


import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Ow! Domestic Electrical Services, Emergency Electricians, Smart Home Installation - OW London Electrician and Home Automation Engineers",
    description: "Top-rated domestic electrical services in London. Call 07307565444",
    keywords: [
        "London Electrician", "Home Automation Engineers", "Domestic Electrical Services", 
        "Emergency Electrician London", "NICEIC-approved Electrician", "24-hour Electrical Services", 
        "Electrical Rewiring London", "Smart Home Installation", "Energy-efficient Lighting", 
        "Fuse Board Replacement", "Licensed Electrician London", "Insured Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Ow! Domestic Electrical Services, Emergency Electricians, Smart Home Installation - OW London Electrician and Home Automation Engineers",
      description: "Top-rated domestic electrical services in London. Call 07307565444",
      url: "https://www.owresearch.netlify.app/",
      siteName: "OW Electrician & Home Automation Engineers",
      images: [
        {
          url: "https://www.owresearch.netlify.app/opengraph-image.jpg",          
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
      <DomesticElectrician/>
      <JoinOurTeam/>
      <Footer />
    </>
  );
};
