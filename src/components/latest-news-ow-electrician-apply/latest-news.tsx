"use client";

import React from "react";
import Link from "next/link";
import ElectricianVanSmartHomeImage from "@/components/ITStartup/ElectricianVanSmartHomeImage";
import { Globe, MapPin, UserPlus } from "react-feather";
import AreasCoveredList from "@/components/coverdArea/AreasCoveredList";

const LatestNews = () => {
  return (
    <>

      <div className="space99px"></div>
      <div className="latest-news-area ptb-80">
        <div className="container ptb-80">
          <div className="section-title ptb-80">
            <h1>Latest News: Expanding Our Fleet and Coverage Areas</h1>
            <div className="bar"></div>
            <p>
              We are excited to announce that we are expanding our fleet with new vehicles to better serve our customers. This expansion allows us to enhance our coverage areas, reaching more parts of London with our top-notch electrical and smart home services.
            </p>
          </div>

          <ElectricianVanSmartHomeImage className="center-with-radius" />

          <div className="content mt-5">
            <h3>Expanding Our Coverage to Central London</h3>
              <AreasCoveredList/>

            <h3>Our Services</h3>
            <div className="card mb-4">
              <div className="card-body">
                <MapPin size={20} />
                <p>
                  We provide a comprehensive range of electrical services including standard hourly rates, emergency call-outs, weekend services, full-day projects, and extensive testing services. Our certified electricians are equipped to handle all your electrical needs with professionalism and expertise.
                </p>
                <p>
                  For detailed pricing information, please visit our{" "}
                  <Link href="/pricing">pricing page</Link>. If you have any questions or wish to book an appointment, don&apos;t hesitate to{" "}
                  <Link href="/contact">contact us</Link>.
                </p>
              </div>
            </div>

            <h3>Welcoming New Electricians</h3>
            <div className="card mb-4">
              <div className="card-body">
                <UserPlus size={20} />
                <p>
                  As part of our expansion, we are also looking to welcome new electricians to join our team. If you are a qualified electrician looking for a dynamic and rewarding career, please visit our{" "}
                  <Link href="/latest-news-ow-electrician-apply">careers page</Link> to learn more about the opportunities available.
                </p>
              </div>
            </div>

            <h3>Contact Us</h3>
            <div className="card mb-4">
              <div className="card-body">
                <Globe size={20} />
                <p>
                  We are committed to providing top-quality service to all areas of London. Whether you are in Central London or East London, our team is ready to assist you with your electrical and smart home needs.
                </p>
                <p>
                  Reach out to us via our <Link href="/contact">contact page</Link> for any inquiries or to schedule a service.
                </p>
              </div>
            </div>

            <h3>Learn More About Electrical Regulations</h3>
            <div className="card mb-4">
              <div className="card-body">
                <Globe size={20} />
                <p>
                  Our blog is a great resource for electricians and anyone interested in learning more about electrical regulations and standards. Each post is driven by the latest BS 7671 regulations and offers practical insights and guidance.
                </p>
                <p>
                  Visit our <Link href="/blog">blog page</Link> and use the search bar to find articles related to specific regulations and topics of interest. Stay informed and ensure compliance with the most up-to-date electrical standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .space99px {
          margin-top: 99px;
        }

        .latest-news-area {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .container {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .section-title {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .section-title h1 {
          margin-bottom: 10px;
        }

        .section-title .bar {
          width: 50px;
          height: 3px;
          background: #ff6b6b;
          margin: 15px 0;
        }

        .content {
          margin-top: 5rem;
        }

        .card {
          margin-bottom: 1rem;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .card-body p {
          margin-top: 10px;
        }

        .list-group-item {
          list-style: none;
        }

        .list-group-item:before {
          content: '•';
          color: #ff6b6b;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .list-group {
          display: flex;
          flex-wrap: wrap;
        }

        .list-group-item {
          flex: 1 1 45%;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default LatestNews;
