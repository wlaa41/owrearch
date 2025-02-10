This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Image Optimization with JSON-LD in Next.js

This project includes two main components, `JsonLd` and `ImageOptimizedWithJsonId`, which help optimize images for SEO by embedding JSON-LD structured data.

## Why Use JsonLd and ImageOptimizedWithJsonId Components

### JsonLd Component

**SEO Benefits**: JSON-LD (JavaScript Object Notation for Linked Data) is the preferred format for structured data by Google. It helps search engines understand the context of your content better, which can improve your search engine rankings and increase visibility.

**Ease of Implementation**: JSON-LD can be added to the `<head>` section of your HTML document without interfering with your HTML structure.

**Flexibility**: It allows for easy updates and scalability, especially in dynamic JavaScript frameworks like Next.js.

### ImageOptimizedWithJsonId Component

**Centralized Image Optimization**: This component combines image rendering with JSON-LD structured data, ensuring that all important metadata is included directly with the image.

**Reusability**: By encapsulating the logic in a reusable component, you maintain a clean codebase and avoid redundancy.

**Dynamic Data Handling**: It allows for dynamic data insertion, making it easier to manage and update images across your site.

## How to Use

### JsonLd Component

1. **Location**: `components/JsonLd.tsx`
2. **Purpose**: Injects JSON-LD structured data into the `<head>` of your document.

### ImageOptimizedWithJsonId Component

1. **Location**: `components/ImageOptimizedWithJsonId.tsx`
2. **Purpose**: Renders an image along with its associated JSON-LD structured data for SEO purposes.

### Using the ImageOptimizedWithJsonId Component in Your Page

1. **Location**: Use this component in your pages to include optimized images with structured data.

#### Example Usage in a Page

Refer to `pages/index.tsx` for an example of how to use the `ImageOptimizedWithJsonId` component in your Next.js pages.

By following these steps, you can effectively optimize your images for SEO using JSON-LD structured data in a Next.js project. This approach ensures that your images are well-described and discoverable by search engines, which can improve your site's visibility and ranking.

# SmartHomeHouseImage Component Usage Guide

The `SmartHomeHouseImage` component is designed to display an optimized image for the OW London, Electrician, Smart Home Engineers website. This component includes detailed metadata to enhance SEO, ensuring your images are indexed effectively by search engines. 

## How to Use This Feature

To utilize this feature, follow these steps:

1. **Visit "SEO Image"**: Access the "SEO Image" tool where you can generate the necessary `tsx` file.
2. **Share Your Photo**: Upload the image you want to optimize.
3. **Provide Keywords**: List the keywords and phrases that are relevant to your image and service offerings.
4. **Generate the `tsx` File**: The tool will create a `tsx` file containing all the necessary information and metadata for your image, ensuring it is SEO-optimized.

## Steps for Integration

1. **Import the Generated Component**: Once you have the generated `tsx` file, import it into your React project.

    ```tsx
    import SmartHomeHouseImage from './src/components/SmartHomeHouseImage';
    ```

2. **Use the Component in Your JSX**: Integrate the component within your page or component.

    ```tsx
    const YourComponent: React.FC = () => {
      return (
        <div>
          <h1>Our Smart Home Services</h1>
          <SmartHomeHouseImage />
        </div>
      );
    };

    export default YourComponent;
    ```

## Example Component: SmartHomeHouseImage

Here is an example of how the `SmartHomeHouseImage` component might look:

```tsx
// src/components/SmartHomeHouseImage.tsx
import React from 'react';
import ImageOptimizedWithJsonId, { ImageOptimizedWithJsonIdProps } from '../../components/ImageOptimizedWithJsonId';

const seoData: ImageOptimizedWithJsonIdProps = {
  src: "/images/smart-home-house.jpg",
  alt: "Smart home with modern technology and electrical services",
  title: "Smart Home with Modern Electrical Technology",
  author: "OW London, Electrician, Smart Home Engineers",
  copyright: "OW London, Electrician, Smart Home Engineers",
  credit: "Illustration by OW London, Electrician, Smart Home Engineers",
  dateCreated: "2024-06-23",
  usageTerms: "Free to use under Creative Commons",
  description: "Illustration of a smart home equipped with modern technology and electrical services, provided by OW London, Electrician, Smart Home Engineers.",
  keywords: [
    "electrician London", "home automation London", "electrical installation", "lighting design", "electrical repairs",
    "PAT testing", "EV charger installation", "rewiring projects", "CCTV installation", "alarm systems",
    "security systems", "data cabling", "appliance hookups", "fault finding", "emergency electrical services",
    "smart home technology", "certified electricians", "NICEIC certified", "electrical safety",
    "commercial electrical services", "residential electrical services", "industrial electrical services",
    "same-day electrical service", "portable appliance testing", "light fixture repair", "electrical rewiring",
    "energy efficiency planning", "thermal imaging surveys", "electrical inspections", "electrical component upgrades",
    "generator backup", "routine electrical maintenance", "DAA Electrical Ltd", "WF Electrical Installations",
    "Fantastic Services", "BSES Ltd", "Envision Electrical Ltd", "Intelitech-UK Ltd", "EVP Electrical Ltd",
    "Bedoya Electrical Ltd", "SJConnolly Electrical Ltd", "Joni Electrical Limited"
  ],
  width: 1200,
  height: 1200,
  caption: "Illustration of a smart home equipped with modern technology and electrical services by OW London, Electrician, Smart Home Engineers.",
  pageUrl: "https://www.owresearch.netlify.app/services/ow-london-electrician-smart-home-engineers",
  thumbnailSrc: "/images/smart-home-house-thumbnail.jpg",
  thumbnailWidth: 300,
  thumbnailHeight: 300,
};

const SmartHomeHouseImage: React.FC<Omit<ImageOptimizedWithJsonIdProps, 'src' | 'alt' | 'title' | 'author' | 'copyright' | 'credit' | 'dateCreated' | 'usageTerms' | 'description' | 'keywords' | 'width' | 'height' | 'caption' | 'pageUrl' | 'thumbnailSrc' | 'thumbnailWidth' | 'thumbnailHeight'>> = (props) => {
  return (
    <ImageOptimizedWithJsonId {...seoData} {...props} />
  );
};

export default SmartHomeHouseImage;
```
By following these steps and utilizing the "SEO Image" tool, you can ensure your images are fully optimized for search engines, improving your website's visibility and search ranking.