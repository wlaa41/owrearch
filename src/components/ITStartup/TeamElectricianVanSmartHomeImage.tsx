// src/components/ElectricianVanSmartHomeImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../../components/ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/Team-Electrician-Van-with-tools",
  alt: "OW London, Electrician, Smart Home Engineers team electrician van in London", 
  title: "OW London, Electrician, Smart Home Engineers Team Electrician Service Van",
  author: "OW London, Electrician, Smart Home Engineers", 
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "Free to use under Creative Commons",
  description: "OW London, Electrician, Smart Home Engineers team electrician van in London offering smart home and electrical services.",
  keywords: [
    "OW London, Electrician, Smart Home Engineers team electrician van", "London electrician", "smart home service van", 
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
    "Chelsea home automation", "Westminster electrician", 
    "Camden electrical repairs", "Islington PAT testing", 
    "Greenwich EV charger installation", "Hackney rewiring projects", 
    "Clapham security systems", "Shoreditch data cabling", 
    "Battersea appliance hookups", "Hampstead emergency electrical services", 
    "Mayfair certified electricians", "Fulham NICEIC certified"
  ],
  // width: 1200,
  // height: 800,
  caption: "OW London, Electrician, Smart Home Engineers team electrician van parked in London, ready to provide smart home and electrical services.",
  pageUrl: "https://www.owresearch.netlify.app/services/ow-london-electrician-smart-home-engineers",
  thumbnailSrc: "/images/Team-Electrician-Van-with-tools-thumbnail.jpg",
  thumbnailWidth: 300,
  thumbnailHeight: 200,
};

const ElectricianVanSmartHomeImage: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ElectricianVanSmartHomeImage;

// Don't forget to name the photo with the name suggested and also the naming of the thumbnail and the name of the image with a smaller size as follows: source media="(max-width: 799px)" srcSet={`${src}-799.webp`}
