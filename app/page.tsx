import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MissionVision } from "@/components/MissionVision";
import { ResearchBenefits } from "@/components/ResearchBenefits";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { getFeaturedProducts } from "@/lib/products";
import { faqSchema } from "@/lib/seo";

const steps = [
  { n: "1", t: "Pick your kit", d: "Choose from our painting kits — or message us for a custom theme." },
  { n: "2", t: "Unbox & paint", d: "Everything's inside: figures, colours and a brush. Just add imagination." },
  { n: "3", t: "Show it off", d: "Dry, display and treasure your handmade masterpiece. Tag us on Instagram!" },
];

const faqs = [
  {
    question: "What is a Yaal's Creation DIY painting kit?",
    answer:
      "Each kit is a ready-to-paint set with handmade Plaster of Paris (POP) or clay figures, non-toxic paint colours and a brush. Kids and adults paint the figures themselves — a screen-free, hands-on creative activity that doubles as home décor or a gift.",
  },
  {
    question: "How much do the painting kits cost?",
    answer:
      "Kits range from ₹59 to ₹199. Mini return-gift packs start at ₹59, kids' kits are around ₹79–₹140, and the adult Royal Taj Masterpiece is ₹149. Wholesale and bulk pricing is available for parties, schools and resellers.",
  },
  {
    question: "Are the kits good for return gifts and bulk orders?",
    answer:
      "Yes. Our Buggy Buddy packs and most kits are popular birthday return gifts. We offer tiered wholesale pricing for parties (10–24), events & schools (25–99) and resellers (100+), with custom themes available.",
  },
  {
    question: "What age group are the kits suitable for?",
    answer:
      "We have kits for ages 4 and up, plus an adult edition for ages 12+ and grown-ups. Each product page lists its recommended age range.",
  },
  {
    question: "How do I order from Yaal's Creation?",
    answer:
      "Ordering is quick on WhatsApp at +91 82488 44970, or message us on Instagram @shop.yaals_creations. We're based in Karaikal and Chennai, India, and also host painting workshops for schools, birthdays and events.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
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

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Everything you need before you pick your first kit."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.question} className="clay-card group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-foreground">
                  {f.question}
                  <span className="neu-inset flex h-8 w-8 flex-none items-center justify-center rounded-full text-brand-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
