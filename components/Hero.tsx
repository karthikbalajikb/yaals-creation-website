import Link from "next/link";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { Container } from "./Container";

const palette = ["#ffffff", "#ffeeb0", "#ffc9de", "#c2e3ff", "#b8e6d4", "#ffd6c2"];

export function Hero() {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="rise-in">
            <span className="neu-chip inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-brand-600">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Orders open · Handmade with love
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Paint your own
              <span className="block bg-linear-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                little masterpieces
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              DIY paint-your-own POP &amp; clay figure kits for kids and
              grown-ups. Screen-free, mindful and made for gifting — perfect for
              return gifts, birthday parties and cosy creative evenings.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="btn-primary px-7 py-3.5 text-sm font-bold"
              >
                Shop the Kits
              </Link>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn px-7 py-3.5 text-sm font-bold text-brand-600"
              >
                Order on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { n: "1000+", l: "Happy little artists" },
                { n: "₹59+", l: "Return-gift friendly" },
                { n: "100%", l: "Screen-free fun" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-extrabold text-brand-600">
                    {s.n}
                  </p>
                  <p className="text-xs text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="rise-in">
            <div className="clay-card relative mx-auto aspect-square w-full max-w-md p-6">
              <div className="neu-inset flex h-full w-full flex-col items-center justify-center gap-6 rounded-[1.5rem] bg-linear-to-br from-brand-100 to-brand-300/40">
                <span className="animate-float text-7xl">🎨</span>
                <div className="grid grid-cols-3 gap-3">
                  {palette.map((c) => (
                    <span
                      key={c}
                      className="h-9 w-9 rounded-full shadow-[3px_3px_8px_rgba(160,148,196,0.5),-3px_-3px_8px_rgba(255,255,255,0.9)]"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                  Create · Imagine · Explore
                </p>
              </div>

              <span className="clay-soft absolute -left-4 top-10 hidden rotate-[-8deg] px-4 py-2 text-sm font-bold text-brand-600 sm:block">
                ✦ Screen-free
              </span>
              <span className="clay-soft absolute -right-4 bottom-12 hidden rotate-[6deg] px-4 py-2 text-sm font-bold text-brand-600 sm:block">
                Return gifts ♥
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
