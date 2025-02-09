import Head from 'next/head';
import type { Metadata } from 'next';

import { Post } from "@/interfaces/post";
// import { useEffect } from 'react';

type Props = {
  post: Post;
};


{/* <link rel="manifest" href= "https://www.owelectric.co.uk/favicon/site.webmanifest" /> */}

// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "OW London Electrician & Home Automation Engineers",
//   "url": "https://www.owelectric.co.uk/",
//   "logo": "https://www.owelectric.co.uk/favicon/favicon-128x128.png",
//   "image": [
//     "https://www.owelectric.co.uk/photos/4x3/Team-Electrician-Van-with-tools.jpg",
//     "https://www.owelectric.co.uk/photos/4x3/Team-Electrician-Van-with-tools.jpg",
//     "https://www.owelectric.co.uk/photos/16x9/Team-Electrician-Van-with-tools.jpg"
//   ],
//   "description": "#1 electrical contractor in London for Residential, Commercial & Emergency electrical services. 30 min response time. Call 07307565444",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "123 Rainham Rd N",
//     "addressLocality": "Dagenham",
//     "postalCode": "RM10 7FD",
//     "addressCountry": "UK"
//   },
//   "email": "info@owelectric.co.uk",
//   "telephone": "+447307565444",
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "contactType": "customer service",
//     "telephone": "+447307565444",
//     "email": "info@owelectric.co.uk"
//   }
// };


export function SchemaHead({ post }: Props) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": post?.schema?.type ?? 'Article',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post?.canonicalUrl || `https://www.owelectric.co.uk/posts/${post?.slug}`
    },
    "headline": post?.title,
    "description": post?.excerpt,
    "image": [

      post?.ogImage, ...(post?.topImage ? [post?.topImage.url] : []), ...(post?.midImage ? [post?.midImage.url] : []), ...(post?.bottomImage ? [post?.bottomImage.url] : [])
    ],
    "author": {
      "@type": "Person",
      "name": post?.author?.name
    },
    "publisher": {
      "@type": "Organization",
      "name": post?.schema?.publication ?? 'Default Publication',
      "logo": {
        "@type": "ImageObject",
        "url": post?.author?.picture
      }
    },
    "datePublished": post?.date,
    "dateModified": post?.lastmod || post?.date,
    "articleSection": post?.schema?.articleSection ?? 'Default Section',
    "keywords": post?.keywords?.join(', ') ?? '',
    "categories": post?.categories?.join(', ') ?? '',
    "faqPage": post?.faq?.map(faq => ({
      "@type": "Question",
      "name": faq?.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq?.answer
      }
    })) ?? [],
    "video": [
      ...(post?.topVideo ? [{ "@type": "VideoObject", "url": post?.topVideo.url, "name": post?.topVideo.title || "" }] : []),
      ...(post?.midVideo ? [{ "@type": "VideoObject", "url": post?.midVideo.url, "name": post?.midVideo.title || "" }] : []),
      ...(post?.bottomVideo ? [{ "@type": "VideoObject", "url": post?.bottomVideo.url, "name": post?.bottomVideo.title || "" }] : [])
    ]
  };

  // // Optional console.log for debugging
  // useEffect(() => {
  //   console.log("Schema JSON-LD:", jsonLd);
  // }, [jsonLd]);
  
  return (
    <Head>
      <title>{post?.title}</title>
      <meta name="description" content={post?.excerpt} />
      <meta name="keywords" content={post?.keywords?.join(', ')} />
      {post?.canonicalUrl && <link rel="canonical" href={post.canonicalUrl} />}
      <meta property="og:title" content={post?.title} />
      <meta property="og:description" content={post?.excerpt} />
      <meta property="og:image" content={post?.ogImage.url} />
      <meta property="og:url" content={post?.canonicalUrl || `https://www.owelectric.co.uk/posts/${post?.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content={post?.lang} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={post?.social?.twitter} />
      {post?.categories?.map(category => <meta key={category} property="article:section" content={category} />)}
      {post?.tags?.map(tag => <meta key={tag} property="article:tag" content={tag} />)}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
};

export default SchemaHead;
