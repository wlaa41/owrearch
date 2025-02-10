"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/logo.png";
import map from "/public/images/map.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import ImageStripOWElectrician from "../ImageStripOWElectricain";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <ImageStripOWElectrician />
          <div className="row pt-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="OW Logo" width={110} height={36} />
                  </Link>
                </div>
                <p>
                  OW provides expert services in **electrical engineering, home automation, robotics, AI, and smart technology solutions** across London. We specialize in **emergency electrical repairs, smart home installations, AI-driven automation, and cutting-edge energy solutions.** Our team ensures **safety, efficiency, and innovation** in every project.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
              <div className="single-footer-widget ps-5">
                <h3>Company</h3>
                <ul className="list">
                  <li><Link href="/about/why-us-ow-electrician">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/features">Features</Link></li>
                  <li><Link href="/courses">Courses</Link></li>
                  <li><Link href="/latest-news-ow-electrician-apply">Latest News</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="300" data-aos-duration="500" data-aos-once="true">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li><Link href="/faq">FAQ&apos;s</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/team">Team</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="400" data-aos-duration="500" data-aos-once="true">
              <div className="single-footer-widget">
                <h3>Contact</h3>
                <ul className="footer-contact-info">
                  <li><Icon.MapPin /> Rainham Rd N., London, UK</li>
                  <li><Icon.Mail /> Email: <a href="mailto:info@owelectric.co.uk">info@owelectric.co.uk</a></li>
                  <li><Icon.PhoneCall /> Phone: <a href="tel:+447307565444">+44 7307 565 444</a></li>
                </ul>
                <ul className="social-links">
                  <li><a href="https://www.youtube.com/channel/UCf-uFTxflg9b_IMwGI_vZSg" className="youtube" target="_blank" rel="noopener noreferrer"><Icon.Youtube /></a></li>
                  <li><a href="https://x.com/OWElectrician" className="twitter" target="_blank" rel="noopener noreferrer"><Icon.Twitter /></a></li>
                  <li><a href="https://www.instagram.com/OWElectrician" className="instagram" target="_blank" rel="noopener noreferrer"><Icon.Instagram /></a></li>
                  <li><a href="https://uk.linkedin.com/company/owelectric" className="linkedin" target="_blank" rel="noopener noreferrer"><Icon.Linkedin /></a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} OW. All rights reserved. <br />
                  OW London | Electrical Engineering, Robotics & AI Automation
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image src={map} className="map" alt="Location Map" width={910} height={443} />

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="Decorative Shape" width={202} height={202} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="Decorative Shape" width={22} height={22} />
        </div>


      </footer>
    </>
  );
};

export default Footer;
