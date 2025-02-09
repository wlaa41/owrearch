"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

const PricingElectricalServices = () => {
  return (
    <>
      <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Competitive Electrical Services Pricing</h2>
            <div className="bar"></div>
            <p>
              Discover our competitively priced, expert electrical solutions tailored for everything from major rewirings to precise consumer unit upgrades, delivered with reliability and precision across London.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>All-Day Electrical Support</h3>
                </div>

                <div className="price">
                  <span>£580 <span>/ Full Day</span></span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className='active' > Booked in Advance for Entire Day</li>
                    <li className='active' > Perfect for Extensive Electrical Projects</li>
                    <li className='active' > Comprehensive Service from Certified Electricians</li>
                    <li className='active' > Economical for Multiple Installations or Fixes</li>
                    <li className='active' > Guaranteed High-Quality Workmanship</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary">
                    Schedule Today
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Consumer Unit Enhancements</h3>
                </div>

                <div className="price">
                  <span>£780</span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className='active' > Upgrade to 8 Circuits with 2 RCDs and SPD</li>
                    <li className='active' > Elevates Electrical Safety Standards</li>
                    <li className='active' > Utilizes Modern, Efficient Technologies</li>
                    <li className='active' > Professional Installation by Certified Technicians</li>
                    <li className='active' > Thorough Inspection Included</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary">
                    Upgrade Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Complete Property Rewiring</h3>
                </div>

                <div className="price">
                  <span>From £3,500</span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className='active' > Total Overhaul of Electrical Systems</li>
                    <li className='active' > Customized to Match Property Specifications</li>
                    <li className='active' > Significantly Increases Property Value</li>
                    <li className='active' > Adheres to the Latest Safety Regulations</li>
                    <li className='active' > Ensures Long-lasting Electrical Reliability</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingElectricalServices;
