import { Container } from "./Container";

export function MissionVision() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="clay-card p-9">
            <div className="neu-chip flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
              🎯
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To make screen-free creativity a daily joy — putting a brush in
              every child&apos;s hand with thoughtfully crafted, affordable
              painting kits that nurture imagination, focus and confidence,
              one little masterpiece at a time.
            </p>
          </div>

          <div className="clay-card p-9">
            <div className="neu-chip flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
              🔭
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To become India&apos;s most-loved handmade creative-kit brand —
              where parents, schools and gifters trust Yaal&apos;s Creation to
              turn ordinary moments into colourful memories, and where creativity
              truly meets love.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
