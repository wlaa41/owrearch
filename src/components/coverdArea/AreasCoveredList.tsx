"use client";


import React from 'react';
import { MapPin } from 'react-feather';
import Link from 'next/link';
import Head from 'next/head';

const AreasCoveredList: React.FC = () => {
  const areas = [
    "Aldgate", "Romford", "Ilford", "Dagenham", "Brentwood", "Barking", "Bermondsey", "Bethnal Green", "Blackheath", "Bow",
    "Canary Wharf", "Central London", "Canonbury", "Charlton", "Clapton",
    "Docklands", "East London", "Greenwich", "Hackney", "Holloway", "Islington",
    "Lewisham", "Leyton", "Limehouse", "Old Street", "Plaistow", "Shoreditch",
    "Sidcup", "Stoke Newington", "Stratford", "Surrey Quays", "Tower Hill", "Walthamstow", "West Ham",
    "Whitechapel", "White City", "Winchmore Hill", "Woolwich"
  ];

  return (
    <div className="ptb-80">
      {/* <Head>
        <title>Areas We Cover - OW London, Electrician, Smart Home Engineers</title>
        <meta name="description" content="OW London covers various areas across London, including Aldgate, Barking, Canary Wharf, and more. Book now to check our team availability." />
        <meta name="keywords" content="London electrician, smart home services, OW London, Aldgate electrician, Barking electrician, Canary Wharf electrician" />
        <meta property="og:title" content="Areas We Cover - OW London, Electrician, Smart Home Engineers" />
        <meta property="og:description" content="OW London covers various areas across London, including Aldgate, Barking, Canary Wharf, and more. Book now to check our team availability." />
        <meta property="og:image" content="/public/favicon/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.owresearch.netlify.app/areas-covered" />
        <meta name="robots" content="index, follow" />
      </Head> */}
      <div className="container" itemScope itemType="http://schema.org/Service">
        <meta itemProp="serviceType" content="Electrician and Smart Home Services" />
        <meta itemProp="provider" content="OW London, Electrician, Smart Home Engineers" />
        <meta itemProp="areaServed" content="London" />
        <meta itemProp="url" content="https://www.owresearch.netlify.app/areas-covered" />
        {/* <meta itemProp="logo" content="/public/favicon/android-chrome-512x512.png" /> */}
        <h2>We are near you. Book now and check our team availability.</h2>
        <h3>Find trusted electrcians locally.</h3>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 services-content" id='areacoverd'>
            <div className="cards-conatiner">
              {areas.map(area => (
                <Link key={area} href={`/london/${area.toLowerCase().replace(/ /g, '-')}-electrician-near-me`} legacyBehavior style={{ cursor: 'pointer' }}>
                  <div className="card-container" itemScope itemType="http://schema.org/Place" style={{ cursor: 'pointer' }}>
                    <meta itemProp="name" content={area} />
                    <div className="box">
                      <MapPin />
                      <a itemProp="url" aria-label={`${area} electrician services`}>{area}</a>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`

        .services-left-image .section-title {
          text-align: left;
        }

        .services-content .cards-conatiner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          gap: 10px;
        }
        #areacoverd.services-content{
            border:none;
            padding: 5px !important;
            &::after{
                content: none !important;
            }

        }
        .box {
            min-width: 177px;
        }

        .box svg {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default AreasCoveredList;
