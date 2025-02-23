
import React from "react";
import Link from "next/link";
import ElectricianVanSmartHomeImage from "@/components/ITStartup/ElectricianVanSmartHomeImage";
import { Globe, MapPin, UserPlus } from "react-feather";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import AreasCoveredList from "@/components/coverdArea/AreasCoveredList";
import LatestNews from "@/components/latest-news-ow-electrician-apply/latest-news";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Latest News: Expanding Fleet & Coverage | OW Electrician & Home Automation Engineers",
    description: "Stay updated with the latest news from OW Electrician London. Learn about our fleet expansion, new coverage areas, services, and career opportunities.",
    keywords: [
        "Electrician London", "Latest News Electrician", "OW Electrician London", "Fleet Expansion Electrician", "Electrician Services London", "Central London Electrician", "Smart Home Services London", "Qualified Electricians", "Join Electrician Team", "Electrician Careers London", "Electrical Testing Services", "Emergency Electrician London", "Affordable Electrician London", "Best Electrician London", "Top Electrician London", "Reliable Electrician London", "Electrician Near Me", "24 Hour Electrician London", "Residential Electrician London", "Commercial Electrician Services", "Electrical Regulations London", "Electrician Blog", "Electrical Standards Compliance"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
        title: "Latest News: Expanding Fleet & Coverage | OW Electrician & Home Automation Engineers",
        description: "Stay updated with the latest news from OW Electrician London. Learn about our fleet expansion, new coverage areas, services, and career opportunities.",
        url: "https://www.owresearch.netlify.app/",
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

const LatestNewsPage = () => {
  return (
    <>
      <Navbar />
          <LatestNews/>
      <Footer />
    </>
  );
};

export default LatestNewsPage;
