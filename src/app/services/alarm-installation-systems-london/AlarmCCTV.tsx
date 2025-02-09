"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import CallUsNowButton from "@/components/Layout/CallUsNowButton";
import ElectricianVanSmartHomeImage from "@/components/ITStartup/ElectricianVanSmartHomeImage";
import ImageElectricianWorkingOnWiring from "@/components/Services/ImageElectricianWorkingOnWiring";
import ElectricianBlueprintSmartHomeImage from "@/components/Services/ElectricianBlueprintSmartHomeImage";

const AlarmAndSurveillance = () => {
  return (
    <div className="container pt-80">
      <div className="row pt-5">
        <div className="col-12 mb-3 pt-5">
          <div className="text-center p-4">
            <h1>Alarm and Surveillance Services</h1>
            <p>OW London, Electrician, and Smart Home Engineers provide comprehensive alarm and surveillance services for your home or business across London. Our skilled team ensures your property is secure and monitored 24/7.</p>
            <CallUsNowButton />
            <div className="section-title"><div className="bar"></div></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">Complete Alarm System Services</h3>
              <p className="card-text">We provide a full range of alarm system services, from installation to repairs. Our 24-hour emergency service ensures your property is always protected. Whether you need a new alarm system or maintenance for an existing one, we have you covered.</p>
              <p className="card-text">Our team is committed to maintaining high standards of customer satisfaction, giving you total peace of mind. We are more than happy to discuss your needs and offer a solution to any problem.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">CCTV and Surveillance</h3>
              <p className="card-text">Manage your property better with our CCTV and video surveillance systems. Monitor your home, office, and buildings inside out. CCTV enables you to keep an eye on all activities and provides crucial video evidence in case of any incidents.</p>
              <p className="card-text">Our surveillance systems ensure your property is not just monitored but also protected from potential threats.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">Access Control Systems</h3>
              <p className="card-text">Access control systems put you in charge of who can enter certain areas. These systems are ideal for modern security needs, preventing unauthorized access and ensuring only permitted individuals can enter.</p>
              <p className="card-text">Protect your property with advanced security solutions that offer flexibility and control.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">Intruder Alarms</h3>
              <p className="card-text">Protect your home and business with our advanced intruder alarm systems. These alarms notify you of any forced entry, ensuring your property and its occupants are safe.</p>
              <p className="card-text">Our systems allow remote monitoring, so you can have peace of mind even when you&apos;re away.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">Contact Us</h3>
              <p className="card-text">If you are concerned about the security of your home or business, give us a call. We can set up a foolproof alarm system that ensures you are safe and secure. Call OW London today for an advanced alarm system installation.</p>
              <p className="card-text">For all your alarm and surveillance needs, call us on <a href="tel:+447307565444"><FaPhone /> +44 7307 565 444</a> or email at <a href="mailto:info@owelectric.co.uk"><FaEnvelope /> info@owelectric.co.uk</a>. We are always happy to discuss your project and advise on any electrical problems.</p>
              <p className="card-text"><a href="/contact"><FaMapMarkedAlt /> Contact us</a> for more information. Check our <a href="/pricing">pricing</a> and read our <a href="/about/gallery">reviews</a> to see what our clients have to say.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmAndSurveillance;
