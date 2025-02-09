import React from "react";
import Navbar from '../components/Layout/Navbar'
import NavbarTemp from '../components/Layout/NavbarTemp'
import MainBanner from '../components/ITStartup/MainBanner';
import MainBannerTemp from '../components/ITStartup/MainBannerTemp';

import Features from "../components/ITStartup/Features";
// import OurFeatures from "../components/ITStartup/OurFeatures";
import ServicesArea from "../components/ITStartup/ServicesArea";
// import Team from "../components/Common/Team";
// import FunFactsArea from "../components/Common/FunFactsArea";
// import RecentWorks from "../components/Common/RecentWorks";
// import PricingStyleOne from "../components/PricingPlans/PricingStyleOne";
// import Feedback from "../components/Common/Feedback";
// import Partner from "../components/Common/Partner";
import BlogPost from "../components/Common/BlogPost";
import Footer from "../components/Layout/Footer";
import ReviewList from "@/components/GoogleReview/ReviewList";
import { PostPreviewStyle } from "./blog/_components/post-preview-style";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";
import ParagraphsInGreen from "@/components/Common/ParagraphsInGreen";
import Feedback from "@/components/Common/Feedback";
import FunFactsArea from "@/components/Common/FunFactsArea";
import AreasCoveredList from "@/components/coverdArea/AreasCoveredList";
import OurFeatures from "@/components/Features/OurFeatures";
import Head from "next/head";

// import ServerSideSaveQueryParamsVisitors from "@/components/ServerSideSaveQueryParamsVisitors";
// import ScrollAndSessionTracker from "@/components/ScrollAndSessionTracker";
// import BlogPostSearch from "@/components/BlogPostSearch/BlogPostSearch";

export default function Home() {
  const offers = [
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "90",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Scheduled Electrician Appointment for Regular Hours",
        "description": "Book a pre-scheduled electrician service to ensure timely, efficient, and reliable electrical safety and support across Greater London."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "130",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Evening Electrical Service - No Extra Charges",
        "description": "Utilize our no-surcharge evening service from 6 PM to 12 PM for urgent electrical needs with comprehensive inspections and 24/7 customer support."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "160",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Premium Electrical Services in Central & West London",
        "description": "Opt for our premium services designed for high-demand zones, featuring advanced smart home solutions and meticulous attention to safety and quality."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "140",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "24/7 Emergency Electrician Services",
        "description": "Our around-the-clock emergency service ensures rapid response and resolution of electrical emergencies, backed by expert technicians and high-quality materials."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "180",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "After-Hours Emergency Electrical Services",
        "description": "Get instant access to our emergency electrical technicians during late evening hours for critical issue resolution without any additional late-hour charges."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "240",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Overnight Emergency Electrical Response Team",
        "description": "Our dedicated overnight team is ready to address your emergency electrical issues from midnight to early morning, ensuring safe and secure repairs."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "180",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Weekend Standard Electrical Services",
        "description": "Leverage our full-service weekend electrical support, providing expert assistance with no additional charges for daytime operations."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "220",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Advanced After-Hours Weekend Electrical Support",
        "description": "Our after-hours weekend service ensures swift and effective resolution of complex electrical issues, supported by state-of-the-art equipment and experienced technicians."
      },
      "availability": "http://schema.org/InStock"
    }
  ];
  
  
  
    return (
      <>
      {/* <Navbar /> */}
      <NavbarTemp />

      {/* <MainBanner /> */}
      <MainBannerTemp/>

      {/* <Feedback /> */}

      {/* <Features /> */}

      {/* <ServicesArea /> */}

      {/* <OurFeatures/> */}
      {/* <Team /> */}

      {/* <FunFactsArea /> */}

      {/* <RecentWorks /> */}

      {/* <PricingStyleOne /> */}

      {/* <ReviewList /> */}
      {/* <ParagraphsInGreen />  */}
      {/* <BlogPost /> */}
      {/* <AreasCoveredList/> */}


        {/* <JoinOurTeam/> */}
      {/* <Footer /> */}
      {/* <SaveQueryParamsVisitors/> */}
      {/* <ServerSideSaveQueryParamsVisitors/> */}
    </>
  );
}
