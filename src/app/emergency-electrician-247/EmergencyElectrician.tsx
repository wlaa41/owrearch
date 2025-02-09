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
import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour';
import Image from 'next/image';
import ow_electrician from '/public/images/ow-electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-rewiring.webp'


const EmergencyElectrician = () => {
  return (
    <>
      <div className="page-title-area ">
        <div className="d-table pt-80">
          <div className="d-table-cell">
            <div className="container section-title">
              <h1>Emergency Electrician Services in London</h1>
              <div className="bar "></div>

              <p>
                OW London, Electrician, and Smart Home Engineers provide 24-hour emergency electrical services across North, West, East, and South London. Call us now on <a href="tel:+447307565444">+447307565444</a> for immediate assistance.
              </p>
              <CallUsNowButton />
            </div>
          </div>
        </div>
      </div>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>24-Hour Electrician Central London</h3>
                <p>
                  Facing an electrical problem in the middle of the night or early morning? We understand the urgency and are here to help. Contact us for reliable, professional electrical services anytime.
                </p>
                <h3>Emergency Electrician East London</h3>
                <p>
                  Our electricians are available for maintenance and repairs 24/7 throughout London. We cater to commercial, domestic, and industrial customers, maintaining low fees for all our services.
                </p>
                <h3>Emergency Electrician North London</h3>
                <p>
                  We are NICEIC approved electricians providing complete maintenance and emergency call-out services to meet all your business needs. We are available 24/7 to repair your electrical faults efficiently.
                </p>
              </div>
            </div>
            <div className="col-lg-6 services-details-image services-details-image-container">
              <ElectricianVanSmartHomeImage className='service-image-books' />
            </div>

          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              {/* <ImageElectricianWorkingOnWiring /> */}
              <Image src={ow_electrician}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="col-lg-6 services-details">
              <div className="services-details-desc ">
                <h3>24-Hour Emergency Electrician West London</h3>

                <p>
                  We provide prompt services regardless of your location. Electrical repair can be complex and dangerous, so always call a professional. We are here to ensure your safety and provide expert solutions.
                </p>
                <p>
                  Call us for immediate assistance. We are serious about our emergency service and have a highly efficient team ready to address your needs. Our affordable rates ensure you get the best value.
                </p>
                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What emergency services do you offer?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We offer lamp replacement, routine safety electrical inspections, PAT testing, R.C.D. testing, and routine servicing of emergency lighting and fire alarm systems.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Are you available 24/7?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, our emergency electricians are available 24/7 to ensure minimal disruption to your business or home.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How much do your emergency services cost?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Our charges are £120 per hour during business hours and £160 per hour for weekends and out-of-business hours. Emergency call-out in the city is £140.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Do you provide certification for your work?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, we issue all necessary certifications upon completion of work and notify Building Control as part of our service.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>



          <p className="text-center pt-3">
            For all your emergency electrical needs, call us on <a href="tel:00447307565444">07307 565 444</a> or email us at <a href="mailto:info@owelectric.co.uk">info@owelectric.co.uk</a>. We are always ready to assist with your projects and electrical problems.
          </p>
          <PricingStyleFour />
          <div className="text-center pt-3" >
            <a href="/contact">Contact Us</a> | <a href="/pricing">Pricing</a> | <a href="/about/gallery">Reviews</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyElectrician;
