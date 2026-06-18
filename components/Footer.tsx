import Link from "next/link";
import { site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { Container } from "./Container";
import { WhatsAppIcon, InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-20 pb-28 pt-10">
      <Container>
        <div className="clay-card grid gap-10 p-8 sm:p-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-brand-300 to-brand-600 font-display text-xl font-black text-white">
                Y
              </span>
              <span className="font-display text-xl font-extrabold text-foreground">
                Yaal&apos;s Creation
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}. Handmade DIY painting kits that make creativity a
              calm, screen-free joy for every age.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="neu-btn flex h-11 w-11 items-center justify-center rounded-full text-brand-600"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="neu-btn flex h-11 w-11 items-center justify-center rounded-full text-green-600"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-600">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {[
                { href: "/products", label: "All Products" },
                { href: "/workshops", label: "Workshops & Events" },
                { href: "/wholesale", label: "Wholesale & Bulk" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-600">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={whatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-600"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition hover:text-brand-600"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-600"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Yaal&apos;s Creation. Made with love for
          little artists. 💜
        </p>
      </Container>
    </footer>
  );
}
