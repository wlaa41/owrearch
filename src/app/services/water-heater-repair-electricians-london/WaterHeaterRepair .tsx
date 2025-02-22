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


const WaterHeaterRepair = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table pt-80">
          <div className="d-table-cell">
            <div className="container">
              <h1>Water Heater Repair Services</h1>
              <p>
                OW London, Electrician, and Smart Home Engineers are here for all your water heater repair needs around your home or business. Our expert team provides comprehensive water heater services across London.
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
                <h3>Professional Water Heater Repair</h3>
                <p>
                  At OW London, we offer a complete water heater repair service. Whether you need installation, maintenance, or repair, we are here to discuss your needs and provide solutions.
                </p>
                <h4>Comprehensive Water Heater Services</h4>
                <ul>
                  <li>Wide selection of water heaters</li>
                  <li>Competitive installation rates</li>
                  <li>Guaranteed quality on every heater purchased</li>
                </ul>
                <p>
                  Our experienced team ensures high standards of customer satisfaction, giving you peace of mind at all times.
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
                <h3>Benefits of Hiring OW London for Water Heater Repair</h3>
                <h4>Reliable Service</h4>
                <p>
                  Sometimes water heaters take longer to heat or make unwanted noises. Hiring a certified professional ensures quick detection and proper repair of issues, giving you confidence in the job done.
                </p>
                <h4>Tuning-Up the Parts</h4>
                <p>
                  Our experts systematically check and adjust maintenance parts, flush the water tank, and clean electrical connections. This enhances the water heater’s efficiency and lifespan, reducing power bills and maintenance costs.
                </p>
                <h4>Expert Installation of New Units</h4>
                <p>
                  When installing a new water heater, it’s crucial to use an expert. Proper installation ensures the longevity of the heater and maintains the warranty. Our professionals provide reliable service and maintenance tips.
                </p>
                <h4>Safety First</h4>
                <p>
                  Water heaters operate at high voltages and can pose risks like electrical shocks, carbon monoxide leaks, and fire hazards. Our experts ensure safe maintenance and installation, protecting your family and property.
                </p>
 
              </div>
            </div>
            <div className='text-center pt-4'>
            <h4>Protect Your Warranty</h4>
                <p>
                  Many warranties are void if installation is not done by a licensed professional. Ensure your water heater’s warranty remains valid by hiring our certified technicians.
                </p>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What types of water heaters do you repair?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We repair all types of water heaters, including tankless, electric, and gas water heaters. Our experts are equipped to handle any issue.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How often should a water heater be serviced?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          It’s recommended to service your water heater annually to ensure efficient operation and to prevent unexpected breakdowns.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What are the signs that my water heater needs repair?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Signs include inconsistent water temperature, unusual noises, slow heating, and leaks. If you notice any of these, it’s time to call a professional.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Can I install a new water heater myself?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          It’s not recommended. Professional installation ensures safety, compliance with regulations, and validates the warranty.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                <p>
                  For all your water heater repair needs, call us on +44 7307 565 444 or email at info@owresearch.netlify.app. We are always happy to assist with your projects and electrical problems.
                </p>
            </div>
            <p className='text-center pt-4'>
                  Learn more about our <a href="/contact">Contact</a>, <a href="/courses">Pricing</a>, and <a href="/about/gallery">Reviews</a>.
                </p>
                <div className='section-title'><div className="bar"></div></div>

          </div>
        </div>
      </div>
    </>
  );
};

export default WaterHeaterRepair;