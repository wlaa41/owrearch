import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Team from "../../../components/Common/Team";
import FunFactsArea from "../../../components/Common/FunFactsArea";
import Partner from "../../../components/Common/Partner";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import AboutUsContent1 from "../../../components/AboutUs/AboutUsContent1";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Certified Electricians in London | OW Electrician & Home Automation Engineers",
  description: "Top-rated certified electrical services in London. No call-out fees, transparent pricing, and 24/7 emergency services. Call 07307565444",
  keywords: [
      "London electricians", 
      "certified electricians", 
      "emergency electrical services", 
      "smart home installations", 
      "electrical repairs", 
      "transparent pricing", 
      "no call-out fees", 
      "24/7 electrician London", 
      "domestic electrical services", 
      "commercial electrical services"
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "Certified Electricians in London | OW Electrician & Home Automation Engineers",
    description: "Top-rated certified electrical services in London. No call-out fees, transparent pricing, and 24/7 emergency services. Call 07307565444",
    url: "https://www.owresearch.netlify.app/",
    siteName: "OW Electrician & Home Automation Engineers",
    images: [
      {
        url: "https://www.owresearch.netlify.app/twitter-image.jpg",
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

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />

      {/* <Team /> */}

      {/* <Partner /> */}

      <FunFactsArea />

      <Footer />
    </>
  );
};
