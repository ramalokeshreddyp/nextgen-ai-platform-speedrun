const TESTIMONIALS = [
  {
    quote:
      "NexFlow cut our ETL runtime by 73%. The neural pipeline engine is genuinely next-gen.",
    author: "Sarah Chen",
    role: "VP Engineering, DataStream",
  },
  {
    quote:
      "We migrated 40 pipelines in a weekend. Zero downtime, zero drama.",
    author: "Marcus Webb",
    role: "Head of Data, CloudScale",
  },
  {
    quote:
      "Compliance guardrails saved us months of audit prep. Built-in and bulletproof.",
    author: "Priya Sharma",
    role: "CISO, FinEdge",
  },
  {
    quote:
      "Sub-20ms sync across regions. Our real-time dashboards finally feel real-time.",
    author: "James Okonkwo",
    role: "CTO, PulseMetrics",
  },
];

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <figure className="mx-3 w-80 shrink-0 rounded-2xl border border-[var(--border-default)] bg-nocturnal-expedition p-6">
      <blockquote className="mb-4 text-sm leading-relaxed text-mystic-mint">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption>
        <p className="font-heading text-sm text-arctic-powder">{author}</p>
        <p className="text-xs text-muted">{role}</p>
      </figcaption>
    </figure>
  );
}

export default function SocialProofSection() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="overflow-hidden py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
        <p className="font-heading mb-3 text-sm uppercase tracking-widest text-deep-saffron">
          Social Proof
        </p>
        <h2
          id="testimonials-heading"
          className="font-heading text-3xl text-arctic-powder md:text-4xl"
        >
          Trusted by data-driven teams
        </h2>
      </div>

      <div className="relative" aria-label="Customer testimonials">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.author}-${i}`} {...t} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6 opacity-60">
        {["DataStream", "CloudScale", "FinEdge", "PulseMetrics", "NovaLabs"].map(
          (brand) => (
            <span
              key={brand}
              className="font-heading text-sm uppercase tracking-widest text-subtle"
            >
              {brand}
            </span>
          )
        )}
      </div>
    </section>
  );
}
