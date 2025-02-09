"use client";

import React from "react";
import Link from "next/link";

const ParagraphsInGreen = () => {
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>Unlocking Modern Living: Smart Home Solutions by OW Electricians</h3>
          <p>At OW London, we don not just fix electrical issues; we enhance lifestyles. Our expert smart home engineers are adept at transforming your living space into a cutting-edge haven, integrating everything from automated lighting systems to advanced security installations. Step into the future with our bespoke smart home solutions and enjoy the convenience and safety that technology brings right to your doorstep.</p>

          <Link href="/contact" className="btn btn-primary" >
            Contact Us
          </Link>

          <span>
            <Link href="tel:07307565444">
              or email us at info@owelectric.co.uk
            </Link>
          </span>
        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">
          <h5>Emergency Response: Around-the-Clock Electrical Services</h5>

          <div className="partner-inner">
            <div className="row justify-content-center">
              <div className="paragraphsIngreen-para">
                <h3 className="paragraphsIngreen-title">Immediate Assistance When You Need It Most</h3>
                <p>Power outages, electrical faults, and unexpected issues can occur without warning. That is why our emergency electrician services are available 24/7 throughout London. With guaranteed same-day responses, we are your first line of defense against potential hazards, ensuring your environment remains safe and functional no matter the hour.</p>
              </div>
              <div className="paragraphsIngreen-para">
                <h3 className="paragraphsIngreen-title">Safety First: Comprehensive Electrical Testing and Certifications</h3>
                <p>Safety is paramount in any electrical work, and at OW London, we take it seriously. Our thorough electrical testing services are designed to meet all compliance and safety standards. From PAT testing to issuing electrical safety certificates, our experienced electricians ensure that every component of your system is tested for safety and reliability.</p>
              </div>
              <div className="paragraphsIngreen-para">
                <h3 className="paragraphsIngreen-title">Expert Electrical Services for Every Sector</h3>
                <p>Each client at OW London receives personalized service tailored to their specific needs. Whether you are a homeowner needing fuse board replacements or a business requiring full-scale electrical installations, our team provides the expertise and resources necessary to achieve optimal results. Our extensive experience with projects in diverse settings, including trendy offices and chic restaurants, guarantees that we deliver electrical solutions that perfectly match your requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParagraphsInGreen;
