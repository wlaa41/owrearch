// import React from "react";

// "use client"

import "../../public/css/bootstrap.min.css";
import "animate.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "../../public/css/RoboticProject.css";
import "../../public/css/CitySpark.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import ScrollAndSessionTracker from "@/components/ScrollAndSessionTracker";
import 'katex/dist/katex.min.css'

// Global Style
import "../../public/css/style.css";
// Global Responsive Style
import "../../public/css/responsive.css";
import "./globals.css";

//OW Edit
import "../../public/css/mainPage.css";
import "../../public/css/nav.css";
import "../../public/css/myGlobal.css";


// Dynamic imports for heavy components
const AosAnimation = dynamic(() => import('@/components/Layout/AosAnimation'));
const GoTop = dynamic(() => import('@/components/Layout/GoTop'));
// const ThemeSwitcher = dynamic(() => import('./blog/_components/theme-switcher'));

export const metadata: Metadata = {
  title: "AI, Robotics & Research | OW ROQAI - Autonomous Systems & Innovation",
  description: "Explore the latest advancements in AI, robotics, and autonomous systems. Research projects, machine learning, DevOps, and simulation technologies.",
  keywords: [
    "AI research", "robotics engineering", "autonomous systems", "machine learning", "deep learning",
    "computer vision", "DevOps for AI", "simulation technology", "ROS robotics", "SLAM technology",
    "AI in automation", "robotics education", "cyber-physical systems", "cloud-based AI", "real-time AI systems",
    "AI-powered robotics", "mathematical modeling", "AI in embedded systems", "simulation-based AI research"
  ],
  authors: [{ name: 'OW ROQAI' }],
  openGraph: {
    title: "AI, Robotics & Research | OW ROQAI",
    description: "Leading-edge research in AI, robotics, and automation. Stay updated on the latest innovations in machine learning, simulation, and DevOps for AI.",
    url: "https://owresearch.netlify.app/",
    siteName: "OW ROQAI - AI & Robotics Research",
    images: [
      {
        url: "https://owresearch.netlify.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: 'OW ROQAI - AI & Robotics Research',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  verification: { google: "9DHiy92qDKm36hENjH5iZVxb5SN4AT43lZ2iHz-xVD8" },
  icons: "https://owresearch.netlify.app/manifest.json"
};

{/* <link rel="manifest" href= "https://www.owresearch.netlify.app/favicon/site.webmanifest" /> */ }
const reviews = [
  {
    author_name: "Fernando Ferdov",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUmIPeEgRibo6PpMZl0H3n2xWAKIGYFCPOBfIAKWAj4lZuBWOE=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Highly recommend this electrician! His knowledge is at a very high level. I needed extra lighting installed for my project, and he gave me excellent advice on how to work around the camper van electric system. Very happy with the final result. He is my go-to electrician now. Thank you!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    picture_url: "https://lh5.googleusercontent.com/p/AF1QipOv9pgEzLjwqa0HPaFgr0LwXEwzDBnEo0tVs4Py=w900-h1482-p-k-no",
    picture_url2: "https://lh5.googleusercontent.com/p/AF1QipN_mtHWPQhSgcMNrGp5lEUBvtmndsvBHrU0NAXi=w900-h1482-p-k-no",
    picture_url3: "https://lh5.googleusercontent.com/p/AF1QipMq0w5tQ-wIci_flQG_EtEXyIFbYLfbWUu9Nb68=w900-h1482-p-k-no",
    itemReviewed: "Electrical Services"

  },
  {
    author_name: "Petr Svacina",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX4Nh_Igzh2D42BLVBTQ6EgqKnhqLwHOvs53kWqf-izmleX6y2k=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "a month ago",
    text: "Just had a fantastic crew come over to set up my Ring security system, complete with a four-camera CCTV and door/window sensors at my house. They nailed the installation and cleverly tweaked the sensor placements for better security—all on the house. Highly recommend their first-rate service!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    itemReviewed: "Security System Installation"

  },
  {
    author_name: "Raphael Pedrini",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXoXHjxGpyfahlxDR010ZQf3l-lDzaT6m6sT3Pw_lCjQv3VXZTm=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "a month ago",
    text: "Really good service, very kind and efficient. Would recommend!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    picture_url: "https://lh5.googleusercontent.com/p/AF1QipPf85laS9DAjaUsefiWHF4-QCFyE-K3k5XUV1Vz=w900-h1281-p-k-no",
    picture_url2: "https://lh5.googleusercontent.com/p/AF1QipMrvdX2naGBV_s7hTrtLGN8dUJkltQ4LxUjX7km=w900-h1281-p-k-no",
    itemReviewed: "Networking and Outlet Replacing"

  },
  {
    author_name: "Tom M.",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXFuzM4KIgvIdF-Y4Cb58IHBjkJtYVbX6yXaH75Wmi3uPZkdKX-=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "1 year ago",
    text: "Changed my fuse box and certified the work. He responds quickly and works even on weekends if needed. Excellent electrical services!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    itemReviewed: "Electrical Repair"

  }
  // Add more reviews as needed
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OW London Electrician & Home Automation Engineers",
  "url": "https://www.owresearch.netlify.app/",
  "logo": "https://www.owresearch.netlify.app/favicon/favicon-128x128.png",
  "image": [
    "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",
    "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",
    "https://www.owresearch.netlify.app/photos/16x9/Team-Electrician-Van-with-tools.jpg"
  ],
  "description": "#1 electrical contractor in London for Residential, Commercial & Emergency electrical services. 30 min response time. Call 07307565444",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rainham Rd N",
    "addressLocality": "Dagenham",
    "postalCode": "RM10 7FD",
    "addressCountry": "UK"
  },
  "email": "info@owresearch.netlify.app",
  "telephone": "+447307565444",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+447307565444",
    "email": "info@owresearch.netlify.app"
  },
  "areaServed": { "@type": "Place", "name": ["Central London", "East London", "West London", "North London", "South London", "Bethnal Green", "Bow", "Canning Town", "Canary Wharf", "Hackney", "Ilford", "Leyton", "Leytonstone", "Mile End", "Plaistow", "Poplar", "Shoreditch", "Stratford", "Walthamstow", "Whitechapel", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "E15", "E16", "E17", "E18", "E20", "IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8", "IG9", "IG10", "IG11", "RM1", "RM2", "RM3", "RM4", "RM5", "RM6", "RM7", "RM8", "RM9", "RM10", "RM11", "RM12", "RM13", "RM14", "RM15", "RM16", "RM17", "RM18", "RM19", "RM20", "RM21", "RM22"] 
  },
  "offers": {
    "@type": "Offer",
    "description": "24/7 Electricians, No Call-Out Fees, Very Competitive Prices, Guaranteed Same-Day Response",
    "availability": "http://schema.org/InStock",
    "price": "0.00",
    "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": review.itemReviewed,
    },
    "author": {
      "@type": "Person",
      "name": review.author_name,
      "image": review.profile_photo_url,
      "url": review.url
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.text,
    "datePublished": review.relative_time_description
  })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": '5',
    "reviewCount": '30',
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Diverse Electrical and Home Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Round-the-Clock Domestic Electrician Services",
          "description": "Our expert domestic electricians provide 24/7 assistance for all residential electrical needs, from minor repairs to major installations, ensuring safety and efficiency with no call-out fees.",
          "price": "90",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dedicated Commercial Electrical Contracting",
          "description": "Comprehensive electrical services tailored for commercial settings, ensuring that your business operations are uninterrupted with our guaranteed 2-hour emergency response.",
          "price": "Call for pricing",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Electrician Expertise",
          "description": "Robust and reliable industrial electrical services designed to support large scale and high-demand industrial environments with experienced contractors ready to deploy.",
          "price": "Call for pricing",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Precision Electrical Testing and PAT Services",
          "description": "Professional and certified electrical testing including PAT, providing detailed inspections and safety certifications to ensure regulatory compliance.",
          "price": "180",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advanced Alarm and CCTV System Installations",
          "description": "Secure your premises with our cutting-edge alarm and CCTV installation services, offering 24/7 monitoring solutions and emergency support.",
          "price": "Call for pricing",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Customized Lighting Installation Solutions",
          "description": "Expert lighting installation services for both residential and commercial spaces, featuring energy-efficient and automated lighting systems designed to enhance aesthetics and functionality.",
          "price": "Call for pricing",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Immediate Emergency Electrician Response",
          "description": "Available 24/7, our emergency electricians provide rapid, reliable, and efficient services to address urgent electrical issues with guaranteed same-day response.",
          "price": "140",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Complete Home Rewiring Services",
          "description": "Full home electrical rewiring services tailored to meet modern safety standards and improve electrical system efficiency and safety.",
          "price": "3500",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Detailed EICR and Electrical Safety Testing",
          "description": "Comprehensive Electrical Installation Condition Report (EICR) services to ensure your property meets all electrical safety standards with detailed documentation.",
          "price": "180",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Specialized Water Heater Repair and Installation",
          "description": "Expert repair and installation services for all types of water heaters, ensuring your system runs efficiently with optimal safety and reliability.",
          "price": "Call for pricing",
          "priceCurrency": "GBP",
    "image": "https://www.owresearch.netlify.app/photos/4x3/Team-Electrician-Van-with-tools.jpg",

        }
      }
    ]
  }
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ScrollAndSessionTrackerWithNoSSR = dynamic(
  () => import('../components/ScrollAndSessionTracker'),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="author" content="OW Robotics, Quantum and AI" />
        <meta name="description" content="OW Robotics, Quantum and AI - Advancing research in robotics, AI, math, and programming. Explore cutting-edge projects in simulation, automation, and artificial intelligence." />
        <meta name="keywords" content="Robotics, AI, Machine Learning, Simulation, Research, Programming, Autonomous Systems, Computer Vision, Quantum Computing" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta property="og:site_name" content="OW Robotics, Quantum and AI - Research & Innovation" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        const params = new URLSearchParams(window.location.search);
        const query = {};
        params.forEach((value, key) => {
          query[key] = value;
        });

        const currentTime = new Date().toISOString();
        const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

        function getBrowserInfo() {
          const userAgent = navigator.userAgent;
          if (userAgent.includes("Firefox")) return "Firefox";
          if (userAgent.includes("Chrome")) return "Chrome";
          if (userAgent.includes("Safari")) return "Safari";
          if (userAgent.includes("Edge")) return "Edge";
          return "Unknown";
        }

        function getOSInfo() {
          const userAgent = navigator.userAgent;
          if (userAgent.includes("Win")) return "Windows";
          if (userAgent.includes("Mac")) return "MacOS";
          if (userAgent.includes("Linux")) return "Linux";
          if (userAgent.includes("Android")) return "Android";
          if (userAgent.includes("like Mac")) return "iOS";
          return "Unknown";
        }

        fetch('/api/postVisitData', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query,
            urlPath: window.location.pathname,
            time: currentTime,
            device: deviceType,
            browser: getBrowserInfo(),
            os: getOSInfo()
          })
        });
      })();
    `,
          }}
        />
      </head>

      <body className={poppins.className}>
        <ScrollAndSessionTrackerWithNoSSR />
        {children}
        <GoogleAnalytics gaId="G-8LW02GGKZL" />
        <GoogleTagManager gtmId="GTM-WRQD4RKP" />
        <AosAnimation />
        <GoTop />
      </body>
    </html>
  );

}
