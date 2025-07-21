import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  article = false,
  language = 'fr',
}) => {
  const siteUrl = 'https://macharek.com';
  const defaultTitle = 'Macharek - Solutions en énergie solaire';
  const defaultDescription = 'Solutions innovantes en énergie solaire et renouvelable pour particuliers et entreprises.';
  const defaultImage = `${siteUrl}/logo/logo.png`;
  const defaultKeywords = 'énergie solaire, panneaux solaires, énergie renouvelable, photovoltaïque, solutions écologiques';
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${url || ''}`,
    keywords: keywords || defaultKeywords,
  };
  
  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Macharek" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  article: PropTypes.bool,
  language: PropTypes.string,
};

export default SEO; 