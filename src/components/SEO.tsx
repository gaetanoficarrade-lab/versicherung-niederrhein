import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOData } from "@/lib/seoData";

interface SEOProps {
  title?: string;
  description?: string;
  type?: "website" | "article" | "product";
  image?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const BASE_URL = "https://makler-kalkar.de";

export default function SEO({
  title: customTitle,
  description: customDescription,
  type = "website",
  image = "/og-image.png",
  noIndex = false,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Hole SEO-Daten basierend auf aktuellem Pfad
  const seoData = getSEOData(pathname);
  
  // Custom Props überschreiben automatische Daten
  const title = customTitle || seoData.title;
  const description = customDescription || seoData.description;
  
  const fullTitle = title.includes("Smits") ? title : `${title} | Smits & Kollegen Versicherungsmakler Kalkar`;
  const fullCanonical = `${BASE_URL}${pathname === "/" ? "" : pathname}`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Smits & Kollegen Versicherungsmakler",
    "alternateName": "Smits Versicherungsmakler GmbH & Co. KG",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "image": fullImage,
    "description": "Unabhängiger Versicherungsmakler am Niederrhein in Kalkar. Persönliche Beratung für Privat- und Gewerbekunden.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Markt 3",
      "addressLocality": "Kalkar",
      "postalCode": "47546",
      "addressRegion": "Nordrhein-Westfalen",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.7387",
      "longitude": "6.2922"
    },
    "telephone": "+49-2824-809293",
    "email": "info@makler-kalkar.de",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "12:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "15:00",
        "closes": "17:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/SmitsundKollegen/",
      "https://www.provenexpert.com/smits-kollegen/"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.7387",
        "longitude": "6.2922"
      },
      "geoRadius": "50000"
    },
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Smits & Kollegen Versicherungsmakler" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="de" />
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Kalkar" />
      <meta name="geo.position" content="51.7387;6.2922" />
      <meta name="ICBM" content="51.7387, 6.2922" />

      {/* Canonical URL - immer vollständig */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="Smits & Kollegen Versicherungsmakler" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Helper function to create FAQ structured data
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

// Helper function to create Service structured data
export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "name": service.name,
    "description": service.description,
    "url": `${BASE_URL}${service.url}`,
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Smits & Kollegen Versicherungsmakler",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Markt 3",
        "addressLocality": "Kalkar",
        "postalCode": "47546",
        "addressCountry": "DE"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Nordrhein-Westfalen"
    }
  };
}

// Helper function to create BreadcrumbList structured data
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.url}`,
    })),
  };
}