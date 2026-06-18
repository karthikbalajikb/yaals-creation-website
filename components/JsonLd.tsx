/**
 * Renders a JSON-LD structured-data block.
 * Server component — the script is part of the static HTML so crawlers and
 * generative engines see it without executing JavaScript.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Structured data is trusted, app-controlled content.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
