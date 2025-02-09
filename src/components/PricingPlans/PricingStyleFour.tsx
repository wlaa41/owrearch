"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const PricingStyleFour = () => {
  return (
    <>
      <div className="pricing-area pb-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Electrician Rates</h2>
            <div className="bar"></div>
            <p>
              Transparent pricing for expert electrical services in London, available around the clock to meet your home and business needs.
            </p>
          </div>

          <Tabs className="pricing-tab bg-color">
            <TabList>
              <Tab>Standard Hourly Rates</Tab>
              <Tab>Emergency</Tab>
            </TabList>


            <TabPanel>
  <div className="row justify-content-center">
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-box">
        <div className="pricing-header">
          <h3>Pre-Booked Electrician</h3>
          <p>Efficient and reliable service scheduled at your convenience.</p>
        </div>
        <div className="price">£90 <span>/ hr</span></div>
        <div className="buy-btn">
          <Link href="/contact" className="btn btn-primary">
            Book Now
          </Link>
        </div>
        <ul className="pricing-features">
          <li>
            <Icon.Check /> Certified Electrical Safety
          </li>
          <li>
            <Icon.Check /> Dedicated Customer Support
          </li>
          <li>
            <Icon.Check /> Free Safety Check with Each Job
          </li>
          <li>
            <Icon.Check /> Full Coverage in Greater London
          </li>
          <li>
            <Icon.Check /> High-Quality Materials Used
          </li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-box">
        <div className="pricing-header">
          <h3>Out of Business Hours</h3>
          <p>Evening service from 6pm to 12pm</p>
        </div>
        <div className="price">£130 <span>/ hr</span></div>
        <div className="buy-btn">
          <Link href="/contact" className="btn btn-primary">
            Book Now
          </Link>
        </div>
        <ul className="pricing-features">
          <li>
            <Icon.Check /> Rapid Emergency Response
          </li>
          <li>
            <Icon.Check /> No Extra Charges for Late Hours
          </li>
          <li>
            <Icon.Check /> Comprehensive Inspections Offered
          </li>
          <li>
            <Icon.Check /> 24/7 Customer Support
          </li>
          <li>
            <Icon.Check /> Coverage Across Central and West London
          </li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-box">
        <div className="pricing-header">
          <h3>Central & West London</h3>
          <p>Premium services in high-demand areas.</p>
        </div>
        <div className="price">£160 <span>/ hr</span></div>
        <div className="buy-btn">
          <Link href="/contact" className="btn btn-primary">
            Book Now
          </Link>
        </div>
        <ul className="pricing-features">
          <li>
            <Icon.Check /> Expert Technicians for High-Demand Areas
          </li>
          <li>
            <Icon.Check /> Smart Home Solutions
          </li>
          <li>
            <Icon.Check /> Tailored Electrical Upgrades
          </li>
          <li>
            <Icon.Check /> Immediate Issue Resolution If Possible
          </li>
          <li>
            <Icon.Check /> Commitment to Safety and Quality
          </li>
        </ul>
      </div>
    </div>
  </div>
</TabPanel>


<TabPanel>
  <div className="row justify-content-center">
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-box">
        <div className="pricing-header">
          <h3>Emergency Electrician</h3>
          <p>Immediate response to electrical emergencies during regular hours.</p>
        </div>
        <div className="price">£140 <span>/ hr</span></div>
        <div className="buy-btn">
          <Link href="/contact" className="btn btn-primary">
            Get Help Now
          </Link>
        </div>
        <ul className="pricing-features">
          <li>
            <Icon.Check /> 24/7 Rapid Response Team
          </li>
          <li>
            <Icon.Check /> All Areas of London Covered
          </li>
          <li>
            <Icon.Check /> Quick Fault Diagnosis and Resolution
          </li>
          <li>
            <Icon.Check /> Use of High-Quality Materials for Emergency Repairs
          </li>
          <li>
            <Icon.Check /> Ensured Safety and Compliance
          </li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-box">
        <div className="pricing-header">
          <h3>Out of Hours Emergency</h3>
          <p>Evening & Late Night (6pm-12am)</p>
        </div>
        <div className="price">£180 <span>/ hr</span></div>
        <div className="buy-btn">
          <Link href="/contact" className="btn btn-primary">
            Get Help Now
          </Link>
        </div>
        <ul className="pricing-features">
          <li>
            <Icon.Check /> No Additional Late Hour Charges
          </li>
          <li>
            <Icon.Check /> Dedicated Emergency Technicians
          </li>
          <li>
            <Icon.Check /> Priority Service to Minimize Downtime
          </li>
          <li>
            <Icon.Check /> Effective Solutions for Critical Issues
          </li>
          <li>
            <Icon.Check /> Support for Residential and Commercial Properties
          </li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-box">
        <div className="pricing-header">
          <h3>Late Night Emergency</h3>
          <p>Service available for overnight emergencies from midnight to early morning.(12am-5am)</p>
        </div>
        <div className="price">£240 <span>/ hr</span></div>
        <div className="buy-btn">
          <Link href="/contact" className="btn btn-primary">
            Get Help Now
          </Link>
        </div>
        <ul className="pricing-features">
          <li>
            <Icon.Check /> Specialist Late Night Response Team
          </li>
          <li>
            <Icon.Check /> Immediate On-Site Arrival
          </li>
          <li>
            <Icon.Check /> Advanced Troubleshooting for Complex Issues
          </li>
          <li>
            <Icon.Check /> Secure and Safe Repairs at Any Hour
          </li>
          <li>
            <Icon.Check /> Dedicated Support for Critical Infrastructure
          </li>
        </ul>
      </div>
    </div>
  </div>
</TabPanel>

          </Tabs>
        </div>

        {/* Shape Images */}
        {/* <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div> */}



      </div>
    </>
  );
};

export default PricingStyleFour;
