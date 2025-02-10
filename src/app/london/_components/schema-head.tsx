import Head from 'next/head';
import { Post } from "@/interfaces/post";
// import { useEffect } from 'react';

type Props = {
  post: Post;
};

export function SchemaHead({ post }: Props) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": post?.schema?.type ?? 'Article',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post?.canonicalUrl || `https://www.owresearch.netlify.app/posts/${post?.slug}`
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
      <meta property="og:url" content={post?.canonicalUrl || `https://www.owresearch.netlify.app/posts/${post?.slug}`} />
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
