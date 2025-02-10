// "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo-white.png";


import vanimage from "/public/images/ow-london-electrician-smart-home.webp";
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

import VideoElectrcian from "../VideoElectrcian";
import CallUsNowButton from "../../components/Layout/CallUsNowButton";

const HeroBanner: React.FC = () => {
  return (
    <div className="main-banner">
            {/* Logo Section */}
            <div className="logo-container">
        <Image src={logo} alt="Company Logo" width={150} height={80} priority />
      </div>

      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              {/* Left Side Content */}
              <div className="col-lg-5 hero-container">
                <div className="left">
                  <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
                    24/7 Emergency Electrician in London
                  </h1>
                  <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true" className="fs-6">
                    ● No hidden fees – No call-out charges
                    <br />
                    ● Certified & NICEIC registered
                    <br />
                    ● Fast same-day service
                    <br />
                    ● Friendly & professional team
                    <br />
                    ● Rated 5 stars on Google
                    <br />
                    Call us now: <a href="tel:+447307567444" itemProp="telephone" aria-label="Call us at 07307 566 444">07307 565 444</a>
                    <br />
                    Email us: <a href="mailto:info@owresearch.netlify.app" itemProp="email" aria-label="Email us at info@owresearch.netlify.app">info@owresearch.netlify.app</a>
                  </p>
                  <CallUsNowButton />
                </div>
              </div>

              {/* Right Side Content */}
              <div className="right">
                <VideoElectrcian />
              </div>

              {/* Banner Image Placeholder */}
              <div className="banner-image" id="willtest"></div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-f9edc686-1c7e-4f08-b129-95a40667a814" data-elfsight-app-lazy></div>
      {/* Shape Images (Commented Out) */}
      {/* <div className="shape1"><Image src={shape1} alt="shape" width={202} height={202} /></div>
      <div className="shape2 rotateme"><Image src={shape2} alt="shape" width={22} height={22} /></div>
      <div className="shape3"><Image src={shape3} alt="shape" width={28} height={28} /></div>
      <div className="shape4"><Image src={shape4} alt="shape" width={21} height={20} /></div>
      <div className="shape5"><Image src={shape5} alt="shape" width={182} height={146} /></div>
      <div className="shape6 rotateme"><Image src={shape4} alt="shape" width={21} height={20} /></div>
      <div className="shape7"><Image src={shape4} alt="shape" width={21} height={20} /></div>
      <div className="shape8 rotateme"><Image src={shape2} alt="shape" width={22} height={22} /></div> */}
    </div>
  );
};

export default HeroBanner;
