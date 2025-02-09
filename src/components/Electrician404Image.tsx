// src/components/Electrician404Image.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../components/ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/ow-electrician-home-automation-404-not-found",
  alt: "OW London, Electrician, Smart Home Engineers 404 page",
  title: "OW London, Electrician, Smart Home Engineers 404 Page",
  author: "OW London, Electrician, Smart Home Engineers",
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Image by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-30",
  usageTerms: "copyright OW ltd and Will Jam",
  description: "404 error page for OW London, Electrician, Smart Home Engineers website, depicting a cartoon character opening a door labeled '404'.",
  keywords: [
    "OW London", "Electrician 404 page", "Smart Home Engineers 404 page", 
    "404 error page", "London electrician error page", 
    "smart home services error page", "website error page", 
    "home automation error", "electrician website 404"
  ],
  width: 1200,
  height: 800,
  caption: "OW London, Electrician, Smart Home Engineers 404 error page with a cartoon character opening a door labeled '404'.",
  pageUrl: "https://www.owelectric.co.uk/404",
  thumbnailSrc: '/images/ow-electrician-home-automation-404-not-found',
  thumbnailWidth: 300,
  thumbnailHeight: 200,
};

const Electrician404Image: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default Electrician404Image;

// Don't forget to name the photo with the suggested name, as well as the thumbnail and smaller size image with src-799.webp
