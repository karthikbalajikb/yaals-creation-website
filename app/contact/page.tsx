import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import {
  site,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yaal's Creation. Order or ask anything on WhatsApp, follow us on Instagram, or send us an email.",
};

export default function ContactPage() {
  const cards = [
    {
      icon: <WhatsAppIcon className="h-6 w-6" />,
      tint: "text-green-600",
      title: "WhatsApp",
      detail: site.whatsappDisplay,
      sub: "Fastest way to order — we usually reply within minutes.",
      href: whatsappLink(defaultWhatsappMessage),
      cta: "Start a chat",
    },
    {
      icon: <InstagramIcon className="h-6 w-6" />,
      tint: "text-brand-500",
      title: "Instagram",
      detail: site.instagramHandle,
      sub: "See our latest kits, customer creations and offers.",
      href: site.instagram,
      cta: "Follow us",
    },
    {
      icon: <span className="text-xl">✉️</span>,
      tint: "text-brand-500",
      title: "Email",
      detail: site.email,
      sub: "For wholesale, collaborations and detailed queries.",
      href: `mailto:${site.email}`,
      cta: "Send an email",
    },
  ];

  return (
    <>
      <section className="pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="Say hello"
            title="Let's create something together"
            subtitle="Questions, custom requests or bulk orders — we'd love to hear from you. Pick whatever's easiest."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} className="clay-card flex flex-col p-8">
                <div
                  className={`neu-chip flex h-14 w-14 items-center justify-center rounded-2xl ${c.tint}`}
                >
                  {c.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 break-words text-sm font-semibold text-brand-600">
                  {c.detail}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {c.sub}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn mt-6 rounded-full px-6 py-3 text-center text-sm font-bold text-brand-600"
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="clay-card mt-8 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-xl font-extrabold text-foreground">
                Based in {site.location}
              </h3>
              <p className="mt-1 text-sm text-muted">
                Shipping handmade kits across India. Orders open all week.
              </p>
            </div>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 whitespace-nowrap px-7 py-3.5 text-sm font-bold"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Message us now
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
