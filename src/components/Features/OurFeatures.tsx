"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Discover Our Expertise</h2>
            <div className="bar"></div>
            <p>
              Step into the world of OW London, your certified and NICEIC registered local electricians providing impeccable electrical services 24/7, 365 days a year. Whether it is a wiring emergency or routine inspection, our team delivers with professionalism, speed, and thoroughness across London.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <Icon.PhoneCall />
                </div>
                <h3>
                  <Link href="/contact">
                    24/7 Support Line
                  </Link>
                </h3>
                <p>
                  Immediate response with our 24 Hour Emergency Electrician service, ensuring no call goes unanswered. Reach us at 07307 565 444 or via WhatsApp anytime, anywhere!
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/contact">
                    Email Us
                  </Link>
                </h3>
                <p>
                  Questions or concerns? Drop us an email at info@owelectric.co.uk for quick, professional advice and support.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Home />
                </div>
                <h3>
                  <Link href="/services/domestic">
                    Home Electrical Services
                  </Link>
                </h3>
                <p>
                  From heater repair & replacement to sophisticated fire alarm systems and everything in between, our local electricians ensure your home remains safe and comfortable.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Briefcase />
                </div>
                <h3>
                  <Link href="/services/commercial">
                    Commercial Electrical Expertise
                  </Link>
                </h3>
                <p>
                  Reliable electrical solutions for businesses, including emergency lighting and boiler repairs, delivered swiftly to keep your operations running smoothly.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.CheckCircle />
                </div>
                <h3>
                  <Link href="/services/certifications">
                    Certified Excellence
                  </Link>
                </h3>
                <p>
                  Trust in our certified electricians with top-tier credentials from City & Guilds and the Registered Competent Person scheme, ensuring compliance and quality in every job.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Star />
                </div>
                <h3>
                  <Link href="/reviews">
                    5 STAR Service
                  </Link>
                </h3>
                <p>
                  Celebrated with over 15 years of experience and 5 STAR Google reviews, we pride ourselves on being polite, professional, and always leaving your space cleaner than we found it.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Tool />
                </div>
                <h3>
                  <Link href="/services/troubleshooting">
                    Electrical Troubleshooting
                  </Link>
                </h3>
                <p>
                  Address electrical wiring emergencies and faults efficiently with our qualified electricians. No matter the issue—from tripping circuits to power cuts—our team responds within 60 minutes, ensuring a fast and reliable resolution with no hidden costs.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Shield />
                </div>
                <h3>
                  <Link href="/services/safety">
                    Safety and Compliance
                  </Link>
                </h3>
                <p>
                  Keep your premises safe and up to code with our comprehensive testing and inspection services. Our NICEIC registered and qualified electricians ensure all installations, from fire alarms to emergency lighting, meet stringent safety standards.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.CheckSquare />
                </div>
                <h3>
                  <Link href="/services/cleanliness">
                    Professionalism and Cleanliness
                  </Link>
                </h3>
                <p>
                  At OW London, we pride ourselves on professionalism in every aspect of our service. Expect a clean uniform, a spotless van, and a house left cleaner than we found it after every job. Our commitment to cleanliness and courtesy sets us apart, ensuring a seamless and respectful service experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
