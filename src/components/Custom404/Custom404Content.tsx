"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import Electrician404Image from "../Electrician404Image";


const Custom404Content = () => {
  return (
    <>
    {/* <Navbar/> */}
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <div className="notfound-404">
                  {/* <h1>Oops!</h1> */}
                </div>
                <Electrician404Image/>
                {/* <Image alt={'ow-electrician-home-automation-404-not-found'} src={ops} height={766} width={1100}/> */}
                {/* <h3>404 - Page not found</h3> */}
                <p className="pt-5">
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <div className=""></div>
                <Link href="/" className="btn btn-primary " >
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404Content;
