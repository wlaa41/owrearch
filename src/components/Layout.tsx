// import React from 'react';
// import Head from 'next/head';
// import JsonLd from './JsonLd';

// interface LayoutProps {
//   children: React.ReactNode;
//   pageTitle: string;
//   pageDescription: string;
//   pageKeywords: string[];
//   pageUrl: string;
//   datePublished: string;
//   dateModified: string;
//   ogImage: string;
//   twitterHandle: string;
// }

// const Layout: React.FC<LayoutProps> = ({
//   children,
//   pageTitle,
//   pageDescription,
//   pageKeywords,
//   pageUrl,
//   datePublished,
//   dateModified,
//   ogImage,
//   twitterHandle,
// }) => {
//   const pageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": pageTitle,
//     "description": pageDescription,
//     "url": pageUrl,
//     "author": {
//       "@type": "Organization",
//       "name": "OW London Electrician and Home Automation",
//       "url": "https://www.owresearch.netlify.app/",
//     },
//     "datePublished": datePublished,
//     "dateModified": dateModified,
//     "keywords": pageKeywords.join(', '),
//   };

//   const companyJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Electrician",
//     "name": "OW London, Electrician, Smart Home Engineers",
//     "url": "https://www.owresearch.netlify.app/",
//     "logo": "/images/logo.png",
//     "image": [
//       "/images/ow-london-electrician-smart-home-thumbnail.jpg", 
//       "/images/ow-london-electrician-smart-home-799.webp"
//     ],
//     "description": "OW London, Electrician, Smart Home Engineers van in London offering smart home and electrical services.",
//     "telephone": "00447307565444",
//     "sameAs": [
//       "https://www.facebook.com/YourPage",
//       "https://www.twitter.com/YourHandle",
//       "https://www.linkedin.com/company/YourCompany"
//     ],
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Your Street Address",
//       "addressLocality": "London",
//       "addressRegion": "London",
//       "postalCode": "Your Postal Code",
//       "addressCountry": "UK"
//     },
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": "00447307565444",
//       "contactType": "Customer Service",
//       "areaServed": "GB",
//       "availableLanguage": "English"
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content={pageKeywords.join(', ')} />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:image:alt" content={pageTitle} />
//         <meta property="og:url" content={pageUrl} />
//         <meta property="og:site_name" content="OW London, Electrician, Smart Home Engineers" />
//         <meta property="og:phone_number" content="00447307565444" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />
//         <meta name="twitter:image" content={ogImage} />
//         <meta name="twitter:image:alt" content={pageTitle} />
//         <meta name="twitter:site" content={twitterHandle} />

//         {/* LinkedIn */}
//         <meta property="linkedin:type" content="article" />
//         <meta property="linkedin:title" content={pageTitle} />
//         <meta property="linkedin:description" content={pageDescription} />
//         <meta property="linkedin:image" content={ogImage} />
//         <meta property="linkedin:image:alt" content={pageTitle} />
//         <meta property="linkedin:url" content={pageUrl} />
//         <meta property="linkedin:site_name" content="OW London, Electrician, Smart Home Engineers" />

//         {/* Pinterest */}
//         <meta name="pinterest-rich-pin" content="true" />
//         <meta property="pinterest:type" content="article" />
//         <meta property="pinterest:title" content={pageTitle} />
//         <meta property="pinterest:description" content={pageDescription} />
//         <meta property="pinterest:image" content={ogImage} />
//         <meta property="pinterest:image:alt" content={pageTitle} />
//         <meta property="pinterest:url" content={pageUrl} />
//         <meta property="pinterest:site_name" content="OW London, Electrician, Smart Home Engineers" />
//       </Head>
//       <JsonLd jsonLd={pageJsonLd} />
//       <JsonLd jsonLd={companyJsonLd} />
//       <div>
//         {children}
//       </div>
//     </>
//   );
// };

// export default Layout;
