"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Shield, Power, Activity, DollarSign, CheckCircle, PhoneCall } from "react-feather";
import CallUsNowButton from "@/components/Layout/CallUsNowButton";

const AreasCoveredPage = () => {
  // const serviceSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Service",
  //   "serviceType": "Electrical Services",
  //   "provider": {
  //     "@type": "Organization",
  //     "name": "OW London, Electrician, Smart Home Engineers",
  //     "url": "https://www.owelectric.co.uk",
  //     "contactPoint": {
  //       "@type": "ContactPoint",
  //       "telephone": "+447307565444",
  //       "contactType": "Customer Service",
  //       "areaServed": "GB",
  //       "availableLanguage": "en-GB"
  //     },
  //     "address": {
  //       "@type": "PostalAddress",
  //       "streetAddress": "E15 Business Bay",
  //       "addressLocality": "London",
  //       "postalCode": "E15",
  //       "addressCountry": "GB"
  //     }
  //   },
  //   "areaServed": {
  //     "@type": "Place",
  //     "name": [
  //       "Central London", "East London", "West London", "North London", "South London", "E1", "E2", "E3", "E14", "E15", "E16", "E20"
  //     ]
  //   },
  //   "description": "Providing comprehensive electrical services across London, including domestic, commercial, and industrial installations and repairs.",
  //   "hasOfferCatalog": {
  //     "@type": "OfferCatalog",
  //     "name": "Electrical Services",
  //     "itemListElement": [
  //       {
  //         "@type": "Offer",
  //         "itemOffered": {
  //           "@type": "Service",
  //           "serviceType": "Local Electrical Contractor",
  //           "description": "Reliable and efficient electrical services for all your needs in London. Available 24/7 across London, including areas such as E1, E2, E3, E14, E15, E16, E20."
  //         }
  //       },
  //       {
  //         "@type": "Offer",
  //         "itemOffered": {
  //           "@type": "Service",
  //           "serviceType": "Protecting Your Electronics",
  //           "description": "Professional solutions to protect your electronics from power surges, faulty wiring, and lightning strikes."
  //         }
  //       },
  //       {
  //         "@type": "Offer",
  //         "itemOffered": {
  //           "@type": "Service",
  //           "serviceType": "Preventing Electrocution",
  //           "description": "Expert electrical services to prevent hazards and ensure safety. Contact us for reliable and safe electrical services."
  //         }
  //       },
  //       {
  //         "@type": "Offer",
  //         "itemOffered": {
  //           "@type": "Service",
  //           "serviceType": "Ensuring Family Safety",
  //           "description": "Thorough electrical inspections to identify and fix any problems, ensuring your home is safe from electrical hazards."
  //         }
  //       },
  //       {
  //         "@type": "Offer",
  //         "itemOffered": {
  //           "@type": "Service",
  //           "serviceType": "Affordable Services",
  //           "description": "Cost-effective electrical services to resolve your issues without breaking the bank."
  //         }
  //       },
  //       {
  //         "@type": "Offer",
  //         "itemOffered": {
  //           "@type": "Service",
  //           "serviceType": "Peace of Mind",
  //           "description": "Comprehensive electrical system checks to provide you with peace of mind."
  //         }
  //       }
  //     ]
  //   }
  // };
  
  return (
    <>
      <div className="areas-covered-area ptb-80">
        <div className="container ptb-80">
          <div className="section-title ptb-80">
            <h1>Comprehensive Electrical Services Across London</h1>
            <div className="bar"></div>
            <p>
              Find out all the areas that we work on Domestic, Commercial & Industrial Electrical Installations and Repairs. For more details, call us at <a href="tel:00447307565444">00447307565444</a>.
            </p>
            <CallUsNowButton/>
          </div>

          <div className="content mt-5">
            <div className="card-container">
              <div className="card">
                <MapPin size={20} />
                <h3>Local Electrical Contractor</h3>
                <p>
                  When you are in need of a reliable electrician in London, call no one else but OW London, Electrician, Smart Home Engineers. Attempting DIY electrical repairs can be dangerous and costly. Trust our professional electricians to handle your electrical needs safely and efficiently. We are available 24/7 across London, including areas such as E1, E2, E3, E14, E15, E16, E20.
                </p>
                <p>
                  <strong>Client Story:</strong> Mr. Bilal from E15 had a recurring issue with her home’s wiring. After attempting several DIY fixes, she finally called us. Our team identified and fixed the problem efficiently, ensuring her home was safe and up to code.
                </p>
              </div>

              <div className="card">
                <Shield size={20} />
                <h3>Protecting Your Electronics</h3>
                <p>
                  Power surges, faulty wiring, and lightning strikes can damage your electronics. Our team of highly professional electricians will resolve any electrical issues to protect your valuable electronic items. Call us to ensure your electronics are safe and secure.
                </p>
                <p>
                  <strong>Client Story:</strong> A business in Canary Wharf (E14) experienced frequent power surges that were damaging their equipment. Our electricians installed surge protectors and reinforced their wiring, saving the business from future losses.
                </p>
              </div>

              <div className="card">
                <Power size={20} />
                <h3>Preventing Electrocution</h3>
                <p>
                  DIY electrical repairs can be hazardous. Do not risk your safety by attempting to fix electrical problems yourself. Our professional electricians will diagnose and resolve any issues, keeping you and your family safe. Contact us for reliable electrical services.
                </p>
                <p>
                  <strong>Client Story:</strong> Mr. Smith in Hackney (E8) tried fixing a faulty socket, resulting in a small electrical shock. Our team arrived promptly, fixed the issue safely, and provided tips on electrical safety.
                </p>
              </div>

              <div className="card">
                <Activity size={20} />
                <h3>Ensuring Family Safety</h3>
                <p>
                  Faulty electrical wiring is a leading cause of house fires. Our electricians will identify and fix any electrical problems, ensuring your home is safe. We provide thorough inspections and alert you to any potential hazards. Your family&apos;s safety is our priority.
                </p>
                <p>
                </p>
              </div>

              <div className="card">
                <DollarSign size={20} />
                <h3>Affordable Services</h3>
                <p>
                  Hiring an electrician doesn&apos;t have to be expensive. Our services are cost-effective, and we ensure that your electrical issues are resolved without burning a hole in your pocket. Contact us for affordable and reliable electrical services.
                </p>
                <p>
                </p>
              </div>

              <div className="card">
                <CheckCircle size={20} />
                <h3>Peace of Mind</h3>
                <p>
                  With years of expertise, our team will thoroughly check your electrical system, identify faults, and resolve them efficiently. Trust our professional service to give you peace of mind. We ensure everything is sorted, so you can relax and feel safe.
                </p>
                <p>
                </p>
              </div>
            </div>

            <div className="contact-info mt-5">
              <h3>Contact Us</h3>
              <p>
                If you are unsure about which areas we cover, please get in touch with us via telephone on <a href="tel:00447307565444">00447307565444</a> or via email at <a href="mailto:info@owelectric.co.uk">info@.co.uk</a>.
              </p>
            </div>
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

        .section-title h1 {
          margin-bottom: 10px;
        }

        .section-title .bar {
          width: 50px;
          height: 3px;
          background: #ff6b6b;
          margin: 15px 0;
        }

        .contact-info {
          margin-top: 40px;
          text-align: center;
        }

        .contact-info h3 {
          margin-top: 20px;
        }

        .contact-info p {
          margin-top: 10px;
        }
      `}</style>

      {/* <script type="application/ld+json">
      {JSON.stringify(serviceSchema)}
    </script> */}
    </>
  );
};

export default AreasCoveredPage;
