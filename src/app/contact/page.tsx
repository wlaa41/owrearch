import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import GoogleMap from "../../components/Contact/GoogleMap";
import ContactForm from "../../components/Contact/ContactForm";


import type { Metadata } from 'next';
import OurFeatures from "@/components/Features/OurFeatures";

export const metadata: Metadata = {
    title: "Professional Electrician Services in London - OW Electrician London",
    description: "Expert electrician services in London. Contact us for home automation, electrical repairs, and installations. Call 07307565444",
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
        title: "Top-Rated Certified Electrician Services in London | OW Electrician London",
        description: "OW Electrical provides certified electrician services in London, including emergency repairs, installations, domestic and commercial needs. Call 07307565444",
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

      <PageBanner pageTitle="I Need To Speak To An Electrician" />
      <OurFeatures/>

      <ContactInfo />

      <GoogleMap />

      <ContactForm />

      <Footer />
    </>
  );
};
