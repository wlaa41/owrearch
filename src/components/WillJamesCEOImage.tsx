// src/components/WillJamesCEOImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../components/ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  // Updated filename to be more descriptive and contain keywords such as Will James, CEO, AI, Robotics
  // The filename should ideally include specific descriptors of the image and broader terms relevant to the page's content.
  // This helps improve both image searchability and the overall SEO of the page.
  src: "/images/will-james-ceo-ow-london-electrician-ai-robotics",
  alt: "Will James, CEO of OW London Electrician, expert in AI and Robotics, standing outdoors with a helmet",
  title: "Will James, CEO of OW London Electrician - AI and Robotics Expert",
  author: "OW London, Electrician, Smart Home Engineers", // DON'T CHANGE THIS ENTRY 
  copyright: "OW London, Electrician, Smart Home Engineers",  // DON'T CHANGE THIS ENTRY 
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-26",
  usageTerms: "Free to use under Creative Commons",
  description: "Will James, CEO of OW London Electrician, with a PhD in AI and Robotics, standing outdoors holding a helmet, showcasing expertise in technology and leadership.",
  
  // Keywords in image metadata should ideally be descriptive of the image itself to improve image searchability and relevance.
  // However, they can also be somewhat general to the whole page if the image is strongly representative of the content on the page.
  keywords: [
    "Will James", "CEO OW London Electrician", "AI expert", "robotics specialist", "OW London leadership", 
    "technology leadership", "AI and robotics", "tech CEO", "smart home technology", "AI in London", 
    "robotics innovation", "smart home engineers", "tech industry leader", 
    "artificial intelligence", "PhD in AI", "PhD in robotics", "AI advancements", 
    "robotics development", "future of technology", "CEO portrait", 
    "professional leadership", "tech visionary", "innovative leader", "AI research", 
    "robotics research", "smart technology expert", "London tech companies", 
    "OW London Electrician services", "AI applications", "robotics applications", 
    "leading tech company", "AI and smart homes", "technology and innovation",
  ],
  width: 1200,  // Adjusted for responsive design
  height: 800,  // Adjusted for responsive design
  caption: "Will James, CEO of OW London Electrician, holding a helmet and showcasing his expertise in AI and robotics.",
  // Updated pageUrl to be more descriptive
  // A more descriptive URL helps with SEO as it provides search engines with more context about the content of the page.
  pageUrl: "https://www.owresearch.netlify.app/about-us/will-james-ceo-ow-london-electrician-ai-robotics",
  // Updated thumbnail filename to be more descriptive and contain keywords such as Will James, CEO, AI, Robotics
  // This helps improve both image searchability and the overall SEO of the page.
  thumbnailSrc: '/images/will-james-ceo-ow-london-electrician-ai-robotics',
  thumbnailWidth: 300,  // Default
  thumbnailHeight: 200, // Default
};

const WillJamesCEOImage: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default WillJamesCEOImage;

