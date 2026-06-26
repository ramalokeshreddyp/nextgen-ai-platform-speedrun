export default function HeroSection() {
  return (
    <section
      className="entry-reveal entry-reveal--1 relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-deep-saffron/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-mystic-mint/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-nocturnal-expedition px-4 py-1.5 text-xs uppercase tracking-widest text-mystic-mint">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-forsythia" />
            AI-Driven Data Automation
          </p>
          <h1
            id="hero-heading"
            className="font-heading mb-6 text-4xl leading-tight tracking-tight text-arctic-powder md:text-6xl"
          >
            Automate intelligence.
            <br />
            <span className="text-deep-saffron">Accelerate everything.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted">
            NexFlow orchestrates your data pipelines with neural precision —
            from ingestion to insight, in milliseconds.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="hover-lift inline-flex items-center gap-2 rounded-full bg-deep-saffron px-8 py-3.5 text-sm font-semibold text-oceanic-noir"
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#features"
              className="hover-lift inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-8 py-3.5 text-sm font-medium text-arctic-powder"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div
          className="entry-reveal entry-reveal--2 mx-auto mt-16 max-w-4xl rounded-2xl border border-[var(--border-default)] bg-nocturnal-expedition p-1 shadow-2xl"
          role="img"
          aria-label="NexFlow dashboard preview showing pipeline metrics and live data streams"
        >
          <div className="rounded-xl bg-oceanic-noir p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-deep-saffron" />
              <span className="h-3 w-3 rounded-full bg-forsythia" />
              <span className="h-3 w-3 rounded-full bg-mystic-mint" />
              <span className="ml-4 font-heading text-xs text-muted">
                pipeline.nexflow.io
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { label: "Throughput", value: "2.4M/s", color: "#FF9932" },
                { label: "Latency", value: "12ms", color: "#FFC801" },
                { label: "Uptime", value: "99.99%", color: "#D9E8E2" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[var(--border-default)] bg-nocturnal-expedition p-4"
                >
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p
                    className="font-heading mt-1 text-xl md:text-2xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 h-24 rounded-lg border border-[var(--border-default)] bg-gradient-to-r from-deep-saffron/10 via-forsythia/5 to-transparent md:h-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
