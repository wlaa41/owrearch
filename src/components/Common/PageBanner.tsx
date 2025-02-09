"use client";

import React from "react";
import Image from "next/image";

// Shape Images
import shape1 from "/public/images/shape1.png";

interface PageBannerProps {
  pageTitle: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ pageTitle }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h1>{pageTitle}</h1>
              <p>Our rates are ace at OW Electric—no call-out fee for site visits, and absolutely no hidden charges! While we&apos;re not the cheapest, we offer top-quality service every time!</p>
            </div>
          </div>
        </div>

        {/* Shape Images */}


      </div>
    </>
  );
};

export default PageBanner;
