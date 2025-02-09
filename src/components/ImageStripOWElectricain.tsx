
// src/components/ElectricianVanSmartHomeImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from './ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/strip-ow-electrician-home-automation-london-vans-offices",
  alt: "OW London, Electrician, Smart Home Engineers van in London", 
  title: "OW London, Electrician, Smart Home Engineers Service Van",
  author: "OW London, Electrician, Smart Home Engineers",
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "copyright OW ltd and Will Jam",
  description: "OW London, Electrician, Smart Home Engineers van in London offering smart home and electrical services.",
  keywords: [
    "OW London, Electrician, Smart Home Engineers van", "London electrician", "smart home service van", 
    "electrician services London", "home automation London", 
    "electrical installation", "lighting design", "electrical repairs", 
    "PAT testing", "EV charger installation", "rewiring projects", 
    "CCTV installation", "alarm systemsP", "security systems", "data cabling", 
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
  caption: "OW London, Electrician, Smart Home Engineers van parked in London, ready to provide smart home and electrical services.",
  pageUrl: "https://www.owelectric.co.uk/services/strip-ow-electrician-home-automation-london-vans-offices-engineers",
  thumbnailSrc: '/images/strip-ow-electrician-home-automation-london-vans-offices',
  thumbnailWidth: 300,
  thumbnailHeight: 200,
};

const ImageStripOWElectrcain: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ImageStripOWElectrcain;

// Don't forget to name the photo with the suggested name and the naming of the thumbnail and also the name of image with smaller size as follow source media="(max-width: 799px)" srcSet={`${src}-799.webp`.
