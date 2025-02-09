// src/components/ElectricianVanSmartHomeImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../../components/ImageOptimizedWithJsonId';




const seoData: ImageOptimizedWithJsonIdProps = {
  // Updated filename to be more descriptive and contain keywords such as OW London, electrician, smart home
  // The filename should ideally include specific descriptors of the image and broader terms relevant to the page's content.
  // This helps improve both image searchability and the overall SEO of the page.
  src: "/images/ow-london-electrician-smart-home",
  alt: "OW London, Electrician, Smart Home Engineers van in London",
  title: "OW London, Electrician, Smart Home Engineers Service Van",
  author: "OW London, Electrician, Smart Home Engineers",
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "Free to use under Creative Commons",
  description: "OW London, Electrician, Smart Home Engineers van in London offering smart home and electrical services.",
  
  // Keywords in image metadata should ideally be descriptive of the image itself to improve image searchability and relevance.
  // However, they can also be somewhat general to the whole page if the image is strongly representative of the content on the page.
  // In this case, the keywords include a mix of both specific descriptors of the image and broader terms relevant to the page's content.
  // Additionally, to enhance local SEO and target specific service areas in London, we've included keywords for prominent locations and business destinations.
  // These keywords will help improve visibility in search results for users searching for electrical services in specific areas.
  // For example, keywords like "Canary Wharf Electricians" and "E15 smart home" target potential customers in those regions.
  // The goal is to capture a wider audience by being specific about the services offered and the locations served.
  keywords: [
    "OW London, Electrician, Smart Home Engineers van", "London electrician", "smart home service van", 
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
    "London home automation", "Westminster electrician", 
    "Camden electrical repairs", "Islington PAT testing", 
    "Greenwich EV charger installation", "Hackney rewiring projects", 
    "Clapham security systems", "al-amin electric", "Hampstead emergency electrical services", 
    "Mayfair certified electricians", "Fulham NICEIC certified"
  ],
  // width: 1200,  // Adjusted for responsive design
  // height: 800,  // Adjusted for responsive design
  caption: "OW London, Electrician, Smart Home Engineers van parked in London, ready to provide smart home and electrical services.",
  // Updated pageUrl to be more descriptive
  // A more descriptive URL helps with SEO as it provides search engines with more context about the content of the page.
  pageUrl: "https://www.owelectric.co.uk/services/ow-london-electrician-smart-home-engineers",
  // Updated thumbnail filename to be more descriptive and contain keywords such as OW London, electrician, smart home
  // This helps improve both image searchability and the overall SEO of the page.
  thumbnailSrc: "/images/ow-london-electrician-smart-home-engineers-van-thumbnail.jpg",
  thumbnailWidth: 300,  // Default
  thumbnailHeight: 200, // Default
};

const ElectricianVanSmartHomeImage: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ElectricianVanSmartHomeImage;
