"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link';

import aboutImg from "/public/images/about-one.png";
import WillJamesCEOImage from "../WillJamesCEOImage";

const AboutUsContent1 = () => {
  return (
    <>
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                {/* <Image
                  src={aboutImg}
                  alt="image"
                  width={685}
                  height={494}
                /> */}
                <WillJamesCEOImage className='whyUs-CEO-image' />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>Honest, certified, and Skilled Elcectrician</h2>
                  <div className="bar"></div>
                  <p>
                    OW Electric is your go-to provider for top-rated, certified electrical services in London. We specialize in everything from emergency electrical repairs to smart home installations, ensuring the highest quality of service every time.
                  </p>
                </div>

                <p>
                  Our team is dedicated to offering transparent pricing and unparalleled expertise. With no call-out fees for site visits and absolutely no hidden charges, you can trust us to deliver top-quality service whether it’s for your home or business.
                </p>

                <p>
                  At OW Electric, we pride ourselves on our reliability and efficiency. We cover a wide range of electrical services, including routine maintenance, comprehensive safety checks, and full-scale installations. Our commitment to using high-quality materials ensures long-lasting and safe electrical solutions.
                </p>

                <p>
                  With our extensive coverage across Greater London, we are always ready to assist you with any electrical needs. Trust OW Electric for professional and affordable electrical services, ensuring safety, compliance, and customer satisfaction at every step.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Founded with a mission to provide reliable and high-quality electrical services, OW Electric has grown to become a trusted name in London. Our team of certified electricians brings years of experience and a passion for excellence to every job.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to deliver top-notch electrical services that prioritize safety, efficiency, and customer satisfaction. We strive to stay ahead of industry standards, ensuring our clients receive the best possible solutions for their electrical needs.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    We are a team of dedicated professionals committed to providing exceptional electrical services. From emergency repairs to smart home installations, OW Electric is here to meet all your electrical needs with expertise and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-inner-area mt-5">
            <div className="section-title text-center">
              <h2>Why Choose Us</h2>
              <div className="bar"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We are highly trained</h3>
                  <p>
                    Our electricians are highly skilled, trained, and experienced, providing professional services with every visit.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We provide upfront prices</h3>
                  <p>
                    We offer upfront prices, allowing you to approve the budget before starting any work, ensuring there are no surprises.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We handle emergencies promptly</h3>
                  <p>
                    We reach your location quickly to diagnose and solve emergency issues, often within an hour of arrival.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We accept various payment methods</h3>
                  <p>
                    We accept all major credit and debit cards, bank transfers, and cash, ensuring convenient payment options for you.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We are available 24/7</h3>
                  <p>
                    We understand emergencies can happen anytime, which is why we are available round the clock, including holidays and weekends.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We are punctual</h3>
                  <p>
                    We value your time and ensure that we arrive on time so you can get back to your day without unnecessary delays.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We clean up after work</h3>
                  <p>
                    We respect your home and clean up thoroughly after completing our work, leaving your space as tidy as we found it.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>No job is too big or small</h3>
                  <p>
                    From minor repairs to major installations, we handle all types of electrical jobs with the same level of professionalism and expertise.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>We offer the best</h3>
                  <p>
                    With years of experience, we provide top-quality electrical services, ensuring your satisfaction and safety at all times.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Voted the best electricians</h3>
                  <p>
                    Our clients consistently vote us as the best electricians in the region, thanks to our commitment to excellence and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-inner-area mt-5">
            <div className="section-title text-center">
              <h2>Frequently Asked Questions</h2>
              <div className="bar"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="faq-item">
                  <h4>Why should I choose OW Electric?</h4>
                  <p>
                    OW Electric offers certified, high-quality electrical services in London, with transparent pricing, expert technicians, and a commitment to customer satisfaction. We are available 24/7 for all your electrical needs.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>What types of services do you provide?</h4>
                  <p>
                    We provide a wide range of services including emergency repairs, routine maintenance, smart home installations, full rewiring, consumer unit upgrades, and much more. For more details, check our <Link href="/pricing">pricing page</Link>.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Are your electricians certified?</h4>
                  <p>
                    Yes, all our electricians are fully certified and trained to handle any electrical job safely and efficiently.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Do you offer emergency services?</h4>
                  <p>
                    Yes, we offer 24/7 emergency electrical services to address any urgent issues promptly and effectively.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>How can I get a quote?</h4>
                  <p>
                    You can call us directly at our office or mobile numbers, or visit our website to request a quote. We provide transparent and upfront pricing for all our services.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>What areas do you cover?</h4>
                  <p>
                    We provide comprehensive electrical services across Greater London, ensuring all areas receive our top-notch services.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUsContent1;