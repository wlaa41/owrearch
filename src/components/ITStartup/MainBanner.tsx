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
                      London’s 24/7 Emergency Electrician Services.
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="fs-6"
                      >
                      ● No Call-Out Fees
                      <br />
                      ● NICEIC Registered
                      <br />
                      ● Guaranteed Same-Day Response
                      <br />
                      ● Polite & Professional
                      <br />
                      ● 5 STAR  Google Reviews
                      <br />
                      Call:  {' '}
                      <a href="tel:+447307567444" itemProp="telephone" aria-label="Call us at 07307 566 444">07307 565 444</a>
                      {' '} or {' '}
                      <a href="tel:+447888705118" itemProp="telephone" aria-label="Call us at +447888705118">07888705118</a>

                      <br />
                      Email: {' '}
                      <a href="mailto:info@owelectric.co.uk" itemProp="email" aria-label="Email us at info@owelectric.co.uk">info@owelectric.co.uk</a>
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
                    </div>

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

               
               
                    