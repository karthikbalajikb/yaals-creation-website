import { whatsappLink, defaultWhatsappMessage, site } from "@/lib/site";
import { Container } from "./Container";

export function CTASection({
  title = "Ready to make memories with paint?",
  subtitle = "Order your kit today or message us for custom & bulk options. We reply fast on WhatsApp.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="clay-card relative overflow-hidden p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-peach/40 blur-2xl" />
          <h2 className="relative font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            {subtitle}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-7 py-3.5 text-sm font-bold"
            >
              Order on WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn px-7 py-3.5 text-sm font-bold text-brand-600"
            >
              See more on Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
