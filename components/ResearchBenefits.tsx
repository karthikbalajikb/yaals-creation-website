import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  {
    icon: "🧠",
    title: "Builds Brain Connections",
    text: "Open-ended art activates both brain hemispheres at once, strengthening the neural pathways behind problem-solving and creative thinking.",
  },
  {
    icon: "✋",
    title: "Sharpens Fine Motor Skills",
    text: "Gripping a brush and controlling each stroke develops the small hand muscles and hand-eye coordination kids need for writing.",
  },
  {
    icon: "🎯",
    title: "Boosts Focus & Patience",
    text: "Painting a figure from start to finish trains sustained attention and teaches the quiet satisfaction of completing a task.",
  },
  {
    icon: "🌈",
    title: "Grows Emotional Wellbeing",
    text: "Art is a proven calming outlet. Choosing colours and creating freely lowers stress and helps children express feelings safely.",
  },
  {
    icon: "📱",
    title: "Screen-Free, Hands-On Play",
    text: "A meaningful break from screens that keeps little ones engaged, confident and proud of something they made with their own hands.",
  },
  {
    icon: "💡",
    title: "Nurtures Confidence",
    text: "There is no wrong way to paint. Every finished piece celebrates a child's choices, building self-esteem and a maker's mindset.",
  },
];

export function ResearchBenefits() {
  return (
    <section id="benefits" className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Backed by child-development research"
          title={
            <>
              More than a toy —{" "}
              <span className="text-brand-500">a brain workout</span>
            </>
          }
          subtitle="Researchers in early-childhood development consistently link hands-on creative art with stronger cognitive, motor and emotional growth. Our kits turn that science into joyful, screen-free play."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="clay-card p-7">
              <div className="neu-chip flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
                {b.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted/80">
          Insights summarised from widely published early-childhood development
          and art-therapy research. Individual results vary — but the joy is
          guaranteed.
        </p>
      </Container>
    </section>
  );
}
