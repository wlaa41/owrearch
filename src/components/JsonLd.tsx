// components/JsonLd.tsx
import React from 'react';
import Head from 'next/head';

interface JsonLdProps {
  jsonLd: object;
}

const JsonLd: React.FC<JsonLdProps> = ({ jsonLd }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default JsonLd;
