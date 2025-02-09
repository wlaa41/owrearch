import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import Feedback from "../../components/Common/Feedback";
import FeedbackStyleTwo from "../../components/Common/FeedbackStyleTwo";
import FeedbackStyleThree from "../../components/Common/FeedbackStyleThree";
import FeedbackStyleFour from "../../components/Common/FeedbackStyleFour";
import FeedbackStyleFive from "../../components/Common/FeedbackStyleFive";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Top Electrician Services in London - OW Electrician London",
    description: "Trusted electrician services in London with top reviews. Contact us for home automation, electrical repairs, and installations. Call 07307565444",
    keywords: [
        "Electrician London", "Home Automation London", "Electrical Repairs London", "Electrical Installations London", "24/7 Electrician London", "Emergency Electrician London", "Certified Electricians London", "Top Reviewed Electrician London", "Trusted Electrician London", "Honest Electrician London", "High Review Electrician London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
        title: "Top Electrician Services in London - OW Electrician London",
        description: "Trusted electrician services in London with top reviews. Contact us for home automation, electrical repairs, and installations. Call 07307565444",
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

      <PageBanner pageTitle="Feedback or Testimonials" />

      <Feedback />

      <FeedbackStyleTwo />

      <FeedbackStyleThree />

      <FeedbackStyleFour />

      <FeedbackStyleFive />

      <Footer />
    </>
  );
};
