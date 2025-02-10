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
            <h2>Explore Our Courses</h2>
            <div className="bar"></div>
            <p>
              Learn cutting-edge technologies with expert-led courses in AI, Robotics, and DevOps. Gain hands-on experience and advance your career.
            </p>
          </div>

          <Tabs className="pricing-tab bg-color">
            <TabList>
              <Tab>Amazing Start</Tab>
              <Tab>Deep Academic Insights</Tab>
              <Tab>Industry-Ready Professionals</Tab>

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
                      <h3>AI & Programing Fundamentals</h3>
                      <p>Master neural networks and deep learning with TensorFlow & PyTorch.</p>
                    </div>

                    <div className="price">
                      <div className="price">£299 <span>/ course</span></div>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Book Now
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li><Icon.Check /> Hands-on projects with real-world datasets</li>
                      <li><Icon.Check /> Certificate upon completion</li>
                      <li><Icon.Check /> Access to AI mentor support</li>
                      <li><Icon.Check /> Build & deploy ML models</li>
                      <li><Icon.Check /> Self-paced learning</li>
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
                    <div className="course-header">
                      <h3>Robotic & Vision</h3>
                      <p>Explore OpenCV, CNNs, and real-time object detection techniques.</p>
                    </div>

                    <div className="price">
                      £249 <span>/ course</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Book Now
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li><Icon.Check /> Live projects on facial recognition & object detection</li>
                      <li><Icon.Check /> Python-based AI workflows</li>
                      <li><Icon.Check /> Includes dataset collection techniques</li>
                      <li><Icon.Check /> Support from AI industry experts</li>
                      <li><Icon.Check /> Access to project templates</li>
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
                      <h3>Amazing Math Simulations</h3>
                      <p>Explore dynamic visualizations of complex mathematical concepts with simulations.</p>
                    </div>
                    <div className="price">£259 <span>/ course</span></div>
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary">Enroll Now</Link>
                    </div>
                    <ul className="course-features">
                      <li><Icon.Check /> Interactive simulations of calculus & linear algebra</li>
                      <li><Icon.Check /> Real-time visualization of differential equations</li>
                      <li><Icon.Check /> Hands-on coding with Python & MATLAB</li>
                      <li><Icon.Check /> Applications in physics, finance, and engineering</li>
                      <li><Icon.Check /> Expert guidance and mentorship</li>
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
                      <h3>Mathematical Foundations for AI</h3>
                      <p>Master linear algebra, calculus, and probability for AI and machine learning.</p>
                    </div>
                    <div className="price">£299 <span>/ course</span></div>


                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Get Help Now
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li><Icon.Check /> Applied calculus and linear algebra</li>
                      <li><Icon.Check /> Probability & statistics for AI</li>
                      <li><Icon.Check /> Hands-on problem solving</li>
                      <li><Icon.Check /> Essential for robotics and ML</li>
                      <li><Icon.Check /> University-level curriculum</li>
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
                      <h3>Programming for Robotics</h3>
                      <p>Learn Python and C++ for building robotic applications.</p>
                    </div>

                    <div className="price">£319 <span>/ course</span></div>


                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Get Help Now
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li><Icon.Check /> Python & C++ for robotics</li>
                      <li><Icon.Check /> ROS framework implementation</li>
                      <li><Icon.Check /> Sensor integration & control</li>
                      <li><Icon.Check /> Hands-on projects</li>
                      <li><Icon.Check /> University-level learning</li>
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
                      <h3>AI & Machine Learning</h3>
                      <p>Explore fundamental AI concepts and machine learning algorithms.</p>
                    </div>

                    <div className="price">£349 <span>/ course</span></div>


                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Get Help Now
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li><Icon.Check /> AI research methodologies</li>
                      <li><Icon.Check /> Experimentation in ML labs</li>
                      <li><Icon.Check /> Real-world AI applications</li>
                      <li><Icon.Check /> Hands-on coding & implementation</li>
                      <li><Icon.Check /> Industry-relevant research</li>
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
                    <h3>Advanced AI Research & Lab Projects</h3>
                      <p>Engage in hands-on AI research and laboratory experimentation.</p>
                    </div>
                    <div className="price">£399 <span>/ course</span></div>
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary">
                        Book Now
                      </Link>
                    </div>
                    <ul className="pricing-features">
                    <li><Icon.Check /> AI research methodologies</li>
                      <li><Icon.Check /> Experimentation in ML labs</li>
                      <li><Icon.Check /> Real-world AI applications</li>
                      <li><Icon.Check /> Hands-on coding & implementation</li>
                      <li><Icon.Check /> Industry-relevant research</li>
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
                    <h3>Robotics Innovation & Development</h3>
                      <p>Design and build cutting-edge robotic systems.</p>
                    </div>
                    <div className="price">£429 <span>/ course</span></div>
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary">
                        Book Now
                      </Link>
                    </div>
                    <ul className="pricing-features">
                    <li><Icon.Check /> Robotics research projects</li>
                      <li><Icon.Check /> Real-world industrial applications</li>
                      <li><Icon.Check /> AI-driven robotics integration</li>
                      <li><Icon.Check /> University-level innovation</li>
                      <li><Icon.Check /> Research publication support</li>
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
                    <h3>Publishing & Research Papers</h3>
                      <p>Learn how to write and publish scientific research papers.</p>
                    </div>
                    <div className="price">£459 <span>/ course</span></div>
                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary">
                        Book Now
                      </Link>
                    </div>
                    <ul className="pricing-features">
                    <li><Icon.Check /> Academic writing techniques</li>
                      <li><Icon.Check /> Peer-reviewed journal submission</li>
                      <li><Icon.Check /> Research methodologies</li>
                      <li><Icon.Check /> Structuring a high-impact paper</li>
                      <li><Icon.Check /> Expert review & feedback</li>
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
              <li className="color-gray long-info">Courses include downloadable materials and project files.</li>
              <li className="color-gray long-info">Live support and mentorship available for premium plans.</li>
              <li className="color-gray long-info">Certifications are provided upon course completion.</li>
              <li className="color-gray long-info">Flexible payment options for all learners.</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default PricingStyleThree;
