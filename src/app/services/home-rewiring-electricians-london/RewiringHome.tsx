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

const ElectricalRewiring = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table pt-80">
          <div className="d-table-cell">
            <div className="container">
              <h1>Electrical Rewiring Services</h1>
              <p>
                OW London, Electrician, and Smart Home Engineers are here for all your wiring requirements around your home or business. Our expert team provides comprehensive rewiring services across London.
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
                <h3>Professional Electrical Rewiring</h3>
                <p>
                  Hiring an electrician to rewire your property is a significant decision. Rewiring ensures safety, compliance with regulations, and enhances the value of your property.
                </p>
                <h4>Why Consider Rewiring?</h4>
                <ul>
                  <li>Safety concerns</li>
                  <li>Outdated wiring and components</li>
                  <li>Insufficient outlets and lighting points</li>
                  <li>Increase property value for sale</li>
                  <li>Renovations or refurbishments</li>
                </ul>
                <p>
                  Rewiring can be disruptive, causing dirt, noise, and temporary loss of electrical services. It’s often best to rewire before moving in or when the property is vacant.
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
                <h3>Reliable and Trustworthy Services</h3>
                <p>
                  OW London provides transparent and professional rewiring services. Our NICEIC-approved electricians ensure all work complies with the latest safety standards.
                </p>
                <h4>Designing Your Electrical System</h4>
                <ul>
                  <li>Telephone and internet points</li>
                  <li>Centralized or programmable lighting controls</li>
                  <li>Fire and burglar alarm systems</li>
                  <li>Heating and hot water controls</li>
                  <li>Strategically placed outlets and switches</li>
                  <li>Dimmer switches and automated lighting systems</li>
                  <li>Connections for TV, satellite, and network services</li>
                </ul>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What are the benefits of rewiring my property?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Rewiring ensures safety, compliance, and can increase the value of your property. It also allows you to upgrade to modern electrical systems.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Can you rewire a property while it is occupied?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, but it is more convenient and less disruptive to rewire a vacant property. We can discuss the best options for your situation.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Are your electricians certified?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Absolutely. Our electricians are NICEIC-approved and follow strict safety regulations.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Do you offer maintenance contracts?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, we offer both reactive and planned maintenance contracts to ensure your electrical systems are always in top condition.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                <p>
                  For all your electrical rewiring needs, call us on +44 7307 565 444 or email at info@owelectric.co.uk. We are always happy to assist with your projects and electrical problems.
                </p>

              </div>

            </div>
            <p className='text-center pt-4'>
                  Learn more about our <a href="/contact">Contact</a>, <a href="/pricing">Pricing</a>, and <a href="/about/gallery">Reviews</a>.
                </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricalRewiring;
