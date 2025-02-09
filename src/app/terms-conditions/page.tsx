import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import TermsConditionsContent from "../../components/TermsConditions/TermsConditionsContent";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions | OW Electrician London - Rates, Services & Policies",
    description: "Explore the terms and conditions of OW Electrician London. Learn about our hourly rates, emergency services, weekend rates, whole day projects, and testing services.",
    keywords: [
        "Electrician London", "Terms and Conditions", "OW Electrician London", "Electrician Rates London", "Emergency Electrician London", "Weekend Electrician Services", "Whole Day Electrical Projects", "Electrical Testing Services", "PAT Testing London", "EICR London", "Consumer Unit Upgrade London", "Full Rewire London", "Electrical Installations London", "Affordable Electrician London", "Best Electrician London", "Top Electrician London", "Reliable Electrician London", "Electrician Policies", "London Electrical Contractor", "Certified Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
        title: "Terms & Conditions | OW Electrician London - Rates, Services & Policies",
        description: "Explore the terms and conditions of OW Electrician London. Learn about our hourly rates, emergency services, weekend rates, whole day projects, and testing services.",
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

      <PageBanner pageTitle="Term & Condition" />

      <TermsConditionsContent />

      <Footer />
    </>
  );
};
 
