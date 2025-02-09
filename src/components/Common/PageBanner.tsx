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
              <p>Unlock the future with our cutting-edge courses in AI, Robotics, and DevOps. Learn from experts and gain hands-on experience to advance your career.</p>
            </div>
          </div>
        </div>

        {/* Shape Images */}

      </div>
    </>
  );
};

export default PageBanner;
