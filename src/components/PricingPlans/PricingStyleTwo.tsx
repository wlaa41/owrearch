
"use client";


import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// This component displays pricing options for EICR and PAT Testing services
const PricingStyleTwo = () => {
  return (
<>
  <div className="pricing-area pb-50">
    <div className="container">
      <div className="section-title st-fs-28">
        <h2>Comprehensive Electrical Services Pricing in London</h2>
        <div className="bar"></div>
        <p>
          Explore detailed pricing for top-rated electrical services in London, 
          including EICR, PAT testing, and more. Ensure your property meets all 
          electrical safety standards with certified and experienced electricians.
        </p>
      </div>

      <Tabs className="pricing-tab bg-color" id="electrical-services">
        <TabList>
          <Tab>Electrical Installation Condition Report (EICR)</Tab>
          <Tab>Portable Appliance Testing (PAT)</Tab>
        </TabList>

        <TabPanel>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
              <div className="pricing-box">
                <h4 className="pricing-header">1 Bedroom House or Apartment</h4>
                <p>Includes up to 6 circuits tested, perfect for smaller London homes.</p>
                <div className="price">
                  £180 <span>/ test</span>
                </div>
                <div className="buy-btn">
                  <a href="/contact" className="btn btn-primary">Book Now</a>
                </div>
                <ul className="pricing-features">
                  <li>Comprehensive Circuit Testing</li>
                  <li>Detailed Reporting</li>
                  <li>Ensures Electrical Safety Compliance</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
              <div className="pricing-box">
                <h4 className="pricing-header">2-3 Bedroom House or Apartment</h4>
                <p>Includes testing of one consumer unit, ideal for medium-sized properties.</p>
                <div className="price">
                  £240 <span>/ test</span>
                </div>
                <div className="buy-btn">
                  <a href="/contact" className="btn btn-primary">Book Now</a>
                </div>
                <ul className="pricing-features">
                  <li>Extensive Safety Checks</li>
                  <li>Accurate Fault Identification</li>
                  <li>Reliable Compliance Documentation</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true">
              <div className="pricing-box">
                <h4 className="pricing-header">4 Bedroom House or Apartment</h4>
                <p>Inclusive of one consumer unit, suited for larger properties.</p>
                <div className="price">
                  £260 <span>/ test</span>
                </div>
                <div className="buy-btn">
                  <a href="/contact" className="btn btn-primary">Book Now</a>
                </div>
                <ul className="pricing-features">
                  <li>Full Property Electrical Assessment</li>
                  <li>Detailed Compliance Report</li>
                  <li>Ensures Up-to-Date Safety Standards</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
              <div className="pricing-box">
                <h4 className="pricing-header">PAT Testing for Electrical Safety</h4>
                <p>Safe operation verification for up to 10 items, essential for compliance.</p>
                <div className="price">
                  £140 <span>/ testing</span>
                </div>
                <div className="buy-btn">
                  <a href="/contact" className="btn btn-primary">Book Now</a>
                </div>
                <ul className="pricing-features">
                  <li>Safe Operation Verification</li>
                  <li>Essential for Compliance</li>
                  <li>Detailed Testing Report</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-once="true">
        <div className="note-section">
          <h4>Note:</h4>
          <p className="color-gray long-info">
            Additional circuits beyond the initial 6 are charged at £20 per test. Ensure your London property is compliant and safe.
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  );

};

export default PricingStyleTwo;
