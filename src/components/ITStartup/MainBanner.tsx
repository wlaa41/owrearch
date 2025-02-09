// "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import vanimage from "/public/images/ow-london-electrician-smart-home.webp";


// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";
import ElectricianVanSmartHomeImage from "./ElectricianVanSmartHomeImage";
import CallUsNowButton from "../../components/Layout/CallUsNowButton";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5 hero-container">
                  <div className="left">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      data-aos-once="true">
                      Advancing AI, Robotics & Research.
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="fs-6"
                      >
                      ● Cutting-edge AI & Robotics Research
                      <br />
                      ● Real-to-Sim-to-Real Applications
                      <br />
                      ● Advanced DevOps & Cloud Solutions
                      <br />
                      ● Published Research & Innovation
                      <br />
                      Connect: {' '}
                      <a href="mailto:info@owroquai.com" itemProp="email" aria-label="Email us at info@owroquai.com">info@owroquai.com</a>
                    </p>
   
   
                      <CallUsNowButton />

                    

                </div>

                {/* <Image
                      src={vanimage}
                      className="animate__animated animate__rollIn animate__delay-0.1"
                      alt="headphone"
                      width={444}
                      height={62}
                    /> */}
                  <div className="right">
                    <ElectricianVanSmartHomeImage/>
                    </div>]

                  <div className="banner-image" id="willtest">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape5">
          <Image src={shape5} alt="shape" width={182} height={146} />
        </div>
        <div className="shape6 rotateme">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  )
}

export default HeroBanner;

               
               
                    