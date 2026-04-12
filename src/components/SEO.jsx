import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, image, url }) => {
  const defaultTitle = "H5-REVOLUTION OFFICIAL SITE";
  const defaultDescription = "Welcome to the official website of H5-Revolution. Experience the revolution in idol entertainment.";
  const defaultImage = "https://h5-revolution.com/default-banner.jpg"; 
  const defaultUrl = "https://h5-revolution.com";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | H5-REVOLUTION` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:site_name" content="H5-Revolution" />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || '@H5Revolution'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}

export default SEO;
