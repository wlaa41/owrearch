"use client";


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

const PATTesting = () => {
  return (
    <>
      <div className="page-title-area ">
        <div className="d-table pt-80">
          <div className="d-table-cell ">
            <div className="container">
              <h1>PAT Testing Services</h1>
              <div className='section-title'><div className="bar"></div></div>
              <p>
                OW London, Electrician, and Smart Home Engineers provide comprehensive PAT Testing services for your home or business across London. Our skilled team ensures your electrical appliances are safe and compliant with all Health & Safety legislation.
              </p>
              <CallUsNowButton/>
            </div>
          </div>
        </div>
      </div>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Professional PAT Testing</h3>
                <p>
                  PAT (Portable Appliance Testing) is essential for any business, large or small, to ensure the safety of electrical equipment. Our services are tailored to meet the needs of various establishments including schools, clinics, restaurants, and offices.
                </p>
                <p>
                  Our team provides a complete package of tests and results to help you comply with all relevant Health & Safety legislation. We offer competitive pricing and can schedule tests during evenings or weekends for your convenience.
                </p>
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
                <h3>Benefits of PAT Testing</h3>
                <p>
                  PAT Testing ensures the safety of your electrical appliances by detecting and addressing potential faults. This process not only helps prevent accidents but also reduces the risk of electrical fires and protects your insurance coverage.
                </p>
                <p>
                  Our experienced electricians will conduct thorough inspections and testing to ensure compliance with legal requirements such as the Health & Safety at Work Act and the Electricity at Work Regulations.
                </p>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Who needs PAT Testing?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Any business that deals with the public needs PAT Testing. This includes schools, libraries, clinics, restaurants, bars, hospitals, public offices, and individual traders like landlords and photographers.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How much does PAT Testing cost?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Our rates are very competitive, and we can test your equipment during evenings or weekends to suit your schedule. We cater to a wide range of clients including schools, hair salons, office blocks, landlords, workshops, and restaurants.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What are the legal requirements for PAT Testing?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          PAT Testing helps comply with several legal requirements such as the Health & Safety at Work Act, the Electricity at Work Regulations, and the Provisions & Use of Work Equipment Regulations (PUWER).
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How does PAT Testing benefit my business?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          PAT Testing reduces the risk of electrical accidents and fires, ensuring the safety of your employees and customers. It also helps in maintaining your insurance coverage by complying with Health & Safety requirements.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>

          <p>
            For all your PAT Testing needs, call us on +44 7307 565 444 or email at info@owresearch.netlify.app. We are always happy to assist with your projects and electrical problems.
          </p>
          <p>
            <a href="/contact">Contact us</a> for more information. Check our <a href="/pricing">pricing</a> and read our <a href="/about/gallery">reviews</a> to see what our clients have to say.
          </p>
        </div>
      </div>
    </>
  );
};

export default PATTesting;
