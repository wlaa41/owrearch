// src/components/ImageLongWithTableOWElectrician.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../components/ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/ow-electrician-home-automation-electric-plan-banner",
  alt: "OW London, Electrician, Smart Home Engineers service plan on a table",
  title: "OW London, Electrician, Smart Home Engineers Electric Plan",
  author: "OW London, Electrician, Smart Home Engineers",
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-29",
  usageTerms: "copyright OW ltd and Will Jam",
  description: "OW London, Electrician, Smart Home Engineers electric plan on a drafting table.",
  keywords: [
    "OW London, Electrician, Smart Home Engineers plan", "London electrician", "smart home service plan", 
    "electrician services London", "home automation London", 
    "electrical installation", "lighting design", "electrical repairs", 
    "PAT testing", "EV charger installation", "rewiring projects", 
    "CCTV installation", "alarm systems", "security systems", "data cabling", 
    "appliance hookups", "fault finding", "emergency electrical services", 
    "smart home technology", "certified electricians", "NICEIC certified", 
    "electrical safety", "commercial electrical services", 
    "residential electrical services", "industrial electrical services", 
    "same-day electrical service", "portable appliance testing", 
    "light fixture repair", "electrical rewiring", "energy efficiency planning", 
    "thermal imaging surveys", "electrical inspections", 
    "electrical component upgrades", "generator backup", 
    "routine electrical maintenance", "Canary Wharf Electricians", 
    "E15 smart home", "Kensington electrical services", 
    "E14 home automation", "Westminster electrician", 
    "Camden electrical repairs", "Islington PAT testing", 
    "Greenwich EV charger installation", "Hackney rewiring projects", 
    "Clapham security systems", "Shoreditch data cabling", 
    "Battersea appliance hookups", "Hampstead emergency electrical services", 
    "Mayfair certified electricians", "Fulham NICEIC certified", "Al-amin Electrical Contractor",
  ],
  width: 1200,
  height: 800,
  caption: "OW London, Electrician, Smart Home Engineers service plan on a table.",
  pageUrl: "https://www.owresearch.netlify.app/services/ow-london-electrician-smart-home-engineers",
  thumbnailSrc: '/images/ow-electrician-home-automation-electric-plan-banner',
  thumbnailWidth: 300,
  thumbnailHeight: 200,
};

const ImageLongWithTableOWElectrician: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ImageLongWithTableOWElectrician;
