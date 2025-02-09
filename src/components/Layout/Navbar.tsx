"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CallUsNowButton from './CallUsNowButton';


import logo from "/public/images/logo.png";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>

      <header id="header" className="headroom">

            <CallUsNowButton/>
            <div className="ow-nav">
              <div className="container">
  
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand" >
                <Image src={logo} alt="logo" width={55}  />
              </Link>

              <button

                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">

                      {/* ////////////////// Home /////////////////////////// */}

                      <li className="nav-item">
                        <Link
                          href="/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute === "/" ? "active" : ""
                          }`}
                          
                        >
                          Home
                        </Link>
                      </li>
                      
                      {/* //////////////////  Our Price /////////////////////////// */}

                  <li className="nav-item">
                    <Link
                      href="/pricing/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute === "/pricing/" ? "active" : ""
                      }`}
                      
                    >
                      Our Price
                    </Link>
                  </li>

                      {/* //////////////////  About /////////////////////////// */}
                  <li className="nav-item">
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="nav-link"
                >
                  About <Icon.ChevronDown />
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      href="/about/why-us-ow-electrician/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/about/why-us-ow-electrician/" && "active"
                      }`}
                    >
                      Who we are
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about/gallery/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/about/gallery/" && "active"
                      }`}
                      
                    >
                      Gallery
                    </Link>
                  </li>

                </ul>
                  </li>

                      {/* //////////////////  Services /////////////////////////// */}
                      <li className="nav-item">
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="nav-link"
                >
                  Services <Icon.ChevronDown />
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      href="/services/domestic-electrician-services-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/domestic-electrician-services-london/" && "active"
                      }`}
                    >
                      Domestic Electrician
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/commercial-electrician-contractors-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/commercial-electrician-contractors-london/" && "active"
                      }`}
                      
                    >
                      Commercial Electrical Contractor
                    </Link>
                  </li>

                  
                  <li className="nav-item">
                    <Link
                      href="/services/industrial-electrician-services-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/industrial-electrician-services-london/" && "active"
                      }`}
                      
                    >
                      Industrial Electrician
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/pat-testing-electrical-safety-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/pat-testing-electrical-safety-london/" && "active"
                      }`}
                      
                    >
                      PAT Testing
                    </Link>
                  </li>

                  
                  <li className="nav-item">
                    <Link
                      href="/services/home-automation-av-knx-control4/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/home-automation-av-knx-control4/" && "active"
                      }`}
                      
                    >
                      Home Automation 
                    </Link>
                  </li>



                  <li className="nav-item">
                    <Link
                      href="/services/alarm-installation-systems-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/alarm-installation-systems-london/" && "active"
                      }`}
                      
                    >
                      Alarm & CCTV
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/home-rewiring-electricians-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/home-rewiring-electricians-london/" && "active"
                      }`}
                      
                    >
                      Rewiring
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/lighting-installation-electricians-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/lighting-installation-electricians-london/" && "active"
                      }`}
                      
                    >
                      Lighting Installation
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link
                      href="/services/eicr-electrical-inspection-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/eicr-electrical-inspection-london/" && "active"
                      }`}
                      
                    >
                      EICR & Testing
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link
                      href="/services/water-heater-repair-electricians-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/services/water-heater-repair-electricians-london/" && "active"
                      }`}
                      
                    >
                      WaterHeater Repair 
                    </Link>
                  </li>


                 
                </ul>
                  </li>

                  



                      {/* //////////////////  Emergency Elacttrician /////////////////////////// */}

                      <li className="nav-item">
                    <Link
                      href="/emergency-electrician-247/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute === "/emergency-electrician-247/" ? "active" : ""
                      }`}
                      
                    >
                      Emergency Electrician
                    </Link>
                  </li>

                      {/* //////////////////  Pages /////////////////////////// */}




                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Features <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/features/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/features/" && "active"
                              }`}
                              
                            >
                              Features
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/features/feature-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/features/feature-details/" &&
                                "active"
                              }`}
                              
                            >
                              Features Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services/" && "active"
                              }`}
                              
                            >
                              Services Style 1
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-2/" && "active"
                              }`}
                              
                            >
                              Services Style 2
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-3/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-3/" && "active"
                              }`}
                              
                            >
                              Services Style 3
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-4/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-4/" && "active"
                              }`}
                              
                            >
                              Services Style 4
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-5/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-5/" && "active"
                              }`}
                              
                            >
                              Services Style 5
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services/service-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services/service-details/" &&
                                "active"
                              }`}
                              
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/feedback/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/feedback/" && "active"
                          }`}
                          
                        >
                          Feedback
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Projects <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/projects/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/projects/" && "active"
                              }`}
                              
                            >
                              Project Style 1
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/projects-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/projects-2/" && "active"
                              }`}
                              
                            >
                              Project Style 2
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/projects/project-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/projects/project-details/" &&
                                "active"
                              }`}
                              
                            >
                              Project Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/team/" && "active"
                          }`}
                          
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/pricing/" && "active"
                          }`}
                          
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          User <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/login/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/login/" && "active"
                              }`}
                              
                            >
                              Login
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/sign-up/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/sign-up/" && "active"
                              }`}
                              
                            >
                              Sign Up
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/forgot-password/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/forgot-password/" && "active"
                              }`}
                              
                            >
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/faq/" && "active"
                          }`}
                          
                        >
                          FAQ&apos;s
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/coming-soon/" && "active"
                          }`}
                          
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/404/" && "active"
                          }`}
                          
                        >
                          404 Error Page
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                      {/* //////////////////  Shop /////////////////////////// */}

                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Shop <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/shop/" && "active"
                          }`}
                          
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/checkout/" && "active"
                          }`}
                          
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                      {/* //////////////////  Blog /////////////////////////// */}

                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog-2/" && "active"
                          }`}
                          
                        >
                          Blog
                        </Link>
                  </li>
                  

                    {/* //////////////////  Area Caoverd /////////////////////////// */}

                                        <li className="nav-item">
                    <Link
                      href="/covered-area-electrician-home-autometion-london/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute === "/electrician-home-autometion-london-covered-area/" ? "active" : ""
                      }`}
                      
                    >
                      Covered Areas
                    </Link>
                  </li>
                      {/* //////////////////  garentee /////////////////////////// */}

                      <li className="nav-item">
                        <Link
                          href="/warranty-guarantees-insured-electrical-central-london-east-london/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/warranty-guarantees-insured-electrical-central-london-east-london/" && "active"
                          }`}
                          
                        >
                          Our Warranty
                        </Link>
                  </li>

                      {/* //////////////////  Contact /////////////////////////// */}

                      <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/contact/" && "active"
                      }`}
                      
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              {/* <div className="others-option">
                <Link href="/cart/" className="cart-wrapper-btn" >
                  <Icon.ShoppingCart />
                  <span>3</span>
                </Link>

                <Link href="/contact/" className="btn btn-light" >
                  Support
                </Link>

                <Link href="/login/" className="btn btn-primary" >
                  Login
                </Link>
              </div> */}
            </nav>
            <WhatsAppButton/>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
