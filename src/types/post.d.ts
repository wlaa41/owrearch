// src/types/post.d.ts

export interface ImageSchema  {
    url: string;           // URL of the image
    name?: string;         // Optional name of the image
    description?: string;  // Optional description of the image
    creator?: string;      // Optional creator of the image
    keywords?: string[];   // Optional keywords for the image
}

export interface FAQItem {
    question: string;
    answer: string;
}


export interface Post {
    slug: string;           // Unique identifier for the post derived from the filename or front matter
    title: string;          // Title of the post
    contentHtml: string;    // The HTML content of the post
    date: string;           // Publication date
    author: string;         // Author of the post
    tags: string[];         // Tags associated with the post
    images?: ImageSchema [];       // Array of image objects
    video?: string;         // Optional URL to a video
    description?: string;   // Optional short description of the post
    ogImage?: string;       // Optional Open Graph image URL
    ogTitle?: string;       // Optional Open Graph title
    ogDescription?: string; // Optional Open Graph description
    ogVideo?: string;        // Optional Open Graph video URL
    faq: FAQItem[];
    keywords: string[];    // Optional keywords for the post
    categories: string[];  // Optional categories for the post
}