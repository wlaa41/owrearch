// src/components/ElectricianBlueprintSmartHomeImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/ow-electrician-home-automtion-wood-logo-london",
  alt: "OW London, Electrician, Smart Home Engineers blueprint in London", 
  title: "OW London, Electrician, Smart Home Engineers Blueprint",
  author: "OW London, Electrician, Smart Home Engineers", 
  copyright: "OW London, Electrician, Smart Home Engineers",  
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "copyright OW ltd and Will Jam",
  description: "OW London, Electrician, Smart Home Engineers blueprint in London showcasing home automation and electrical design.",
  keywords: [
    "OW London, Electrician, Smart Home Engineers blueprint", "London electrician", "smart home blueprint", 
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
  caption: "OW London, Electrician, Smart Home Engineers blueprint showing home automation and electrical design.",
  pageUrl: "https://www.owresearch.netlify.app/contact/",
  thumbnailSrc: '/images/ow-electrician-home-automtion-wood-logo-london',
  thumbnailWidth: 300,  
  thumbnailHeight: 200, 
};

const ElectricianBlueprintSmartHomeImage: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ElectricianBlueprintSmartHomeImage;

// Don't forget to name the photo with the suggested name "ow-electrician-home-automtion-wood-logo-london"
// Also, name the thumbnail and the image with smaller size as follows:
// source media="(max-width: 799px)" srcSet={`${src}-799.webp`
