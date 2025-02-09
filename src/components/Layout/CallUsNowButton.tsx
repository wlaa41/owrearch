'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import React from 'react';


interface CallUsNowButtonProps {
  className?: string;
  companyName?: string;
  description?: string;
  streetAddress?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  email?: string;
  telephone?: string;
}

const CallUsNowButton: React.FC<CallUsNowButtonProps> = ({
  className,
  companyName = 'OW London Emergency Electrician',
  description = 'OW Electrical provides top-rated, certified electrician services in London. From emergency electrical repairs and installations to domestic and commercial needs, our reliable electricians handle it all. We offer 24/7 emergency services, smart home installations, fuse board replacements, and energy-efficient lighting solutions. Trust OW Electrical for professional and affordable electrical services in London.',
  streetAddress = 'Rainham Rd N.',
  city = 'London',
  region = 'London',
  postalCode = 'E15',
  country = 'UK',
  email = 'info@owelectric.co.uk',
  telephone = '+44 7307 565 444'
}) => {
  const phoneNumber = "00447307565444";



  return (
    <div className={`container ${className}`} id='callmecontainer' itemScope itemType="http://schema.org/LocalBusiness">
      <meta itemProp="name" content={companyName} />
      <meta itemProp="description" content={description} />
      <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content={streetAddress} />
        <meta itemProp="addressLocality" content={city} />
        <meta itemProp="addressRegion" content={region} />
        <meta itemProp="postalCode" content={postalCode} />
        <meta itemProp="addressCountry" content={country} />
      </div>
      <meta itemProp="email" content={email} />
      <meta itemProp="telephone" content={telephone} />
      <div className="bar-call-us-now">
        <a
          onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
          href={`tel:${phoneNumber}`}
          className="btn btn-primary"
          aria-label="Call us now"
          rel="nofollow"
        // onClick={handleButtonClick}
        >
          <i className="fi-rr-phone-call" aria-hidden="true"></i>
          <span itemProp="name">Call Us Now</span>
        </a>
      </div>
    </div>

  );
};

export default CallUsNowButton;
