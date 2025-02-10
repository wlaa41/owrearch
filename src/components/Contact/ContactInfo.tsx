"use client";

import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="contact-info-box">
                <div className="items-contact">
                  <div className="icon-container">
                    <div className="icon">
                      <Icon.Mail />
                    </div>
                  </div>
                  <h3>Mail Here</h3>
                  <p>
                    Send us an email on
                  </p>
                  <p>
                    <a href="mailto:info@owresearch.netlify.app">info@owresearch.netlify.app</a>
                  </p>
                </div>
                <div className="fun-text">
                  <p><strong>We&apos;ll get back to you faster than you can say &quot;watt&quot;!</strong></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="contact-info-box">
                <div className="items-contact">
                  <div className="icon-container">
                    <div className="icon">
                      <Icon.MapPin />
                    </div>
                  </div>
                  <h3>Visit Here</h3>
                  <p>Rainham Road N, London,</p>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=NW1+6XE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UK RM10 7EJ
                    </a>
                  </p>
                </div>
                <div className="">
                  <p><strong>Come say hello and see our sparks fly!</strong></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="contact-info-box">
                <div className="items-contact">
                  <div className="icon-container">
                    <div className="icon">
                      <Icon.Phone />
                    </div>
                  </div>
                  <h3>Call Here</h3>
                  <p>
                    <a href="tel:+447307565444">+44 78888 05 118</a>
                  </p>
                  <p>
                    <a href="tel:+447307565444">+44 7307 565 444</a>
                  </p>
                </div>
                <div className="fun-text">
                  <p><strong>We&apos;re all ears and ready to &quotswitch&quot your problems away!</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-info-area .row {
          display: flex;
          flex-wrap: wrap;
        }
        .contact-info-box {
          flex: 1;
          padding: 20px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .icon-container {
          display: flex;
          justify-content: center;
        }
        .icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .fun-text {
          display: flex;
          align-items: center;
          margin-top: 33px;
          font-weight: bold;
          
        }
      `}</style>
    </>
  );
};

export default ContactInfo;
