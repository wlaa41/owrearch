import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import PricingStyleOne from "../../components/PricingPlans/PricingStyleOne";
import PricingStyleTwo from "../../components/PricingPlans/PricingStyleTwo";
import PricingStyleFour from "../../components/PricingPlans/PricingStyleFour";
import PricingStyleThree from "@/components/PricingPlans/PricingStyleThree";
import PricingTable from "@/components/PricingPlans/PricingTable";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Affordable Electrician Pricing - OW Electrician London",
  description: "Discover transparent and competitive pricing for expert electrical services in London. No call-out fees, 24/7 emergency support, and top-quality workmanship. Call 07307565444",
  keywords: [
    "electrician pricing London", 
    "emergency electrician rates", 
    "affordable electrical services", 
    "OW Electrician London", 
    "certified electricians London", 
    "24/7 electrical support", 
    "property rewiring London", 
    "consumer unit upgrades", 
    "EICR testing London", 
    "PAT testing London"
  ],
  authors: [{ name: 'OW Electrician London' }],
  openGraph: {
    title: "Affordable Electrician Pricing - OW Electrician London",
    description: "Discover transparent and competitive pricing for expert electrical services in London. No call-out fees, 24/7 emergency support, and top-quality workmanship. Call 07307565444",
    url: "https://www.owelectric.co.uk/",
    siteName: "OW Electrician & Home Automation Engineers",
    images: [
      {
        url: "https://www.owelectric.co.uk/opengraph-image.jpg",        width: 1200,
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

      <PageBanner pageTitle="Pricing" />
      <PricingStyleThree/>


      <PricingStyleOne />

      <PricingStyleTwo />


      {/* <div className="pt-80">
        <PricingStyleFour />
      </div> */}
      <PricingTable></PricingTable>

      <JoinOurTeam/>

      <Footer />
    </>
  );
};
