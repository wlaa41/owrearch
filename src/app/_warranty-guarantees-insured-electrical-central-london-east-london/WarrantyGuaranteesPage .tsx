"use client";

import Head from 'next/head';
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Link from "next/link";

import { PhoneCall, Shield, Clipboard, Tool, CheckCircle } from "react-feather";
import ElectricianVanSmartHomeImage from "@/components/ITStartup/ElectricianVanSmartHomeImage";
import WillJamesCEOImage from "@/components/WillJamesCEOImage";

const WarrantyGuaranteesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the guarantee on your work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our work comes with a 12-month guarantee from the date of completion. Your invoice is your reference for your guarantee. Full terms and conditions regarding your guarantee are available on our website."
        }
      },
      {
        "@type": "Question",
        "name": "What does your customer care include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At OW London, Electrician, Smart Home Engineers, we prioritize our customers' satisfaction. Our service includes a 12-month work guarantee from the date of completion. Please keep your invoice safe, as it is required for any service requests or repairs within the guarantee period."
        }
      },
      {
        "@type": "Question",
        "name": "What types of electrical repair services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team of certified electricians is available for all electrical repair services. Whether it's fixing a small socket or rewiring your home or office, we provide top-notch services backed by our guarantees. We are an approved contractor with all necessary certifications, including PAT testing and ECS health and safety assessments."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of peace of mind does your guarantee offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our guarantees provide the peace of mind you deserve. Keep your invoice handy and contact us if any issues arise. Our professional team will ensure all problems are resolved efficiently. We are committed to maintaining high standards of workmanship and customer care."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact you if there is an issue with your workmanship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you encounter any issues with our workmanship within the 12-month guarantee period, contact our friendly staff with your invoice number and the date the work was carried out. We prioritize resolving any problems promptly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide a workmanship guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our work is covered by a 12-month guarantee against faulty workmanship. However, some repairs may not be guaranteed as specified in our terms and conditions."
        }
      },
      {
        "@type": "Question",
        "name": "What about the materials you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Materials supplied by OW London, Electrician, Smart Home Engineers are covered by manufacturers' warranties. A 20% handling charge applies to all sourced materials, but we ensure competitive pricing through our partnerships with certified suppliers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free quotes and clear invoicing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide free quotes for all our services. Upon completion, you will receive a clear, detailed invoice. If a job is completed within the hour, our electricians can assist with other tasks at no extra cost."
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


      <div className="space99px ptb-80"></div>
      <div className="warranty-guarantees-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h1>Warranty and Guarantees</h1>
            <div className="bar"></div>
            <p>
              Discover our comprehensive guarantees on all domestic, commercial, and industrial electrical installations and repairs.
              For more details, call us at <a href="tel:07307 565 444">07307 565 444</a> .
            </p>
          </div>

          <ElectricianVanSmartHomeImage className="center-with-radius" />

          <div className="content mt-5">
            <div className="card-container">
              <div className="card col-sm-12 col-md-12 min-card-width300">
                <Shield size={20} />
                <h3>Guaranteed Work</h3>
                <p>
                  All our work comes with a 12-month guarantee from the date of completion. Your invoice is your reference for your guarantee. Full terms and conditions regarding your guarantee are available on our website.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <PhoneCall size={20} />
                <h3>Customer Care</h3>
                <p>
                  At OW London, Electrician, Smart Home Engineers, we prioritize our customers&apos; satisfaction. Our service includes a 12-month work guarantee from the date of completion. Please keep your invoice safe, as it is required for any service requests or repairs within the guarantee period.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <CheckCircle size={20} />
                <h3>Electrical Repair Services</h3>
                <p>
                  Our team of certified electricians is available for all electrical repair services. Whether it&apos;s fixing a small socket or rewiring your home or office, we provide top-notch services backed by our guarantees. We are an approved contractor with all necessary certifications, including PAT testing and ECS health and safety assessments.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <CheckCircle size={20} />
                <h3>Peace of Mind</h3>
                <p>
                  Our guarantees provide the peace of mind you deserve. Keep your invoice handy and contact us if any issues arise. Our professional team will ensure all problems are resolved efficiently. We are committed to maintaining high standards of workmanship and customer care.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <PhoneCall size={20} />
                <h3>Contact Us</h3>
                <p>
                  If you encounter any issues with our workmanship within the 12-month guarantee period, contact our friendly staff with your invoice number and the date the work was carried out. We prioritize resolving any problems promptly and ensuring customer satisfaction.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <Tool size={20} />
                <h3>Workmanship Guarantee</h3>
                <p>
                  Our work is covered by a 12-month guarantee against faulty workmanship. However, some repairs may not be guaranteed as specified in our terms and conditions.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <Clipboard size={20} />
                <h3>Materials</h3>
                <p>
                  Materials supplied by OW London, Electrician, Smart Home Engineers are covered by manufacturers&apos; warranties. A 20% handling charge applies to all sourced materials, but we ensure competitive pricing through our partnerships with certified suppliers.
                </p>
              </div>

              <div className="card col-sm-12 col-md-12 min-card-width300">
                <Clipboard size={20} />
                <h3>Free Quotes and Invoicing</h3>
                <p>
                  We provide free quotes for all our services. Upon completion, you will receive a clear, detailed invoice. If a job is completed within the hour, our electricians can assist with other tasks at no extra cost.
                </p>
              </div>
            </div>



            <div className="ceo-message mt-5">
              <WillJamesCEOImage />
              <h3>A Word of Promise from Our CEO</h3>
              <p>
                At OW London, Electrician, Smart Home Engineers, we stand by the quality of our work. Our commitment to excellence ensures that every service we provide meets the highest standards. Your satisfaction and peace of mind are our top priorities. If you have any issues or need further assistance, please do not hesitate to contact us.
              </p>
              <p>
                <strong>Will James, PhD</strong><br />
                CEO, OW London, Electrician, Smart Home Engineers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-area ptb-80">
        <div className="container">
          <div className="faq-accordion">
            <Accordion preExpanded={["a"]}>
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
                    <span>What is your pricing for standard electrician services?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Our pricing for standard electrician services is competitive and transparent. For detailed pricing information, please visit our <Link href="/pricing">pricing page</Link>.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="k">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What areas do you cover in London?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We cover a wide range of areas in London, including Central London, East London, North London, South London, and West London. For a detailed list of areas, please visit our <Link href="/covered-area-electrician-home-autometion-london">coverage page</Link>.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="l">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What should I do in case of an electrical emergency?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In case of an electrical emergency, please call our emergency hotline immediately. We offer 24/7 emergency services to ensure your safety and resolve any urgent issues promptly.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="m">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Are your electricians qualified?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, all our electricians are fully qualified. We ensure that our team meets the highest standards of professionalism and safety.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <style jsx>{`
          .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
  
          .card {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            flex: 1 1 45%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
  
          .card h3 {
            margin-top: 10px;
          }
  
          .section-title h2 {
            margin-bottom: 10px;
          }
  
          .section-title .bar {
            width: 50px;
            height: 3px;
            background: #ff6b6b;
            margin: 15px 0;
          }
  
          .ceo-message {
            margin-top: 40px;
            text-align: center;
          }
  
          .ceo-message h3 {
            margin-top: 20px;
          }
  
          .ceo-message p {
            margin-top: 10px;
          }
  
          .ceo-message p strong {
            display: block;
            margin-top: 10px;
          }
        `}</style>

    </>
  );
};

export default WarrantyGuaranteesPage;