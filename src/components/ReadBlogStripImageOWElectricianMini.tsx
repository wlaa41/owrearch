
// src/components/ElectricianVanSmartHomeImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from './ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/read-blog-strip-ow-electrician-mini",
  alt: "OW London, Electrician, Smart Home Engineers read blog strip",
  title: "OW London, Electrician, Smart Home Engineers Blog Post Strip",
  author: "OW London, Electrician, Smart Home Engineers", 
  copyright: "OW London, Electrician, Smart Home Engineers", 
  credit: "Photo by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "copyright OW ltd and Will Jam",
  description: "OW London, Electrician, Smart Home Engineers read blog strip image featuring a cartoon character reading.",
  keywords: [
    "OW London, Electrician, Smart Home Engineers", "read blog strip", "electrician blog", "smart home blog", 
    "electrical services blog", "home automation blog", "London electricians", "smart home technology", 
    "electrical tips", "home automation ideas", "electrician advice", "smart home innovations", 
    "blog post illustration", "cartoon reading", "electrician community", "London smart home engineers", 
    "blog post OW London", "smart home blog content", "electrical blog content", 
    "electrician information", "smart home systems", "residential electrical services", 
    "commercial electrical services", "energy efficiency tips", "London electrical blog", 
    "home automation trends", "electrical safety advice", "certified electricians blog", 
    "NICEIC certified electricians", "smart home blog posts", "London electrical services", 
    "electrical community blog", "smart home blog London", "OW London blog strip",
  ],
  width: 1200, 
  height: 800, 
  caption: "OW London, Electrician, Smart Home Engineers read blog strip featuring a cartoon character reading.",
  pageUrl: "https://www.owelectric.co.uk/blog/read-blog-strip-ow-electrician",
  thumbnailSrc: '/images/read-blog-strip-ow-electrician',
  thumbnailWidth: 300, 
  thumbnailHeight: 200, 
};

const ReadBlogStripImageOWElectricianMini: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default ReadBlogStripImageOWElectricianMini;