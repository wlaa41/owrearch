"use client";

import React from "react";
import ContactForm from "../../components/FAQ/ContactForm";
import Head from 'next/head';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";
import image from "../../../public/images/eletrician-near-me-ow-van-247-covering-london-green.webp";
import Image from "next/image";

const FaqContent = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your hourly rates for electrician services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a range of hourly rates depending on the service and time of day: Pre-Booked Electrician: £90/hr, Out of Business Hours (6pm-12pm): £130/hr, Central & West London: £160/hr."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost for emergency electrician services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our emergency electrician rates are as follows: Emergency Electrician: £140/hr, Out of Hours Emergency (6pm-12pm): £180/hr, Late Night Emergency (12am-8am): £240/hr."
        }
      },
      {
        "@type": "Question",
        "name": "What are your rates for weekend electrician services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive weekend services at the following rates: Weekend Standard Rate: £180/hr, Weekend After-Hours Rate (6pm-12pm): £220/hr."
        }
      },
      {
        "@type": "Question",
        "name": "What are your prices for full-day electrical projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our full-day rates and larger projects are priced as follows: Pre-Booked Electrician (Whole Day): £580, Consumer Unit Upgrade (Up to 8 circuits, 2 RCD and SPD): £780, Full Rewire: Starts from £3,500, Electrical Installations and Fittings: £15 per item."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer testing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive testing services: PAT Testing (Portable Appliance Testing): £140, Electrical Installation Condition Report (EICR) - 1 Bedroom: £180, Electrical Installation Condition Report (EICR) - 2-3 Bedrooms: £240, Electrical Installation Condition Report (EICR) - 4 Bedrooms: £260."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OW London, Electrician, Smart Home Engineers provides services across Greater London, with extensive coverage including Central London, West London, East London, North London, and South London."
        }
      },
      {
        "@type": "Question",
        "name": "What are your qualifications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our electricians are certified professionals with extensive training and experience in the field. We are NICEIC certified and committed to upholding the highest standards of electrical safety and quality."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer smart home integration services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in smart home integration, offering services such as smart lighting, security systems, home automation, and more to enhance the convenience and security of your home."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book an appointment by visiting our contact page or by calling our customer support. We offer flexible scheduling to meet your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept various payment methods including credit/debit cards, bank transfers, and online payments to ensure a convenient and secure transaction process for our clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services for commercial properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a wide range of electrical services for both residential and commercial properties. Our team is equipped to handle large-scale projects and provide tailored solutions for businesses."
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
      <div className="faq-area ptb-80">
        <div className="container">
        <div className="row">

        <Image
                src={image}
                alt="Electrician services"
                width={1920}
                height={1080}
                layout="responsive"
                className="img-fluid"
              />
            <div className="faq-accordion">
              <Accordion preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What are your hourly rates for electrician services?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We offer a range of hourly rates depending on the service and time of day:
                      <ul>
                        <li><b>Pre-Booked Electrician:</b> £90/hr</li>
                        <li><b>Out of Business Hours (6pm-12pm):</b> £130/hr</li>
                        <li><b>Central & West London:</b> £160/hr</li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What is the cost for emergency electrician services?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Our emergency electrician rates are as follows:
                      <ul>
                        <li><b>Emergency Electrician:</b> £140/hr</li>
                        <li><b>Out of Hours Emergency (6pm-12pm):</b> £180/hr</li>
                        <li><b>Late Night Emergency (12am-8am):</b> £240/hr</li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What are your rates for weekend electrician services?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We provide comprehensive weekend services at the following rates:
                      <ul>
                        <li><b>Weekend Standard Rate:</b> £180/hr</li>
                        <li><b>Weekend After-Hours Rate (6pm-12pm):</b> £220/hr</li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What are your prices for full-day electrical projects?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Our full-day rates and larger projects are priced as follows:
                      <ul>
                        <li><b>Pre-Booked Electrician (Whole Day):</b> £580</li>
                        <li><b>Consumer Unit Upgrade (Up to 8 circuits, 2 RCD and SPD):</b> £780</li>
                        <li><b>Full Rewire:</b> Starts from £3,500</li>
                        <li><b>Electrical Installations and Fittings:</b> £15 per item</li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Do you offer testing services?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, we offer comprehensive testing services:
                      <ul>
                        <li><b>PAT Testing (Portable Appliance Testing):</b> £140</li>
                        <li><b>Electrical Installation Condition Report (EICR) - 1 Bedroom:</b> £180</li>
                        <li><b>Electrical Installation Condition Report (EICR) - 2-3 Bedrooms:</b> £240</li>
                        <li><b>Electrical Installation Condition Report (EICR) - 4 Bedrooms:</b> £260</li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="f">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Which areas do you serve?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      OW London, Electrician, Smart Home Engineers provides services across Greater London, with extensive coverage including:
                      <ul>
                        <li>Central London</li>
                        <li>West London</li>
                        <li>East London</li>
                        <li>North London</li>
                        <li>South London</li>
                      </ul>
                      We are dedicated to offering reliable and professional services throughout these areas.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="g">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What are your qualifications?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Our electricians are certified professionals with extensive training and experience in the field. We are NICEIC certified and committed to upholding the highest standards of electrical safety and quality.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="h">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Do you offer smart home integration services?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, we specialize in smart home integration, offering services such as smart lighting, security systems, home automation, and more to enhance the convenience and security of your home.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="i">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>How can I book an appointment?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      You can book an appointment by visiting our <Link href="/contact">contact page</Link> or by calling our customer support. We offer flexible scheduling to meet your needs.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="j">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What payment methods do you accept?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We accept various payment methods including credit/debit cards, bank transfers, and online payments to ensure a convenient and secure transaction process for our clients.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="k">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Do you provide services for commercial properties?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, we offer a wide range of electrical services for both residential and commercial properties. Our team is equipped to handle large-scale projects and provide tailored solutions for businesses.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            {/* ContactForm */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
