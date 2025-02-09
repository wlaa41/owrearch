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


const EICR = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table ">
          <div className="d-table-cell pt-80">
            <div className="container">
              <h1>EICR (Electrical Installation Condition Report) Services</h1>
              <p>
                OW London, Electrician, and Smart Home Engineers are here for all your EICR requirements around your home or business. Our expert team provides comprehensive EICR services across London.
              </p>
              <CallUsNowButton/>
            </div>
          </div>
        </div>
      </div>
      <div className="services-details-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Professional EICR Services</h3>
                <p>
                  An Electrical Installation Condition Report (EICR) is an inspection of your existing electrical installation. It identifies any deficiencies against national safety standards and ensures the safety and compliance of your electrical systems.
                </p>
                <h4>What is an EICR?</h4>
                <p>
                  An EICR reveals if any of your electrical circuits or equipment are overloaded, identifies potential electrical shock risks and fire hazards, highlights any defective DIY electrical work, and checks for a lack of earthing or bonding.
                </p>
                <h4>Why is an EICR Important?</h4>
                <ul>
                  <li>Ensures the safety of users</li>
                  <li>Maintains the condition of the installation</li>
                  <li>Identifies deterioration due to age and usage</li>
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
                <h3>When is a Periodic Inspection Needed?</h3>
                <ul>
                  <li>Every 10 years for domestic installations</li>
                  <li>Every 5 years for commercial installations</li>
                  <li>Every 3 years for caravans</li>
                  <li>Every year for swimming pools</li>
                  <li>Before letting a property</li>
                  <li>Prior to selling or buying a previously occupied property</li>
                </ul>
                <h4>Who Should Undertake an EICR?</h4>
                <p>
                  An EICR should be carried out by a competent and qualified electrician who can ensure all checks and inspections are thorough and up to the latest safety standards.
                </p>
                <h4>What Happens During an EICR?</h4>
                <p>
                  The electrician will check the electrical installation against BSi7671 – Requirements for Electrical Installations (IEE Wiring Regulations). This includes assessing earthing and bonding adequacy, the condition of wiring and equipment, and the presence of residual current devices.
                </p>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What does an EICR involve?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          An EICR involves a thorough inspection of your electrical installation, checking for overloads, shock risks, fire hazards, defective work, and ensuring proper earthing and bonding.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How often should an EICR be performed?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          It should be performed every 10 years for domestic properties, every 5 years for commercial properties, every 3 years for caravans, and every year for swimming pools.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What are the benefits of an EICR?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Benefits include ensuring safety, maintaining the condition of the electrical installation, and identifying potential hazards and deteriorations before they become serious issues.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What should I do if my EICR identifies issues?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        For all your EICR and electrical services needs, call us on <a href="tel:+447307565444">+44 7307 565 444</a> or email at <a href="mailto:info@owelectric.co.uk">info@owelectric.co.uk</a>. We are always happy to assist with your projects and electrical problems.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                <p>
                  For all your EICR and electrical services needs, call us on +44 7307 565 444 or email at info@owelectric.co.uk. We are always happy to assist with your projects and electrical problems.
                </p>
                
                <p>
                  Learn more about our <a href="/contact">Contact</a>, <a href="/pricing">Pricing</a>, and <a href="/about/gallery">Reviews</a>.
                </p>
              </div>
            </div>
            <p className='text-center pt-4'>
                  Learn more about our <a href="/contact">Contact</a>, <a href="/pricing">Pricing</a>, and <a href="/about/gallery">Reviews</a>.
                </p>
                <div className='section-title'><div className="bar"></div></div>

          </div>
        </div>
      </div>
    </>
  );
};

export default EICR;
