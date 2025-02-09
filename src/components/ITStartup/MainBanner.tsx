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
                  <video
      className="imgclass"
      autoPlay
      loop
      muted
      playsInline
      title={'ow labs with drones and space'}

      style={{ width: "100%", height: "auto" }} // Uncomment if needed
    >
      <source src="/videos/Drone_Lab_Innovation_simple_Courses.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                    {/* <ElectricianVanSmartHomeImage/> */}
                    </div>

                  <div className="banner-image" id="willtest">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images
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
        </div> */}
      </div>
    </>
  )
}

export default HeroBanner;

               
               
                    // src\components\ImageOptimizedWithJsonId.tsx
// import React from 'react';
// // import { useEffect } from 'react';

// export interface ImageOptimizedWithJsonIdProps {
//   src: string;
//   alt: string;
//   title: string;
//   author: string;
//   copyright: string;
//   credit: string;
//   dateCreated: string;
//   usageTerms: string;
//   description: string;
//   keywords: string[];
//   width?: number; // Made optional
//   height?: number; // Made optional
//   caption: string;
//   pageUrl: string;
//   thumbnailSrc: string;  // Added thumbnail source
//   thumbnailWidth?: number; // Added thumbnail width
//   thumbnailHeight?: number; // Added thumbnail height
//   className?: string;  // Optional className prop
//   [x: string]: any;    // To pass through additional props
// }

// const ImageOptimizedWithJsonId: React.FC<ImageOptimizedWithJsonIdProps> = ({
//   src,
//   alt,
//   title,
//   author,
//   copyright,
//   credit,
//   dateCreated,
//   usageTerms,
//   description,
//   keywords,
//   width = 800,  // Default width
//   height = 600,  // Default height
//   caption,
//   pageUrl,
//   thumbnailSrc,  // Destructure thumbnail source
//   thumbnailWidth = 300,  // Default thumbnail width
//   thumbnailHeight = 200,  // Default thumbnail height
//   lazy = true, // Default
//   className,
//   ...rest // To capture any additional props
// }) => {
//   // useEffect(() => {
//   //   // Call to server to update sitemap
//   //   fetch('/api/update-sitemap', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       pageUrl,
//   //       src,
//   //       caption,
//   //       title,
//   //       license: usageTerms,
//   //     }),
//   //   });
//   // }, [pageUrl, src, caption, title, usageTerms]);

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ImageObject",
//     "contentUrl": src,
//     "url": src,
//     "description": description,
//     "name": title,
//     "author": {
//       "@type": "Person",
//       "name": author,
//     },
//     "copyrightHolder": {
//       "@type": "Person",
//       "name": copyright,
//     },
//     "creditText": credit,
//     "copyrightYear": new Date(dateCreated).getFullYear(),
//     "datePublished": dateCreated,
//     "dateModified": dateCreated,
//     "license": usageTerms,
//     "thumbnail": [
//       {
//         "@type": "ImageObject",
//         "contentUrl": thumbnailSrc,
//         "width": thumbnailWidth.toString(),
//         "height": thumbnailHeight.toString(),
//       }
//     ],
//     "width": width.toString(),
//     "height": height.toString(),
//     "keywords": keywords,
//   };

//   return (
//     <>
//       <JsonLd jsonLd={jsonLd} />
//       <picture className={className} {...rest}>
//         <source media="(max-width: 799px)" srcSet={`${src}-799.webp`} />
//         <source media="(min-width: 800px)" srcSet={`${src}.webp`} />
        
        
//       </picture>
//     </>
//   );
// };

// export default ImageOptimizedWithJsonId;
