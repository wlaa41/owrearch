"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ElectricianBlueprintSmartHomeImage from "../ElectricianBlueprintSmartHomeImage";
import ImageElectricianWorkingOnWiring from "../ImageElectricianWorkingOnWiring";
import "react-accessible-accordion/dist/fancy-example.css";
import CallUsNowButton from "@/components/Layout/CallUsNowButton";
import Head from 'next/head';

const DomesticElectrician = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which material types can you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can work with a variety of materials, including copper, aluminium, and more. Our skilled electricians ensure that all materials are handled safely and efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Is Smart Lock required for instant apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart Lock is not required for instant apps, but it can enhance security and convenience. Our electricians can help you install and configure Smart Lock systems."
        }
      },
      {
        "@type": "Question",
        "name": "Can I have multiple activities in a single feature?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can have multiple activities in a single feature. Our team can help you design and implement electrical systems that support multiple activities seamlessly."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to an emergency callout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We respond to emergency callouts within an hour in 95% of cases. Our 24-hour emergency service ensures that your electrical issues are addressed promptly."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className="page-title-area">
        <div className="d-table pt-80">
          <div className="d-table-cell pt-80">
            <div className="container">
              <h1>Domestic Electrician Services</h1>
              <p>
                Our rates are ace at OW London Electrician and Home Automation Engineers—no call-out fee for site visits, and absolutely no hidden charges! While we&apos;re not the cheapest, we offer top-quality service every time!
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
                <h3>Exceptional Domestic Electrical Services</h3>
                <p>
                  Our experienced domestic electricians provide electrical services throughout London. Fully qualified and NICEIC-approved, we offer good value and service, including 24-hour emergency callouts.
                </p>
                <p>
                  At OW London Electrician, we offer honest advice to homeowners free of charge. If your property needs re-wiring, our electricians will ensure the work is carried out efficiently with limited disruption, leaving the site safe and tidy.
                </p>
                <p>
                  We have a waste management policy in place and strive to recycle as many of our waste products as possible. We are committed to reducing our environmental impact.
                </p>
              </div>
            </div>
            <div className="col-lg-6 services-details-image services-details-image-container">
              <ElectricianBlueprintSmartHomeImage className="service-image-books"/>
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
                  We are a licensed and insured company, providing transparent services. Ask us about our policies, and we will tell you everything. Our license and insurance make us reliable, and you can trust us with your electrical needs.
                </p>
                <p>
                  Our services are available across London, and you can ask your neighbours about us. We strive to provide bespoke service, and references are available on request.
                </p>
                <p>
                  Call us for an initial quote. We value our customers and want to build a relationship with you. Our prices and quotes will never upset you!
                </p>
                <p>
                  We ensure we have the necessary permits and permissions to work all over London. Our efficient work and transparency help us build lasting relationships with our customers.
                </p>
                <p>
                  Our professional team will listen to your concerns, understand the issues, and provide proper solutions. Trust us with your domestic electrical problems and call us right away.
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
                          We can work with a variety of materials, including copper, aluminium, and more. Our skilled electricians ensure that all materials are handled safely and efficiently.
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
                          Smart Lock is not required for instant apps, but it can enhance security and convenience. Our electricians can help you install and configure Smart Lock systems.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Can I have multiple activities in a single feature?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes, you can have multiple activities in a single feature. Our team can help you design and implement electrical systems that support multiple activities seamlessly.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How quickly can you respond to an emergency callout?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We respond to emergency callouts within an hour in 95% of cases. Our 24-hour emergency service ensures that your electrical issues are addressed promptly.
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
      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which material types can you work with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can work with a variety of materials, including copper, aluminium, and more. Our skilled electricians ensure that all materials are handled safely and efficiently."
              }
            },
            {
              "@type": "Question",
              "name": "Is Smart Lock required for instant apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Smart Lock is not required for instant apps, but it can enhance security and convenience. Our electricians can help you install and configure Smart Lock systems."
              }
            },
            {
              "@type": "Question",
              "name": "Can I have multiple activities in a single feature?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can have multiple activities in a single feature. Our team can help you design and implement electrical systems that support multiple activities seamlessly."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you respond to an emergency callout?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We respond to emergency callouts within an hour in 95% of cases. Our 24-hour emergency service ensures that your electrical issues are addressed promptly."
              }
            }
          ]
        })}
      </script> */}
    </>
  );
};

export default DomesticElectrician;