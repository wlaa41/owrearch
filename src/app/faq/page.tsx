import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import FaqContent from "../../components/FAQ/FaqContent";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQ - Expert Electrician Services in London",
    description: "Find answers to frequently asked questions about OW Electrician London services, rates, areas served, and more. Contact us for further details.",
    keywords: [
        "FAQ", "Electrician London FAQ", "OW Electrician London", "Electrician Rates London", "Emergency Electrician London", "Weekend Electrician Services", "Full-Day Electrical Projects", "Electrical Testing Services", "Service Areas London", "Qualified Electricians", "Smart Home Integration", "Book Electrician London", "Payment Methods Electrician", "Commercial Electrician Services", "Local Electrician London", "Affordable Electrician London", "Best Electrician London", "Top Electrician London", "Reliable Electrician London", "Electrician Near Me", "24 Hour Electrician London", "Residential Electrician London", "Electrical Repairs London", "Certified Electrician London", "Electrician Reviews London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
        title: "FAQ - Expert Electrician Services in London",
        description: "Find answers to frequently asked questions about OW Electrician London services, rates, areas served, and more. Contact us for further details.",
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

      <PageBanner pageTitle="FAQ" />

      <FaqContent />

      <Footer />
    </>
  );
};
