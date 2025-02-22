'use client'

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import CallUsNowButton from '@/components/Layout/CallUsNowButton';
import ElectricianVanSmartHomeImage from '@/components/ITStartup/ElectricianVanSmartHomeImage';
import ImageElectricianWorkingOnWiring from '@/components/Services/ImageElectricianWorkingOnWiring';


const LightingInstallation = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table pt-80">
          <div className="d-table-cell pt-80">
            <div className="container">
              <h1>Lighting Installation Services</h1>
              <p>
                OW London, Electrician, and Smart Home Engineers are here for all your lighting installation needs around your home or business. Our expert team provides comprehensive lighting services across London.
              </p>
              <CallUsNowButton/>
            </div>
          </div>
        </div>
      </div>
      <div className="services-details-area ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Professional Lighting Installation</h3>
                <p>
                  We offer complete interior and exterior lighting installations, including emergency and security lights for homeowners and commercial businesses in London.
                </p>
                <h4>Why Choose Our Lighting Services?</h4>
                <ul>
                  <li>Highly skilled and dedicated electricians</li>
                  <li>NICEIC Approved Installer standards</li>
                  <li>Part P safety qualified</li>
                  <li>Exceptional customer service</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 services-details-image services-details-image-container">
              <ElectricianVanSmartHomeImage className='service-image-books'/>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              <ImageElectricianWorkingOnWiring/>
            </div>
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Our Lighting Installation Services</h3>
                <h4>Unobtrusive but Effective Exterior Lighting</h4>
                <p>
                  We install a wide range of exterior lighting that provides reliable illumination for the external areas of your property. All exterior lighting is weatherproofed and fully operationally and safety tested.
                </p>
                <h4>Energy Efficient Interior Lighting</h4>
                <p>
                  Our environmentally friendly and energy-conscious solutions help reduce costs and consumption. We use the latest technology and intelligent design to ensure energy and cost efficiency at the highest quality standards.
                </p>
                <h4>Comprehensive Security Lighting</h4>
                <p>
                  Professionally fitted security lighting provides additional protection for your home or business. We design and install systems with strong coverage and effective, energy-saving motion sensor lights.
                </p>
                <h4>Emergency Lighting Installation</h4>
                <p>
                  Essential for business premises, our emergency lighting systems ensure light is available during power cuts or emergencies like fires. We ensure complete and professional installation for safety and compliance.
                </p>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What types of lighting installation do you offer?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We offer interior, exterior, security, and emergency lighting installations tailored to your needs.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Are your electricians certified?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, our electricians are NICEIC Approved and Part P safety qualified, ensuring all work is up to the latest safety standards.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Do you offer energy-efficient lighting solutions?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, we specialize in energy-efficient lighting solutions that help reduce costs and energy consumption while maintaining high-quality standards.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Can you install emergency lighting for my business?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Absolutely. We provide professional installation of emergency lighting systems to ensure safety during power cuts or emergencies.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                <p>
                  For all your lighting installation needs, call us on +44 7307 565 444 or email at info@owresearch.netlify.app. We are always happy to assist with your projects and electrical problems.
                </p>

              </div>
            </div>
          </div>
          <p className='text-center pt-4'>
                  Learn more about our <a href="/contact">Contact</a>, <a href="/courses">Pricing</a>, and <a href="/about/gallery">Reviews</a>.
                </p>
        </div>
      </div>
    </>
  );
};

export default LightingInstallation;
