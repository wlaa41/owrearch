// src\components\ImageOptimizedWithJsonId.tsx
import React from 'react';
import JsonLd from './JsonLd';
// import { useEffect } from 'react';

export interface ImageOptimizedWithJsonIdProps {
  src: string;
  alt: string;
  title: string;
  author: string;
  copyright: string;
  credit: string;
  dateCreated: string;
  usageTerms: string;
  description: string;
  keywords: string[];
  width?: number; // Made optional
  height?: number; // Made optional
  caption: string;
  pageUrl: string;
  thumbnailSrc: string;  // Added thumbnail source
  thumbnailWidth?: number; // Added thumbnail width
  thumbnailHeight?: number; // Added thumbnail height
  className?: string;  // Optional className prop
  [x: string]: any;    // To pass through additional props
}

const ImageOptimizedWithJsonId: React.FC<ImageOptimizedWithJsonIdProps> = ({
  src,
  alt,
  title,
  author,
  copyright,
  credit,
  dateCreated,
  usageTerms,
  description,
  keywords,
  width = 800,  // Default width
  height = 600,  // Default height
  caption,
  pageUrl,
  thumbnailSrc,  // Destructure thumbnail source
  thumbnailWidth = 300,  // Default thumbnail width
  thumbnailHeight = 200,  // Default thumbnail height
  lazy = true, // Default
  className,
  ...rest // To capture any additional props
}) => {
  // useEffect(() => {
  //   // Call to server to update sitemap
  //   fetch('/api/update-sitemap', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       pageUrl,
  //       src,
  //       caption,
  //       title,
  //       license: usageTerms,
  //     }),
  //   });
  // }, [pageUrl, src, caption, title, usageTerms]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": src,
    "url": src,
    "description": description,
    "name": title,
    "author": {
      "@type": "Person",
      "name": author,
    },
    "copyrightHolder": {
      "@type": "Person",
      "name": copyright,
    },
    "creditText": credit,
    "copyrightYear": new Date(dateCreated).getFullYear(),
    "datePublished": dateCreated,
    "dateModified": dateCreated,
    "license": usageTerms,
    "thumbnail": [
      {
        "@type": "ImageObject",
        "contentUrl": thumbnailSrc,
        "width": thumbnailWidth.toString(),
        "height": thumbnailHeight.toString(),
      }
    ],
    "width": width.toString(),
    "height": height.toString(),
    "keywords": keywords,
  };

  return (
    <>
      <JsonLd jsonLd={jsonLd} />
      <picture className={className} {...rest}>
        <source media="(max-width: 799px)" srcSet={`${src}-799.webp`} />
        <source media="(min-width: 800px)" srcSet={`${src}.webp`} />
        
      <video autoPlay loop muted playsInline>
        <source src="/videos/Drone_Lab_Innovation_simple_Courses.mp4" type="video/mp4" />
          className='imgclass'
          src={`${src}.webp`}
        alt={alt}
          title={title}
          width={width}
          height={height}
          loading={lazy ? 'lazy' : 'eager'}
          {/* // style={{ width: '100%', height: 'auto' }} */}
          </video>
      </picture>
    </>
  );
};

export default ImageOptimizedWithJsonId;
