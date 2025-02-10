"use client";

import React from 'react';
import { FaTools, FaBuilding, FaIndustry, FaBatteryQuarter, FaBell, FaHome, FaLightbulb, FaClipboardCheck, FaFire, FaTint } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

const ServicesList: React.FC = () => {
  const services = [
    { link: "/services/domestic-electrician-services-london", icon: FaHome, label: "Domestic Electrician Services" },
    { link: "/services/commercial-electrician-contractors-london", icon: FaBuilding, label: "Commercial Electrician Contractors" },
    { link: "/services/industrial-electrician-services-london", icon: FaIndustry, label: "Industrial Electrician Services" },
    { link: "/services/home-automation-av-knx-control4", icon: FaHome, label: "Home Automation" },
    { link: "/services/pat-testing-electrical-safety-london", icon: FaBatteryQuarter, label: "PAT Testing and Electrical Safety" },
    { link: "/services/alarm-installation-systems-london", icon: FaBell, label: "Alarm Installation Systems" },
    { link: "/services/home-rewiring-electricians-london", icon: FaTools, label: "Home Rewiring Electricians" },
    { link: "/services/lighting-installation-electricians-london", icon: FaLightbulb, label: "Lighting Installation Electricians" },
    { link: "/services/eicr-electrical-inspection-london", icon: FaClipboardCheck, label: "EICR Electrical Inspection" },
    { link: "/services/water-heater-repair-electricians-london", icon: FaTint, label: "Water Heater Repair Electricians" }
  ];

  return (
    <div className="">

      <Head>
        <title>Our Services - OW London Electricians</title>
        <meta name="description" content="Explore our comprehensive electrical services to find the right solution for your needs. From domestic to industrial services, we cover all aspects of electrical work." />
        <meta name="keywords" content="electrician services, domestic electrician, commercial contractors, industrial electric services, London electricians" />
        <meta property="og:title" content="Our Services - OW London Electricians" />
        <meta property="og:description" content="Professional electrical services for every need. Check our wide range of services from domestic to industrial solutions." />
        <meta property="og:image" content="/public/favicon/android-chrome-512x512.png" /> 
        <meta property="og:url" content="https://www.owresearch.netlify.app/services" />
      </Head>
      <div className="container" itemScope itemType="http://schema.org/Service">
        <h2> Want to see more services!</h2>
        <meta itemProp="serviceType" content="Electrician Services" />
        <meta itemProp="provider" content="OW London, Electricians" />
        <meta itemProp="areaServed" content="London" />
        <meta itemProp="url" content="https://www.owresearch.netlify.app/services" />
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 services-content" id="services-list">
            {services.map((service, index) => (
              <div className="card-container" key={index} itemScope itemType="http://schema.org/Place">
                <meta itemProp="name" content={service.label} />
                <div className="box">
                  <service.icon className='svg-service' />
                  <Link href={service.link} legacyBehavior>
                    <a itemProp="url" aria-label={service.label}>{service.label}</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .services-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          {/* gap: 20px; */}
          padding: 20px;
        }

        #services-list.services-content{
            padding: 5px !important;
            &::after{
                content: none !important;
            }
        }
        .card-container {
          background: #f4f4f4;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          {/* padding: 15px; */}
          min-width: 318px;
          {/* display: flex; */}

          
        }
        .box {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.41);

          {/* align-items: center; */}
          gap: 10px;
        }
        a {
          {/* color: #0056b3; */}
          text-decoration: none;
        }
        a:hover {
          color: black;
          {/* text-decoration: underline; */}
        }

        svg {
          display: block;

          font-size: 24px; /* Adjust icon size */
        }
      `}</style>
    </div>
  );
};

export default ServicesList;
