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
              <h2>Flexible Learning Packages</h2>
              <div className="bar"></div>
              <p>
                Choose a learning plan that fits your schedule and goals. Whether you&apos;re looking for self-paced learning or expert mentorship, we have the right package for you.
              </p>
            </div>
  
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Self-Paced Learning</h3>
                  </div>
  
                  <div className="price">
                    <span>£580 <span>/ Full Access</span></span>
                  </div>
  
                  <div className="pricing-features">
                    <ul>
                      <li className="active"> Lifetime Access to Course Content</li>
                      <li className="active"> Hands-on Projects & Exercises</li>
                      <li className="active"> Learn at Your Own Pace</li>
                      <li className="active"> Downloadable Study Materials</li>
                      <li className="active"> Certification Upon Completion</li>
                    </ul>
                  </div>
  
                  <div className="pricing-footer">
                    <Link href="#" className="btn btn-primary">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Instructor-Guided Program</h3>
                  </div>
  
                  <div className="price">
                    <span>£780</span>
                  </div>
  
                  <div className="pricing-features">
                    <ul>
                      <li className="active"> Weekly Live Sessions with Experts</li>
                      <li className="active"> Personalized Feedback on Projects</li>
                      <li className="active"> Access to Private Student Community</li>
                      <li className="active"> One-on-One Mentorship Available</li>
                      <li className="active"> Career Support & Interview Prep</li>
                    </ul>
                  </div>
  
                  <div className="pricing-footer">
                    <Link href="#" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Complete Mastery Bundle</h3>
                  </div>
  
                  <div className="price">
                    <span>From £3,500</span>
                  </div>
  
                  <div className="pricing-features">
                    <ul>
                      <li className="active"> Full Access to All Courses</li>
                      <li className="active"> Advanced Specialization Tracks</li>
                      <li className="active"> Dedicated One-on-One Coaching</li>
                      <li className="active"> Internship & Job Placement Assistance</li>
                      <li className="active"> Industry-Recognized Certification</li>
                    </ul>
                  </div>
  
                  <div className="pricing-footer">
                    <Link href="#" className="btn btn-primary">
                      Join Now
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
