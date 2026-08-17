import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    keywords?: string;
    author?: string;
    schemaMarkup?: Record<string, any>;
}

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    canonical,
    image,
    type = 'website',
    keywords = "AI data engineering, ecommerce analytics, business intelligence, data platforms, machine learning, enterprise AI, cloud-native development",
    author = "Invictus Data",
    schemaMarkup
}) => {
    const siteUrl = 'https://invictusdata.ai';
    const { pathname } = useLocation();

    // Defaults
    // Title: Aim for 50-60 chars
    const defaultTitle = "Invictus Data - AI & Data Engineering Excellence";
    // Description: Aim for 100-130 chars
    const defaultDescription = "Transform your business with cutting-edge AI, data platforms, and cloud-native software engineering.";
    const defaultImage = `${siteUrl}/src/assets/Invictusloogo.png`;

    const metaTitle = title || defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;

    // Normalize pathname: strip query params, hash, trailing slashes, and lowercase
    const normalizePath = (p: string) => {
        let cleaned = p.split('?')[0].split('#')[0]; // strip query & hash
        if (cleaned.length > 1 && cleaned.endsWith('/')) {
            cleaned = cleaned.slice(0, -1); // remove trailing slash (but keep "/" for root)
        }
        return cleaned.toLowerCase();
    };

    const normalizedPath = canonical
        ? (canonical.startsWith('http') ? canonical : normalizePath(canonical))
        : normalizePath(pathname);

    const fullCanonical = normalizedPath.startsWith('http')
        ? normalizedPath
        : `${siteUrl}${normalizedPath}`;

    const fullImage = metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={fullCanonical} />
            <link rel="alternate" hrefLang="en" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content="Invictus Data" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={fullImage} />

            {/* Structured Data */}
            {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            )}
        </Helmet>
    );
};

export default Seo;
