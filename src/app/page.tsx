import React from "react";
import Navbar from '../components/Layout/Navbar'
import NavbarTemp from '../components/Layout/NavbarTemp'
import MainBanner from '../components/ITStartup/MainBanner';
// import MainBannerTemp from '../components/ITStartup/MainBannerTemp';

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
import CitySpark from "@/components/citySpark/CitySpark";
import RoboticProject from "@/components/RoboticProject/RoboticProject";

// import ServerSideSaveQueryParamsVisitors from "@/components/ServerSideSaveQueryParamsVisitors";
// import ScrollAndSessionTracker from "@/components/ScrollAndSessionTracker";
// import BlogPostSearch from "@/components/BlogPostSearch/BlogPostSearch";

export default function Home() {
  const services = [
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "200",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "AI & Machine Learning Consulting",
        "description": "Expert guidance in AI model development, deep learning, and data science applications for businesses and research institutions."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "250",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "Robotics Development & Simulation",
        "description": "Custom robotics solutions, simulation environments, and autonomous systems design using ROS and Gazebo."
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
        "name": "DevOps & Cloud Infrastructure",
        "description": "Automation, CI/CD pipelines, and cloud infrastructure setup using Kubernetes, Docker, and Terraform."
      },
      "availability": "http://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "150",
      "priceValidUntil": "2024-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "AI & Robotics Classes",
        "description": "Hands-on training in AI, machine learning, and robotics for beginners and advanced learners."
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
        "name": "Research Collaboration & Development",
        "description": "Partner with us for cutting-edge AI and robotics research and development initiatives."
      },
      "availability": "http://schema.org/InStock"
    }
  ];

  
    return (
      <>
      <Navbar />
      {/* <NavbarTemp /> */}
      <MainBanner />
      {/* <MainBannerTemp/> */}

      {/* <Feedback /> */}

      <Features />

      {/* <ServicesArea /> */}

      {/* <OurFeatures/> */}
      {/* <Team /> */}

      {/* <FunFactsArea /> */}

      {/* <RecentWorks /> */}

      {/* <PricingStyleOne /> */}

      {/* <ReviewList /> */}
      <CitySpark/>

      {/* <ParagraphsInGreen />  */}
      <BlogPost />
      <RoboticProject/>
      {/* <AreasCoveredList/> */}

      {/* <JoinOurTeam/> */}
      <Footer />
      {/* <SaveQueryParamsVisitors/> */}
      {/* <ServerSideSaveQueryParamsVisitors/> */}
    </>
  );
}
