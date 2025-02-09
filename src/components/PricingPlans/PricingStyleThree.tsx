"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Shape Images
import shape1 from "/public/images/agency-image/agency-shape1.png"; 

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pb-50">
        <div className="container">
          <div className="section-title st-fs-28">
            <h2>Our Hours Rate</h2>
            <div className="bar"></div>
            <p>
              Transparent pricing for expert electrical services in London, available around the clock to meet your home and business needs.
            </p>
          </div>
  
          <Tabs className="pricing-tab bg-color">
            <TabList>
              <Tab>Standard Hourly Rates</Tab>
              <Tab>Emergency</Tab>
              <Tab>Weekend Rates</Tab>

            </TabList>
  
            <TabPanel>
              <div className="row justify-content-center">
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Pre-Booked Electrician</h3>
                      <p>Efficient and reliable service scheduled at your convenience.</p>
                    </div>
  
                    <div className="price">
                      £90 <span>/ hr</span>
                    </div>
  
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
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
  
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Out of Business Hours</h3>
                      <p>Evening service from 6pm to 12pm</p>
                    </div>
  
                    <div className="price">
                      £130 <span>/ hr</span>
                    </div>
  
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
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
  
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Central & West London</h3>
                      <p>Premium services in high-demand areas.</p>
                    </div>
  
                    <div className="price">
                      £160 <span>/ hr</span>
                    </div>
  
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
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
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Emergency Electrician</h3>
                      <p>Immediate response to electrical emergencies during regular hours.</p>
                    </div>
  
                    <div className="price">
                      £140 <span>/ hr</span>
                    </div>
  
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
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
  
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Out of Hours Emergency</h3>
                      <p>Evening & Late Night (6pm-12am)</p>
                    </div>
  
                    <div className="price">
                      £180 <span>/ hr</span>
                    </div>
  
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
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
  
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Late Night Emergency</h3>
                      <p>Service available for overnight emergencies from midnight to early morning.(12am-5am)</p>
                    </div>
  
                    <div className="price">
                      £240 <span>/ hr</span>
                    </div>
  
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
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

            <TabPanel>
              <div className="row justify-content-center">
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Weekend Standard Rate</h3>
                      <p>Available during regular hours on weekends.</p>
                    </div>
                    <div className="price">£180 <span>/ hr</span></div>
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary">
                        Book Now
                      </Link>
                    </div>
                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Full Service on Weekends
                      </li>
                      <li>
                        <Icon.Check /> No Extra Daytime Charges
                      </li>
                      <li>
                        <Icon.Check /> Quick Service
                      </li>
                      <li>
                        <Icon.Check /> Expert Technicians
                      </li>
                      <li>
                        <Icon.Check /> Safety Commitment
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Weekend After-Hours Rate</h3>
                      <p>Service available after 6pm to 12pm on weekends.</p>
                    </div>
                    <div className="price">£220 <span>/ hr</span></div>
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary">
                        Book Now
                      </Link>
                    </div>
                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> After-Hours Support
                      </li>
                      <li>
                        <Icon.Check /> Fast Response
                      </li>
                      <li>
                        <Icon.Check /> Solutions for Complex Issues
                      </li>
                      <li>
                        <Icon.Check /> Advanced Equipment
                      </li>
                      <li>
                        <Icon.Check /> Skilled Technicians
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

          </Tabs>
          <div 
          className="col-lg-12 col-md-12 col-sm-12"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="note-section">
            <h5>Note:</h5>
            <li className="color-gray long-info">If a job is completed within the hour, we can help out with other jobs until the hour arrives at no extra cost.</li>
            <li className="color-gray long-info">The materials are also paid individually and we will only buy from certified, genuine sources.</li>
            <li className="color-gray long-info">Our electricians do have a lot of materials; however, we may occasionally need to source certain materials and come back at a later date.</li>
            <li className="color-gray long-info">A 20% handling charge is on all sourced materials. However, the businesses we buy from ensure we get the best discounts, which still makes us highly competitive.</li>
          </div>
        </div>
        </div>
      </div>
    </>
  );
  
};

export default PricingStyleThree;
