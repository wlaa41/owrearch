"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ElectricianBlueprintSmartHomeImage from "./ElectricianBlueprintSmartHomeImage";
import ImageElectricianWorkingOnWiring from "./ImageElectricianWorkingOnWiring";
import CallUsNowButton from "../Layout/CallUsNowButton";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h1>Professional and Impartial Advice
Emergency Situations
Clean Uniform
Clean Van
Non-Stop Service (No Breaks)
House Left Clean After Work
</h1>
              <p>Our rates are ace at OW Electric—no call-out fee for site visits, and absolutely no hidden charges! While we&apos;re not the cheapest, we offer top-quality service every time!</p>
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
                <h3>Incredible Infrastructure</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>

                <p>
                  Took a galley of type and scrambled it to make a type specimen
                  book. survived not only five centuries, but also the leap into
                  electronic remaining.
                </p>
              </div>
            </div>

            <div className="col-lg-6 services-details-image services-details-image-container">
              <ElectricianBlueprintSmartHomeImage  className="service-image-books"/>

            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              <ImageElectricianWorkingOnWiring/>
              {/* <Image
                src={servicesDetailsImg2}
                alt="image"
                width={800}
                height={600}
              /> */}
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <p>
                  Took a galley of type and scrambled it to make a type specimen
                  book. survived not only five centuries, but also the leap into
                  electronic remaining. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry’s standard dummy text ever since the 1500s, when an
                  unknown printer when an unknown.
                </p>

                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Which material types can you work with?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is Smart Lock required for instant apps?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Can I have multiple activities in a single feature?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
