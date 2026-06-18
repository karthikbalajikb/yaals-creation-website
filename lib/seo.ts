/**
 * Structured-data (JSON-LD) builders for SEO, AEO (Answer Engine Optimization)
 * and GEO (Generative Engine Optimization).
 *
 * These graphs help Google rich results, plus generative engines such as
 * ChatGPT, Perplexity and Gemini understand the brand, catalogue and pricing.
 */

import { sameAs, site } from "@/lib/site";
import { products, type Product, categoryLabels } from "@/lib/products";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/** Organization / LocalBusiness graph — the brand identity for search engines. */
export function organizationSchema() {
  return {
    "@type": ["Organization", "LocalBusiness", "Store"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    logo: absoluteUrl("/icon.png"),
    image: absoluteUrl("/opengraph-image"),
    email: site.email,
    telephone: `+${site.whatsappNumber}`,
    foundingDate: site.foundingYear,
    priceRange: site.priceRange,
    currenciesAccepted: site.currency,
    paymentAccepted: ["UPI", "Cash", "Bank Transfer"],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${site.whatsappNumber}`,
      email: site.email,
      availableLanguage: ["English", "Tamil"],
      areaServed: site.countryCode,
    },
    sameAs: [...sameAs],
  };
}

/** WebSite graph with a SearchAction so engines can surface site search. */
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Combined root graph injected once in the layout. */
export function rootGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema()],
  };
}

/** Product graph with an Offer — powers product rich results & GEO answers. */
export function productSchema(product: Product) {
  const url = absoluteUrl(`/products/${product.slug}`);
  const image = product.image
    ? absoluteUrl(product.image)
    : absoluteUrl("/opengraph-image");

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    image,
    url,
    category: categoryLabels[product.category],
    sku: product.slug,
    brand: { "@type": "Brand", name: site.name },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: product.ageGroup,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: site.currency,
      price: product.price,
      ...(product.compareAt
        ? { priceSpecification: { "@type": "PriceSpecification", price: product.compareAt, priceCurrency: site.currency } }
        : {}),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": ORG_ID },
      areaServed: site.countryCode,
    },
  };
}

/** BreadcrumbList graph for a product page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** ItemList graph for the products listing page. */
export function productListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — DIY Painting & Clay Kits`,
    itemListElement: products.map((product, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/products/${product.slug}`),
      name: product.name,
    })),
  };
}

/** FAQPage graph — strong AEO/GEO signal for question-style queries. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
