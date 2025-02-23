import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - OW Electrician London",
  description: "Read our privacy policy to understand how OW Electrician London collects, uses, and protects your personal information. Contact us for more details.",
  keywords: [
      "Privacy Policy", "Data Protection", "OW Electrician London", "Personal Information Security", "User Privacy", "Information Collection", "Data Use", "User Rights", "Data Security", "London Electrician"
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
      title: "Privacy Policy - OW Electrician London",
      description: "Read our privacy policy to understand how OW Electrician London collects, uses, and protects your personal information. Contact us for more details.",
      url: "https://www.owresearch.netlify.app/opengraph-image.png",
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

      <PageBanner pageTitle="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
};
