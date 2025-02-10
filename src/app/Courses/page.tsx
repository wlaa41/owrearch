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


// This is the write way to write the meta data
export const metadata: Metadata = {
  title: "OW ROQAI - Robotics, AI & Research",
  description: "Explore cutting-edge research in robotics, AI, and autonomous systems. Stay updated on the latest innovations, projects, and insights in machine learning, DevOps, and simulation.",
  keywords: [
    "robotics research", 
    "AI innovation", 
    "autonomous systems", 
    "machine learning projects", 
    "DevOps engineering", 
    "computer vision", 
    "simulation and modeling", 
    "SLAM technology", 
    "reinforcement learning", 
    "AI education"
  ],
  authors: [{ name: 'OW ROQAI' }],
  openGraph: {
    title: "OW ROQAI - Robotics, AI & Research",
    description: "Explore cutting-edge research in robotics, AI, and autonomous systems. Stay updated on the latest innovations, projects, and insights in machine learning, DevOps, and simulation.",
    url: "https://owresearch.netlify.app/",
    siteName: "OW ROQAI - Research & AI",
    images: [
      {
        url: "https://owresearch.netlify.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: 'OW ROQAI OpenGraph Image',
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

      {/* <PricingStyleTwo /> */}


      {/* <div className="pt-80">
        <PricingStyleFour />
      </div> */}
      {/* <PricingTable></PricingTable> */}

      <JoinOurTeam/>

      <Footer />
    </>
  );
};
