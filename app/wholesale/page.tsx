import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wholesale & Bulk Orders",
  description:
    "Wholesale and bulk pricing for Yaal's Creation painting kits — perfect for return gifts, birthday parties, schools, events and resellers. Custom themes and branding available.",
  alternates: { canonical: "/wholesale" },
};

const tiers = [
  {
    name: "Party Pack",
    range: "10 – 24 kits",
    save: "Save up to 15%",
    highlight: false,
    perfect: "Birthday return gifts & small events",
    features: [
      "Mixed or single themes",
      "Gift-ready packaging",
      "Personalised thank-you note option",
    ],
  },
  {
    name: "Event & School",
    range: "25 – 99 kits",
    save: "Save up to 25%",
    highlight: true,
    perfect: "Schools, workshops & celebrations",
    features: [
      "Priority handmade production",
      "Custom theme requests",
      "Add your event name / branding",
      "Dedicated WhatsApp support",
    ],
  },
  {
    name: "Reseller / Retail",
    range: "100+ kits",
    save: "Best wholesale rate",
    highlight: false,
    perfect: "Shops, boutiques & resellers",
    features: [
      "Lowest per-unit pricing",
      "White-label packaging option",
      "Flexible restock scheduling",
      "Bulk shipping support",
    ],
  },
];

const useCases = [
  { icon: "🎁", title: "Return Gifts", text: "Memorable, screen-free favours kids actually keep and love." },
  { icon: "🎂", title: "Birthday Parties", text: "Turn the party into a creative activity everyone joins in." },
  { icon: "🏫", title: "Schools & Workshops", text: "Hands-on art sessions that support fine-motor & focus skills." },
  { icon: "🛍️", title: "Resellers & Shops", text: "A unique, high-margin handmade product for your shelves." },
];

const whyPremium = [
  {
    title: "Handmade, not mass-produced",
    text: "Every figure is cast and finished by hand in small batches for quality you can feel.",
  },
  {
    title: "Educational value sells",
    text: "Position kits as a brain-building activity — parents happily pay more for developmental play.",
  },
  {
    title: "Customisation included",
    text: "Themes, colours and branding tailored to your event or store — something generic toys can't offer.",
  },
];

export default function WholesalePage() {
  const message =
    "Hi Yaal's Creation! 👋 I'm interested in wholesale / bulk pricing. Here are my details — quantity, theme and occasion:";

  return (
    <>
      <section className="pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="Wholesale & B2B"
            title={
              <>
                Buy in bulk, <span className="text-brand-500">gift the joy</span>
              </>
            }
            subtitle="Special pricing for return gifts, parties, schools, events and resellers — with custom themes and optional branding. Handmade kits that sell at a premium."
          />
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get a Bulk Quote
            </a>
          </div>
        </Container>
      </section>

      {/* Pricing tiers */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`clay-card relative flex flex-col p-8 ${
                  t.highlight ? "lg:-translate-y-3" : ""
                }`}
              >
                {t.highlight && (
                  <span className="neu-chip absolute right-6 top-6 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-brand-600">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-extrabold text-foreground">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{t.perfect}</p>
                <div className="mt-5">
                  <span className="font-display text-2xl font-extrabold text-brand-600">
                    {t.range}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-green-600">
                    {t.save}
                  </p>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-200 text-xs text-brand-700">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`${message} (${t.name} — ${t.range})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 rounded-full px-6 py-3 text-center text-sm font-bold ${
                    t.highlight
                      ? "btn-primary"
                      : "neu-btn text-brand-600"
                  }`}
                >
                  Request Pricing
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Final pricing depends on theme, quantity and customisation. Message
            us for an exact quote — shipping calculated separately.
          </p>
        </Container>
      </section>

      {/* Use cases */}
      <section className="py-12">
        <Container>
          <SectionHeading eyebrow="Perfect for" title="Who buys in bulk" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="clay-card p-7 text-center">
                <div className="neu-chip mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
                  {u.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {u.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why premium */}
      <section className="py-12">
        <Container>
          <div className="clay-card p-9 sm:p-12">
            <SectionHeading
              align="left"
              eyebrow="Sell at a premium"
              title="Why our kits command a higher price"
              subtitle="Handmade quality plus proven developmental benefits let you price above generic toys — and keep healthy margins."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {whyPremium.map((w) => (
                <div key={w.title} className="neu-inset rounded-2xl p-6">
                  <h3 className="font-display text-base font-bold text-brand-600">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's build your bulk order"
        subtitle="Share your quantity, theme and occasion on WhatsApp — we'll send a custom quote the same day."
      />
    </>
  );
}
