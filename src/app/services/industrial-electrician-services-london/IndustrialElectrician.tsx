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

const IndustrialElectrician = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table pt-80">
          <div className="d-table-cell pt-80">
            <div className="container ">
              <h1>Industrial Electrician Services</h1>
              <div className='section-title'><div className="bar"></div></div>
              <p>
                OW London, Electrician, and Smart Home Engineers offer comprehensive industrial electrical services across London. Our 2-hour emergency response for industrial facilities is available 24/7, ensuring minimal disruption to your operations.
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
                <h3>Exceptional Industrial Electrical Services</h3>
                <p>
                  Compliance with electrical laws and regulations is critical for industrial facilities. Incorrectly installed wiring or equipment not only poses a danger to employees but can also invalidate your insurance.
                </p>
                <p>
                  Our experienced industrial electrical contractors ensure safety and compliance with the latest regulations. We offer everything from minor repairs to complete electrical system design and rewire.
                </p>
                <p>
                  Whether you need electrical installation, maintenance, or emergency repairs, our qualified team is ready to help. We understand the unique needs of industrial properties and provide bespoke solutions.
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
                <h3>Reliable and Trustworthy</h3>
                <p>
                  We are a licensed company providing transparent services. Our NICEIC-approved electricians ensure compliance with safety standards and regulations. 
                </p>
                <p>
                  Our services include electrical contracting, project design, installation, maintenance, and inspection. We handle industrial plant fit-outs, manufacturing facilities, and new build industrial projects.
                </p>
                <p>
                  Call us for an initial consultation and quote. Our professional team will understand your needs and provide appropriate solutions, ensuring your business runs smoothly without electrical issues.
                </p>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What industrial electrical services do you offer?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We offer a wide range of services including electrical installation, maintenance, emergency repairs, testing and inspection, lighting design, and more.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Do you provide emergency electrical services?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, we provide 24/7 emergency electrical services with a 2-hour response time to minimize disruption to your business.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Are you compliant with safety regulations?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Absolutely. Our electricians are NICEIC-approved and ensure all work complies with the latest safety standards and regulations.
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
              </div>
            </div>
          </div>

              <p>
                For all your industrial electrical needs, call us on +44 7307 565 444 or email at info@owresearch.netlify.app. We are always happy to assist with your projects and electrical problems.
              </p>
              <p>
                <a href="/contact">Contact us</a> for more information. Check our <a href="/courses">pricing</a> and read our <a href="/about/gallery">reviews</a> to see what our clients have to say.
              </p>
        </div>
      </div>
    </>
  );
};

export default IndustrialElectrician;
