// src/components/ImageElectricianWorkingOnWiring.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../../components/ImageOptimizedWithJsonId';
import ow_electrician from '../../../public/images/ow-electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-rewiring.webp'


const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/ow-electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-rewiring",
  alt: "OW London, Electrician, Smart Home Engineers working on wiring",
  title: "OW London, Electrician, Smart Home Engineers Working on Wiring",
  author: "OW London, Electrician, Smart Home Engineers",
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "Free to use under Creative Commons",
  description: "OW London, Electrician, Smart Home Engineers working on wiring for a smart home installation.",
  keywords: [
    "OW London, Electrician, Smart Home Engineers wiring", "London electrician wiring", "smart home installation",
    "electrical wiring services", "home automation wiring", "electrical installation", "lighting design", "electrical repairs",
    "PAT testing", "EV charger installation", "rewiring projects", "CCTV installation", "alarm systems", "security systems",
    "data cabling", "appliance hookups", "fault finding", "emergency electrical services", "smart home technology",
    "certified electricians", "NICEIC certified", "electrical safety", "commercial electrical services", "residential electrical services",
    "industrial electrical services", "same-day electrical service", "portable appliance testing", "light fixture repair",
    "electrical rewiring", "energy efficiency planning", "thermal imaging surveys", "electrical inspections",
    "electrical component upgrades", "generator backup", "routine electrical maintenance", "Canary Wharf Electricians",
    "E15 smart home", "Kensington electrical services", "E14 home automation", "Westminster electrician",
    "Camden electrical repairs", "Islington PAT testing", "Greenwich EV charger installation", "Hackney rewiring projects",
    "Clapham security systems", "Shoreditch data cabling", "Battersea appliance hookups", "Hampstead emergency electrical services",
    "Mayfair certified electricians", "Fulham NICEIC certified"
  ],
  caption: "OW London, Electrician, Smart Home Engineers working on wiring for a smart home installation.",
  pageUrl: "https://www.owresearch.netlify.app/services/ow-electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-rewiring",
  thumbnailSrc: "/images/ow-electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-rewiring",
  thumbnailWidth: 300,
  thumbnailHeight: 200,
};

const ImageElectricianWorkingOnWiring: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ImageElectricianWorkingOnWiring;

// Don't forget to name the photo and thumbnails with the suggested names
// The naming of the thumbnail and the name of the image with smaller size should be as follows:
// source media="(max-width: 799px)" srcSet={`${src}-799.webp`}
