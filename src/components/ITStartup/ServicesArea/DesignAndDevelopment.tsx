"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import bigMonitor from "/public/images/services-left-image/big-monitor.png";
import creative from "/public/images/services-left-image/creative.png";
import developer from "/public/images/services-left-image/developer.png";
import flowerTop from "/public/images/services-left-image/flower-top.png";
import smallMonitor from "/public/images/services-left-image/small-monitor.png";
import smallTop from "/public/images/services-left-image/small-top.png";
import Table from "/public/images/services-left-image/table.png";
import Target from "/public/images/services-left-image/target.png";
import cercleShape from "/public/images/services-left-image/cercle-shape.png";
import serviceLeftMainPic from "/public/images/services-left-image/service-left-main-pic.png";

const DesignAndDevelopment = () => {
  return (
    <>
      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-left-image">
  

              <Image
                src={Table}
                alt="table"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
                width={337}
                height={138}
              />

              <Image
                src={Target}
                alt="target"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="500"
                data-aos-once="true"
                width={91}
                height={96}
              />


            </div>

            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Design & Development</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Layout /> Responsive design
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Code /> React web development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> Android apps development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Code /> Laravel web development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> iOS apps development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Percent /> UX/UI design
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.ShoppingCart /> E-commerce development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.CheckCircle /> Print ready design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAndDevelopment;
