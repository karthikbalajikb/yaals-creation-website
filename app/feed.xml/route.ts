import { products, categoryLabels } from "@/lib/products";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

/**
 * Google Merchant Center product feed (RSS 2.0 + Google Shopping namespace).
 * Served at /feed.xml. This is the shared on-ramp for Google Shopping, AI Mode
 * discovery and (later) the Universal Commerce Protocol.
 *
 * Connect it in Google Merchant Center → Products → Feeds → scheduled fetch,
 * pointing at https://<domain>/feed.xml.
 */

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = products
    .map((product) => {
      const link = absoluteUrl(`/products/${product.slug}`);
      const imageLink = product.image
        ? absoluteUrl(product.image)
        : absoluteUrl("/opengraph-image");

      return `    <item>
      <g:id>${escapeXml(product.slug)}</g:id>
      <g:title>${escapeXml(product.name)}</g:title>
      <g:description>${escapeXml(product.shortDescription)}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      <g:image_link>${escapeXml(imageLink)}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${product.price}.00 ${site.currency}</g:price>
      <g:brand>${escapeXml(site.name)}</g:brand>
      <g:condition>new</g:condition>
      <g:identifier_exists>no</g:identifier_exists>
      <g:product_type>${escapeXml(categoryLabels[product.category])}</g:product_type>
      <g:google_product_category>Toys &amp; Games &gt; Arts &amp; Crafts</g:google_product_category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(site.name)} — DIY Painting &amp; Clay Kits</title>
    <link>${escapeXml(site.url)}</link>
    <description>${escapeXml(site.description)}</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
