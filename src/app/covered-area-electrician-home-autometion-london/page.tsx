
import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import AreasCoveredPage from "./coverArea";
import AreasCoveredList from "@/components/coverdArea/AreasCoveredList";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Comprehensive Electrical Services Across London | OW Electrician & Home Automation Engineers",
    description: "Discover our wide range of electrical services available across London. Contact OW Electrician London for domestic, commercial, and industrial electrical solutions.",
    keywords: [
        "Electrician London", "Electrical Services London", "Local Electrician London", "Emergency Electrician London", "Affordable Electrician London", "Best Electrician London", "Top Electrician London", "Reliable Electrician London", "Electrician Near Me", "24 Hour Electrician London", "Residential Electrician London", "Commercial Electrician Services", "Industrial Electrical Services London", "Electrical Repairs London", "Certified Electrician London", "Electrician Reviews London", "Electrical Installations London", "Smart Home Services London", "Surge Protection London", "Electrical Safety London", "Electrical Inspections London", "London Electrical Contractor", "Protecting Electronics London", "Preventing Electrocution London", "Family Safety Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
        title: "Comprehensive Electrical Services Across London | OW Electrician & Home Automation Engineers",
        description: "Discover our wide range of electrical services available across London. Contact OW Electrician London for domestic, commercial, and industrial electrical solutions.",
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
      <div className="space99px"></div>
        <AreasCoveredPage/>
        <AreasCoveredList/>
      <Footer />
    </>
  );
};
