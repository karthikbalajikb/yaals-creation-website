import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MissionVision } from "@/components/MissionVision";
import { ResearchBenefits } from "@/components/ResearchBenefits";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

const steps = [
  { n: "1", t: "Pick your kit", d: "Choose from our painting kits — or message us for a custom theme." },
  { n: "2", t: "Unbox & paint", d: "Everything's inside: figures, colours and a brush. Just add imagination." },
  { n: "3", t: "Show it off", d: "Dry, display and treasure your handmade masterpiece. Tag us on Instagram!" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* Featured products */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Our painting kits"
            title="Loved by little (and big) artists"
            subtitle="Premium handmade kits, ready to paint right out of the box."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="neu-btn inline-flex px-7 py-3.5 text-sm font-bold text-brand-600"
            >
              View all products
            </Link>
          </div>
        </Container>
      </section>

      <MissionVision />
      <ResearchBenefits />

      {/* How it works */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Simple & fun"
            title="How it works"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="clay-card p-8 text-center">
                <span className="neu-inset mx-auto flex h-14 w-14 items-center justify-center rounded-full font-display text-xl font-extrabold text-brand-600">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Wholesale teaser */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="clay-card flex flex-col items-start gap-4 p-9">
              <span className="text-4xl">📦</span>
              <h3 className="font-display text-xl font-extrabold text-foreground">
                Buying for a party, school or shop?
              </h3>
              <p className="text-muted">
                Special wholesale &amp; bulk pricing for return gifts, events and
                resellers — with custom themes and your branding.
              </p>
              <Link
                href="/wholesale"
                className="btn-primary mt-auto px-7 py-3.5 text-sm font-bold"
              >
                Explore Wholesale
              </Link>
            </div>

            <div className="clay-card flex flex-col items-start gap-4 p-9">
              <span className="text-4xl">🖌️</span>
              <h3 className="font-display text-xl font-extrabold text-foreground">
                Want a live painting workshop?
              </h3>
              <p className="text-muted">
                We host hands-on workshops for schools, birthdays, offices and
                get-togethers — at your venue or ours. We bring everything.
              </p>
              <Link
                href="/workshops"
                className="neu-btn mt-auto px-7 py-3.5 text-sm font-bold text-brand-600"
              >
                Book a Workshop
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
