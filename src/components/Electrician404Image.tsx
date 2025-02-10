// src/components/Electrician404Image.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../components/ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/ow-electrician-home-automation-404-not-found",
  alt: "Ow ROQAI, Robotics & AI Engineers 404 page",
  title: "Ow ROQAI, Robotics & AI Engineers 404 Page",
  author: "Ow ROQAI, Robotics & AI Engineers",
  copyright: "Ow ROQAI, Robotics & AI Engineers",
  credit: "Image by Ow ROQAI, Robotics & AI Engineers",
  dateCreated: "2024-06-30",
  usageTerms: "copyright Ow ROQAI ltd and Will Jam",
  description: "404 error page for Ow ROQAI website, depicting a cartoon character opening a door labeled '404'.",
  keywords: [
    "Ow ROQAI", "Robotics & AI 404 page", "Engineering 404 page", 
    "404 error page", "AI research error page", 
    "robotics services error page", "website error page", 
    "home automation error", "engineering website 404"
  ],
  width: 1200,
  height: 800,
  caption: "Ow ROQAI 404 error page with a cartoon character opening a door labeled '404'.",
  pageUrl: "https://www.owresearch.netlify.app/404",
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
