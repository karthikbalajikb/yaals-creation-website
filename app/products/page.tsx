import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/lib/products";
import { productListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Yaal's Creation DIY painting kits — POP & clay figure kits for kids, adults, return gifts and character collections.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productListSchema()} />
      <section className="pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="Shop"
            title="Our Painting Kits"
            subtitle="Every kit comes ready to paint — figures, colours and a brush included. Tap any kit to see what's inside and order on WhatsApp."
          />
          <div className="mt-12">
            <ProductsExplorer products={products} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Can't decide? We'll help you pick."
        subtitle="Tell us the age and occasion — we'll suggest the perfect kit and share bulk pricing if you need a few."
      />
    </>
  );
}
