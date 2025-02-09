import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import FunFactsArea from "@/components/Common/FunFactsArea";
import ReviewList from "@/components/GoogleReview/ReviewList";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Gallery, Certified Electricians in London | OW Electrician & Home Automation Engineers",
  description: "Check Our Projects Top-rated certified electrical services in London. No call-out fees,  and 24/7 emergency services. Call 07307565444",
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
    title: "Gallery, Certified Electricians in London | OW Electrician & Home Automation Engineers",
    description: "Check Our Projects Top-rated certified electrical services in London. No call-out fees,  and 24/7 emergency services. Call 07307565444",
    url: "https://www.owelectric.co.uk/",
    siteName: "OW Electrician & Home Automation Engineers",
    images: [
      {
        url: "https://www.owelectric.co.uk/twitter-image.jpg",
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

      <PageBanner pageTitle="Trusted Electricians Who Cares About The Feedback" />
      <ReviewList/>
      <FunFactsArea/>

      <Footer />
    </>
  );
};