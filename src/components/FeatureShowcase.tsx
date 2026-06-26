"use client";

import { useEffect, useRef } from "react";
import {
  getActiveFeatureIndex,
  isMobileViewport,
  MOBILE_BREAKPOINT,
  restoreActiveFeatureIndex,
  setActiveFeatureIndex,
} from "@/lib/featureContext";

const FEATURES = [
  {
    title: "Neural Pipeline Engine",
    description:
      "Self-optimizing data pipelines that adapt to schema drift and throughput spikes in real time, powered by adaptive neural routing.",
    layout: "wide",
  },
  {
    title: "Real-Time Sync",
    description:
      "Bi-directional streaming connectors with sub-20ms propagation across warehouses, lakes, and edge nodes.",
    layout: "small",
  },
  {
    title: "Auto-Scaling Infra",
    description:
      "Elastic compute that scales from zero to millions of events without manual provisioning or cold-start penalties.",
    layout: "tall",
  },
  {
    title: "Smart Schema Mapping",
    description:
      "AI-assisted field mapping detects types, relationships, and anomalies before they corrupt downstream models.",
    layout: "medium",
  },
  {
    title: "Compliance Guardrails",
    description:
      "Built-in GDPR, SOC2, and HIPAA policy enforcement with audit trails and automatic PII redaction.",
    layout: "medium",
  },
  {
    title: "Unified API Layer",
    description:
      "One REST and GraphQL surface to orchestrate every connector, trigger, and transformation in your stack.",
    layout: "small",
  },
] as const;

function layoutClass(layout: string): string {
  switch (layout) {
    case "wide":
      return "bento-node--wide";
    case "tall":
      return "bento-node--tall bento-node--medium";
    case "medium":
      return "bento-node--medium";
    default:
      return "bento-node--small";
  }
}

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const wasDesktopRef = useRef(true);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    restoreActiveFeatureIndex();

    const bentoNodes = root.querySelectorAll<HTMLElement>("[data-bento-index]");
    const accordionItems = root.querySelectorAll<HTMLElement>("[data-accordion-index]");

    function applyBentoActive(index: number) {
      bentoNodes.forEach((node) => {
        const i = parseInt(node.dataset.bentoIndex ?? "-1", 10);
        node.classList.toggle("is-active", i === index);
      });
    }

    function applyAccordionOpen(index: number) {
      accordionItems.forEach((item) => {
        const i = parseInt(item.dataset.accordionIndex ?? "-1", 10);
        const open = i === index;
        item.classList.toggle("is-open", open);
        item.querySelector<HTMLButtonElement>(".accordion-trigger")?.setAttribute(
          "aria-expanded",
          String(open)
        );
      });
    }

    function syncLayout(index: number) {
      if (isMobileViewport()) {
        applyAccordionOpen(index);
      } else {
        applyBentoActive(index);
      }
    }

    const initial = getActiveFeatureIndex();
    syncLayout(initial);

    bentoNodes.forEach((node) => {
      const index = parseInt(node.dataset.bentoIndex ?? "0", 10);

      node.addEventListener("mouseenter", () => {
        if (isMobileViewport()) return;
        setActiveFeatureIndex(index);
        applyBentoActive(index);
      });

      node.addEventListener("focusin", () => {
        if (isMobileViewport()) return;
        setActiveFeatureIndex(index);
        applyBentoActive(index);
      });
    });

    accordionItems.forEach((item) => {
      const trigger = item.querySelector<HTMLButtonElement>(".accordion-trigger");
      const index = parseInt(item.dataset.accordionIndex ?? "0", 10);

      trigger?.addEventListener("click", () => {
        const current = getActiveFeatureIndex();
        const next = current === index ? -1 : index;
        const resolved = next === -1 ? index : next;
        setActiveFeatureIndex(resolved);
        applyAccordionOpen(resolved);
      });
    });

    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    function handleBreakpointChange() {
      const nowMobile = mq.matches;
      const active = getActiveFeatureIndex();

      if (wasDesktopRef.current && nowMobile) {
        requestAnimationFrame(() => applyAccordionOpen(active));
      } else if (!wasDesktopRef.current && !nowMobile) {
        requestAnimationFrame(() => applyBentoActive(active));
      }

      wasDesktopRef.current = !nowMobile;
    }

    mq.addEventListener("change", handleBreakpointChange);
    window.addEventListener("resize", handleBreakpointChange);
    wasDesktopRef.current = !isMobileViewport();

    return () => {
      mq.removeEventListener("change", handleBreakpointChange);
      window.removeEventListener("resize", handleBreakpointChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="entry-reveal entry-reveal--3 px-6 py-20 md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="font-heading mb-3 text-sm uppercase tracking-widest text-deep-saffron">
            Core Capabilities
          </p>
          <h2
            id="features-heading"
            className="font-heading mb-4 text-3xl text-arctic-powder md:text-4xl"
          >
            Built for modern data teams
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Every module is engineered for speed, resilience, and developer
            ergonomics — from ingestion to orchestration.
          </p>
        </header>

        <div className="bento-grid" role="list" aria-label="Platform features">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={`bento-node hover-lift ${layoutClass(feature.layout)}`}
              data-bento-index={index}
              role="listitem"
              tabIndex={0}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="mb-4"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="24"
                  height="24"
                  rx="6"
                  stroke="#FF9932"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 14H19M14 9V19"
                  stroke="#D9E8E2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="font-heading mb-2 text-base text-arctic-powder">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="feature-accordion" aria-label="Platform features">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className="accordion-item"
              data-accordion-index={index}
            >
              <h3 className="m-0">
                <button
                  type="button"
                  className="accordion-trigger"
                  aria-expanded="false"
                  aria-controls={`panel-${index}`}
                  id={`trigger-${index}`}
                >
                  {feature.title}
                  <svg
                    className="accordion-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#D9E8E2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </h3>
              <div
                className="accordion-panel"
                id={`panel-${index}`}
                role="region"
                aria-labelledby={`trigger-${index}`}
              >
                <div className="accordion-panel__inner">
                  <p className="accordion-panel__content">{feature.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
