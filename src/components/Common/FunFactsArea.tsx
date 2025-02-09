"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import map from "/public/images/map.png";

const FunFactsArea = () => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Our Commitment to Excellence</h2>
            <div className="bar"></div>
            <p>
              At OW London Electrician, Smart Home Engineers, we strive to exceed our users&apos; expectations by providing top-notch services in electrical engineering and smart home technology.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>280+</h3>
                <p>Projects Completed</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>200</h3>
                <p>Positive Reviews</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>10+</h3>
                <p>Expert Engineers</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>70+</h3>
                <p>Partners</p>
              </div>
            </div>
          </div>

          <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h3>Have any questions about our services?</h3>
            <p>Don&apos;t hesitate to get in touch with us</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <Image src={map} alt="map showing service areas of OW London Electrician" width={910} height={443} />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default FunFactsArea;
