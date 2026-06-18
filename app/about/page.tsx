import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { MissionVision } from "@/components/MissionVision";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Yaal's Creation — a handmade DIY painting-kit brand on a mission to make screen-free creativity a joy for every child.",
};

const values = [
  { icon: "🤲", title: "Handmade with love", text: "Every figure is cast and finished by hand in small, caring batches." },
  { icon: "🌱", title: "Made to nurture", text: "We design for real developmental benefit, not just play." },
  { icon: "♻️", title: "Mindful & screen-free", text: "Calm, hands-on activities that give kids a break from screens." },
  { icon: "💜", title: "Joy in every box", text: "Thoughtful packaging and little touches that make gifting special." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="Our story"
            title="Where creativity meets love"
            subtitle="Yaal's Creation began with a simple belief — that every child deserves the quiet magic of making something with their own hands."
          />

          <div className="clay-card mt-12 p-9 sm:p-12">
            <div className="prose-custom space-y-5 text-base leading-relaxed text-muted">
              <p>
                What started as handcrafted gifts for friends and family grew
                into a small, heartfelt business. We noticed how completely
                children light up when they paint — focused, calm and proud —
                and how rare those screen-free moments had become.
              </p>
              <p>
                So we set out to bottle that feeling into a box. Each Yaal&apos;s
                Creation kit is a ready-to-paint adventure: handmade POP and clay
                figures, bright colours and a brush, designed so the fun begins
                the moment the box opens. From playful kids&apos; kits to our
                grown-up Masterpiece editions, every product is made to turn an
                ordinary afternoon into a colourful memory.
              </p>
              <p>
                Today we craft kits for families, birthday parties, schools and
                resellers across India — always handmade, always with love.
                Because to us, creativity isn&apos;t just an activity. It&apos;s
                a way of caring.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <MissionVision />

      {/* Values */}
      <section className="py-12">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="Our values" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="clay-card p-7 text-center">
                <div className="neu-chip mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
                  {v.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
