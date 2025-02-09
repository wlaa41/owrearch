"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import blogImg1 from "/public/images/understanding-regulation-421-7-afdd-requirements.webp";
import blogImg2 from "/public/images/table-55-2-minimum-cross-sectional-area-copper-conductors.webp";
import blogImg3 from "/public/images/rcd-prohibition-in-tn-c-systems.webp";
import blogImg4 from "/public/images/required-height-for-socket-outlets-near-water-bs-7671.webp";
import blogImg5 from "/public/images/importance-of-bs-7671-understanding-the-wiring-regulations.webp";
import blogImg6 from "/public/images/understanding-required-degrees-of-protection-for-electrical-equipment-in-bathroom-zones-regulation-701-512-2.webp";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>The News from Our Blog</h2>
            <div className="bar"></div>
            <p>
            Stay updated with the latest insights and articles on robotics, AI, programming, autonomous systems, cutting-edge technology, and tech regulations.
            </p>
          </div>

          <div className="row justify-content-center">

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/posts/importance-of-bs-7671-understanding-the-wiring-regulations/">
                    <Image
                      src={blogImg5}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> September 27, 2025
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/posts/importance-of-bs-7671-understanding-the-wiring-regulations/">
                      The Importance of BS 7671 Understanding the Wiring Regulations
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      OW London Electrician and Home Automation Engineers Team
                    </Link>
                  </span>

                  <p>
                    BS 7671, also known as the IET Wiring Regulations, is the national standard in the United Kingdom for electrical installation and the safety of electrical wiring in buildings. Compliance with BS 7671 is essential for electrical professionals to ensure the safety and protection of both people and property.
                  </p>

                  <Link
                    href="/posts/importance-of-bs-7671-understanding-the-wiring-regulations/"
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/posts/table-55-2-minimum-cross-sectional-area-copper-conductors/">
                    <Image
                      src={blogImg2}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> July 4, 2024
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/posts/table-55-2-minimum-cross-sectional-area-copper-conductors/">
                      TABLE 55.2 - Minimum Cross-Sectional Area of Copper Conductors in mm²
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      OW London Electrician and Home Automation Engineers Team
                    </Link>
                  </span>

                  <p>
                    Understanding the minimum cross-sectional area requirements for screened multi-core copper conductors used for data transfer as per Regulation 557.4.1.
                  </p>

                  <Link
                    href="/posts/table-55-2-minimum-cross-sectional-area-copper-conductors/"
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/posts/understanding-required-degrees-of-protection-for-electrical-equipment-in-bathroom-zones-regulation-701-512-2/">
                    <Image
                      src={blogImg6}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> August 27, 2024
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/posts/understanding-required-degrees-of-protection-for-electrical-equipment-in-bathroom-zones-regulation-701-512-2/">
                      Understanding IP Rating Required Degrees of Protection for Electrical Equipment in Bathroom Zones
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      OW London Electrician and Home Automation Engineers Team
                    </Link>
                  </span>

                  <p>
                    According to BS 7671, Regulation 701.512.2 specifies the degrees of protection required for electrical equipment in different bathroom zones to ensure safety against water ingress.
                  </p>

                  <Link
                    href="/posts/understanding-required-degrees-of-protection-for-electrical-equipment-in-bathroom-zones-regulation-701-512-2/"
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/posts/rcd-prohibition-in-tn-c-systems/">
                    <Image
                      src={blogImg3}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> July 4, 2024
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/posts/rcd-prohibition-in-tn-c-systems/">
                      RCD Prohibition in TN-C Systems
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      OW London Electrician and Home Automation Engineers Team
                    </Link>
                  </span>

                  <p>
                    An RCD shall NOT be used in a TN-C system. This regulation is detailed in BS 7671:2018, Regulation 531.3.5.2, P158, and is crucial for maintaining system safety and preventing nuisance tripping.
                  </p>

                  <Link
                    href="/posts/rcd-prohibition-in-tn-c-systems/"
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/posts/required-height-for-socket-outlets-near-water-bs-7671/">
                    <Image
                      src={blogImg4}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> July 12, 2024
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/posts/required-height-for-socket-outlets-near-water-bs-7671/">
                      What is the Required Height for Socket-Outlets Near Water According to BS 7671?
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      OW London Electrician and Home Automation Engineers Team
                    </Link>
                  </span>

                  <p>
                    Socket-outlets must be placed at a height not less than 1 m above the highest water level. For floating pontoons or walkways, the height may be reduced to 300 mm provided additional protective measures are taken. (709.553.1.13)
                  </p>

                  <Link
                    href="/posts/required-height-for-socket-outlets-near-water-bs-7671/"
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/posts/understanding-regulation-421-7-afdd-requirements/">
                    <Image
                      src={blogImg1}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> July 5, 2024
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/posts/understanding-regulation-421-7-afdd-requirements/">
                      Reg. 421.7: New Mandatory use of AFDDs in Certain Locations
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      OW London Electrician and Home Automation Engineers Team
                    </Link>
                  </span>

                  <p>
                    Regulation 421.7 of BS 7671 outlines the requirements for the installation of Arc Fault Detection Devices (AFDDs) in specific locations. This regulation is crucial for ensuring electrical safety and minimizing fire risks in particular areas.
                  </p>

                  <Link
                    href="/posts/understanding-regulation-421-7-afdd-requirements/"
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
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

export default BlogPost;
