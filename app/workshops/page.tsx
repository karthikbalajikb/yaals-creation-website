import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Workshops & Events",
  description:
    "Book a Yaal's Creation painting workshop for schools, birthdays, corporate events and get-togethers. We bring everything and create hands-on, screen-free creative fun — at your venue or ours.",
};

const venues = [
  {
    icon: "🏫",
    title: "Schools & Classrooms",
    text: "Curriculum-friendly art sessions that build focus, fine-motor skills and confidence — for a single class or the whole grade.",
  },
  {
    icon: "🎂",
    title: "Birthday Parties",
    text: "Turn the party into an activity everyone joins. Each little guest paints a figure to take home as their own return gift.",
  },
  {
    icon: "🏢",
    title: "Corporate & Team Events",
    text: "A calming, screen-free creative break for teams — great for offsites, family days and wellbeing sessions.",
  },
  {
    icon: "🎉",
    title: "Get-Togethers & Functions",
    text: "Community events, festivals, society meets or family functions — a joyful hands-on experience for all ages.",
  },
];

const steps = [
  {
    n: "1",
    t: "Tell us your event",
    d: "Share the occasion, age group, headcount and date over WhatsApp.",
  },
  {
    n: "2",
    t: "We plan & bring it all",
    d: "Figures, paints, brushes, aprons and guidance — fully set up, hosted by us.",
  },
  {
    n: "3",
    t: "Everyone creates & keeps",
    d: "Guests paint their own masterpiece and take it home as a memory.",
  },
];

const includes = [
  "All painting materials & figures",
  "Friendly host / facilitator",
  "Table covers & aprons",
  "Setup and clean-up",
  "Custom themes on request",
  "Group & bulk pricing",
];

export default function WorkshopsPage() {
  const message =
    "Hi Yaal's Creation! 👋 I'd like to book a painting workshop / event. Here are my details — occasion, date, venue, age group and approximate number of participants:";

  return (
    <>
      {/* Hero */}
      <section className="pt-12 sm:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise-in">
              <span className="neu-chip inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-brand-600">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                We come to you · Or host at our space
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Painting workshops
                <span className="block bg-linear-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                  for every occasion
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Want a hands-on creative experience for your school, birthday,
                office or function? We host live painting workshops — in-house at
                our space, or at any venue you choose. We bring everything; your
                guests bring their imagination.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Enquire on WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}?subject=Workshop%20Enquiry`}
                  className="neu-btn px-7 py-3.5 text-sm font-bold text-brand-600"
                >
                  Email us
                </a>
              </div>
            </div>

            <div className="rise-in">
              <div className="clay-card relative mx-auto aspect-square w-full max-w-md p-6">
                <div className="neu-inset flex h-full w-full flex-col items-center justify-center gap-5 rounded-[1.5rem] bg-linear-to-br from-brand-100 to-brand-300/40 text-center">
                  <span className="animate-float text-7xl">🖌️</span>
                  <p className="font-display text-lg font-extrabold text-brand-600">
                    Hosted by Yaal&apos;s Creation
                  </p>
                  <p className="px-8 text-sm text-muted">
                    Screen-free, mess-free for you, and unforgettable for your
                    guests.
                  </p>
                </div>
                <span className="clay-soft absolute -left-4 top-10 hidden rotate-[-8deg] px-4 py-2 text-sm font-bold text-brand-600 sm:block">
                  At your venue ♥
                </span>
                <span className="clay-soft absolute -right-4 bottom-12 hidden rotate-[6deg] px-4 py-2 text-sm font-bold text-brand-600 sm:block">
                  Any group size
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Where we host */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Where we host"
            title="Perfect for any gathering"
            subtitle="From a classroom of curious kids to a corporate offsite — wherever there are people who'd love to create, we'll be there."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {venues.map((v) => (
              <div key={v.title} className="clay-card p-7">
                <div className="neu-chip flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
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

      {/* How it works + includes */}
      <section className="py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="clay-card p-9 sm:p-11">
              <SectionHeading
                align="left"
                eyebrow="How it works"
                title="Booking is simple"
              />
              <div className="mt-8 space-y-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <span className="neu-inset flex h-12 w-12 flex-none items-center justify-center rounded-full font-display text-lg font-extrabold text-brand-600">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {s.t}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {s.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="clay-card p-9 sm:p-11">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                What&apos;s included
              </h3>
              <p className="mt-1 text-sm text-muted">
                Everything for a stress-free session.
              </p>
              <ul className="mt-6 space-y-3">
                {includes.map((item) => (
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
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's plan your workshop"
        subtitle="Tell us your occasion, date, venue and group size — we'll tailor the perfect creative session and share pricing the same day."
      />
    </>
  );
}
