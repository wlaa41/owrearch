"use client";

import React from "react";
import Image from "next/image";

const GoogleMap = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19892.093054185075!2d0.1588023395502925!3d51.55354335439281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9c5bafe26fb%3A0x72c5d6d7c7bdf4a7!2s104%20Rainham%20Rd%20N%2C%20London%20RM10%207EJ%2C%20UK!5e0!3m2!1sen!2sbd!4v1626240321837!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <h2>OW 24 Hour Emergency Electricians London</h2>
      </div>
    </div>
  );
};

export default GoogleMap;
