"use client";

import React from "react";
import TeamElectricianVanSmartHomeImage from "../TeamElectricianVanSmartHomeImage"

const CloudHostingServices = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div id="Service-container" className="Service-container row justify-content-center align-items-center">
            <div  className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2><span className="OW2">Electrify</span> Your World with <span className="OW1">OW!</span> </h2>
                <div className="bar"></div>
                <p>
                At OW, we are certified electrical contractors lighting up London with our premium services for homes and businesses. From fuse board replacements to dazzling outdoor lighting installations, we bring excellence to every project.
                </p>

              </div>

              <br/>
                <h3>24/7 Electricians Near Me London You Can Count On
                </h3>
                <div className="bar"></div>
                <p>
                From building contractors and landlords to architects, our clients rely on OW for reliable and expert electrical work. We&apos;ve handled various commercial projects, including offices, restaurants, and beauty salons.
                </p>

                <br/>
                <h3><span className="OW2">Shockingly</span>  Good Electrical Services {" "}<span className="OW1">OW!</span> </h3>
                <div className="bar"></div>
                <p>
                Join our elite clientele, including building contractors, landlords, and architects, who trust OW for top-notch electrical solutions. Our impressive portfolio includes commercial spaces like trendy offices, chic restaurants, and luxurious beauty salons.
                </p>
            </div>
              <TeamElectricianVanSmartHomeImage className="teamVan-image-container col-lg-6 col-md-12 d-flex justify-content-center align-items-center"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default CloudHostingServices;
