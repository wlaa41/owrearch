import { Author } from "./author";

type Image = {
  url: string;
  altText?: string;
};

type OGImage={
  url: string;
}

type Video = {
  url: string;
  title?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

// type Meta = {
//   canonicalUrl?: string;
//   schema?: {
//     type: string;
//     articleSection: string;
//     publication: string;
//   };
//   social?: {
//     twitter?: string;
//     facebook?: string;
//   };
//   lang: string; // Moved lang to meta
//   layout: string; // Moved layout to meta
//   faq?: FAQ[];  // Optional FAQs
// };

export type Post = {
  slug: string;
  title: string;
  date: string;
  lastmod?: string;   // Optional last modified date
  coverImage: string ; // Optional cover image
  miniImage: string ; // Optional cover image
  tags?: string[];
  categories?: string[];
  author: Author;
  excerpt: string;    // Adding an excerpt field, which is often used in posts
  ogImage: OGImage;    // Optional open graph image
  content: string;
  preview?: boolean;
  topImage?: Image;    // Optional top image
  midImage?: Image;    // Optional mid image
  bottomImage?: Image; // Optional bottom image
  topVideo?: Video;    // Optional top video
  midVideo?: Video;    // Optional mid video
  bottomVideo?: Video; // Optional bottom video
  keywords: string[];
  canonicalUrl?: string;
  faq: FAQ[];
  schema: {
    type: string;
    articleSection: string;
    publication: string;
  };
  social: {
    twitter?: string;
    facebook?: string;
  };
  lang: string;
  layout: string;
};

export interface SearchProps {
  posts: Post[];
}
