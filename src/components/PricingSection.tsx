import PricingControllerMount from "@/components/PricingControllerMount";
import { getPricingTierMeta } from "@/lib/pricingController";
import {
  computeTierPrice,
  formatPrice,
  PRICING_MATRIX,
} from "@/lib/pricingMatrix";

const tiers = getPricingTierMeta();
const defaultCurrency = "USD" as const;
const defaultBilling = "monthly" as const;

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="entry-reveal entry-reveal--4 px-6 py-20 md:py-28"
      aria-labelledby="pricing-heading"
      data-pricing-root
    >
      <PricingControllerMount />

      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <p className="font-heading mb-3 text-sm uppercase tracking-widest text-deep-saffron">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-heading mb-4 text-3xl text-arctic-powder md:text-4xl"
          >
            Transparent, scalable plans
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-muted">
            Matrix-driven pricing with regional tariffs and annual savings —
            switch currency or billing without disrupting the page.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="pricing-toggle" role="group" aria-label="Billing cycle">
              {Object.entries(PRICING_MATRIX.billingCycles).map(([key, cycle]) => (
                <button
                  key={key}
                  type="button"
                  className={`pricing-toggle__btn${key === defaultBilling ? " is-active" : ""}`}
                  data-billing={key}
                  aria-pressed={key === defaultBilling}
                >
                  {cycle.label}
                </button>
              ))}
            </div>

            <label className="sr-only" htmlFor="currency-select">
              Select currency
            </label>
            <select
              id="currency-select"
              className="currency-select"
              data-currency-select
              defaultValue={defaultCurrency}
              aria-label="Currency"
            >
              {Object.entries(PRICING_MATRIX.currencies).map(([code, meta]) => (
                <option key={code} value={code}>
                  {code} ({meta.symbol})
                </option>
              ))}
            </select>
          </div>

          <p data-savings-label hidden className="mt-4 text-sm text-mystic-mint" />
        </header>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`pricing-card hover-lift${
                "highlighted" in tier && tier.highlighted
                  ? " pricing-card--highlight"
                  : ""
              }`}
            >
              <h3 className="font-heading mb-2 text-lg text-arctic-powder">
                {tier.name}
              </h3>
              <p className="mb-6 text-sm text-muted">{tier.description}</p>
              <p className="mb-6 flex items-baseline gap-1">
                <span
                  className="font-heading text-4xl text-arctic-powder"
                  data-price-tier={tier.id}
                >
                  {formatPrice(
                    computeTierPrice(tier.id, defaultCurrency, defaultBilling),
                    defaultCurrency
                  )}
                </span>
                <span className="text-sm text-muted" data-price-period>
                  / month
                </span>
              </p>
              <ul className="mb-8 space-y-3" aria-label={`${tier.name} features`}>
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-mystic-mint"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5L6.5 12L13 4"
                        stroke="#FF9932"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="hover-lift block w-full rounded-full border border-[var(--border-default)] py-3 text-center text-sm font-medium text-arctic-powder transition-colors hover:border-deep-saffron"
              >
                Choose {tier.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
