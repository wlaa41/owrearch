"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CallUsNowButton from "./CallUsNowButton";

import logo from "/public/images/logo.png";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => setMenu(!menu);

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

  const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom">
      {/* <CallUsNowButton /> */}

      <div className="ow-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={55} />
            </Link>

            <button onClick={toggleNavbar} className={classTwo} type="button">
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className={`nav-link ${currentRoute === "/" ? "active" : ""}`}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/Courses/" className={`nav-link ${currentRoute === "/Courses/" ? "active" : ""}`}>
                    Courses
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    About Us <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/about/mission/" className="nav-link">Our Mission</Link></li>
                    <li><Link href="/about/projects-showcase/" className="nav-link">Projects Showcase</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    Solutions <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/solutions/ai-automation/" className="nav-link">AI & Automation</Link></li>
                    <li><Link href="/solutions/machine-learning/" className="nav-link">Machine Learning Models</Link></li>
                    <li><Link href="/solutions/robotics-simulation/" className="nav-link">Robotics & Simulation</Link></li>
                    <li><Link href="/solutions/ai-safety/" className="nav-link">AI for Safety & Compliance</Link></li>
                    <li><Link href="/solutions/smart-systems/" className="nav-link">Smart Systems</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/ai-consulting/" className={`nav-link ${currentRoute === "/ai-consulting/" ? "active" : ""}`}>
                    AI Consulting
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/research-insights/" className={`nav-link ${currentRoute === "/research-insights/" ? "active" : ""}`}>
                    Research & Insights
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/tech-stack/" className={`nav-link ${currentRoute === "/tech-stack/" ? "active" : ""}`}>
                    Tech Stack
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/case-studies/" className={`nav-link ${currentRoute === "/case-studies/" ? "active" : ""}`}>
                    Case Studies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact/" className={`nav-link ${currentRoute === "/contact/" ? "active" : ""}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <WhatsAppButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
