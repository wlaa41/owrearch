

import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import AlarmCCTV from "./AlarmCCTV";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Alarm and Surveillance Services | OW London Electrician & Smart Home Engineers",
    description: "OW London Electrician and Smart Home Engineers offer comprehensive alarm and surveillance services in London. Call 07307565444 for 24/7 security solutions.",
    keywords: [
        "alarm services London", 
        "surveillance systems London", 
        "CCTV installation London", 
        "access control systems", 
        "intruder alarms London", 
        "home security London", 
        "business security London", 
        "24-hour emergency alarm services",
        "smart home security London"
    ],
    authors: [{ name: 'OW Electrician London' }],
    openGraph: {
      title: "Alarm and Surveillance Services | OW London Electrician & Smart Home Engineers",
      description: "OW London Electrician and Smart Home Engineers provide top-notch alarm and surveillance services across London. Call 07307565444 for a secure home or business.",
      url: "https://www.owresearch.netlify.app/",
      siteName: "OW Electrician & Home Automation Engineers",

      locale: 'en_GB',
      type: 'website',
    },
};


export default function Page() {
  return (
    <>
      <Navbar />
      <AlarmCCTV/>
      <JoinOurTeam/>
      <Footer />
    </>
  );
};
