"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/workshops", label: "Workshops" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6",
          scrolled ? "neu-raised backdrop-blur-sm" : "clay-soft",
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand-300 to-brand-600 font-display text-lg font-black text-white shadow-inner">
            Y
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            Yaal&apos;s <span className="text-brand-500">Creation</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  active
                    ? "neu-inset text-brand-600"
                    : "text-muted hover:text-brand-600",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-bold sm:inline-flex"
          >
            Order Now
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="neu-btn flex h-10 w-10 items-center justify-center rounded-full text-brand-600 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="clay-card mx-auto mt-3 max-w-6xl space-y-1 p-3 md:hidden">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  active
                    ? "neu-inset text-brand-600"
                    : "text-muted hover:text-brand-600",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 block rounded-2xl px-4 py-3 text-center text-sm font-bold"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
