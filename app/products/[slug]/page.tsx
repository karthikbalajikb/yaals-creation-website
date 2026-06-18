import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/icons";
import {
  categoryLabels,
  getProduct,
  products,
} from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const orderMessage = `Hi Yaal's Creation! 👋 I'd like to order the *${product.name}* (₹${product.price}). Please share the details.`;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="pt-10 sm:pt-14">
        <Container>
          <nav className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-brand-600">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-600">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Visual */}
            <div className="clay-card p-5">
              <ProductImage
                product={product}
                rounded="rounded-[1.4rem]"
                aspect="aspect-[4/5]"
                fit={product.image ? "contain" : "cover"}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Details */}
            <div>
              <span className="neu-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600">
                {categoryLabels[product.category]}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-muted">{product.tagline}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-4xl font-extrabold text-brand-600">
                  ₹{product.price}
                </span>
                {product.compareAt && (
                  <span className="text-xl text-muted line-through">
                    ₹{product.compareAt}
                  </span>
                )}
                {product.shippingNote && (
                  <span className="text-sm text-muted">
                    {product.shippingNote}
                  </span>
                )}
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted">
                {product.description}
              </p>

              {/* Includes */}
              <div className="clay-soft mt-7 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-600">
                  What&apos;s inside
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {product.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-200 text-xs text-brand-700">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted">
                  Recommended age: {product.ageGroup}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappLink(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Order on WhatsApp
                </a>
                <Link
                  href="/wholesale"
                  className="neu-btn px-7 py-3.5 text-sm font-bold text-brand-600"
                >
                  Need bulk pricing?
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16">
        <Container>
          <h2 className="font-display text-2xl font-extrabold text-foreground">
            You might also love
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
