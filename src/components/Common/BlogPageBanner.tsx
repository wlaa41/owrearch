"use client";

import React from "react";
import Image from "next/image";

// Shape Images

import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";
import ImageStripOWElectrcain from "../ImageStripOWElectricain";

interface PageBannerProps {
  pageTitle: string;
}

const BlogPageBanner: React.FC<PageBannerProps> = ({ pageTitle }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h1>{pageTitle}</h1>
              <p>Sharing knowledge and experience in smart home automation and electrical services.</p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className=""> */}

          {/* </div> */}
          <div className="container col-lg-12 blog-banner-container">
            <ImageStripOWElectrcain/>
          {/* <Image src={shap} className="blog-banner-container-image" alt="blog-banner-container-image"  /> */}
          </div>




      </div>

    </>
  );
};

export default BlogPageBanner;
