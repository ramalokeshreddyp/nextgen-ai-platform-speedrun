export type CurrencyCode = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";

export const PRICING_MATRIX = {
  currencies: {
    INR: { symbol: "₹", regionalTariff: 1 },
    USD: { symbol: "$", regionalTariff: 1 },
    EUR: { symbol: "€", regionalTariff: 1.05 },
  },
  billingCycles: {
    monthly: { label: "Monthly", discountMultiplier: 1 },
    annual: { label: "Annual", discountMultiplier: 0.8 },
  },
  tiers: [
    {
      id: "starter",
      name: "Starter",
      description: "Launch your first AI workflows with essential automation tools.",
      baseRates: { INR: 1499, USD: 19, EUR: 17 },
      features: [
        "5 active pipelines",
        "1 GB processed / mo",
        "Community support",
        "Basic dashboards",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      description: "Scale data operations with advanced orchestration and analytics.",
      baseRates: { INR: 3999, USD: 49, EUR: 45 },
      highlighted: true,
      features: [
        "Unlimited pipelines",
        "50 GB processed / mo",
        "Priority support",
        "Custom webhooks",
        "Team workspaces",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Mission-critical automation with dedicated infrastructure.",
      baseRates: { INR: 8999, USD: 109, EUR: 99 },
      features: [
        "Dedicated compute",
        "Unlimited processing",
        "24/7 SLA support",
        "SSO & audit logs",
        "Custom contracts",
      ],
    },
  ],
} as const;

export function computeTierPrice(
  tierId: string,
  currency: CurrencyCode,
  billing: BillingCycle
): number {
  const tier = PRICING_MATRIX.tiers.find((t) => t.id === tierId);
  if (!tier) return 0;

  const baseRate = tier.baseRates[currency];
  const tariff = PRICING_MATRIX.currencies[currency].regionalTariff;
  const discount =
    PRICING_MATRIX.billingCycles[billing].discountMultiplier;

  return Math.round(baseRate * tariff * discount);
}

export function formatPrice(amount: number, currency: CurrencyCode): string {
  const { symbol } = PRICING_MATRIX.currencies[currency];
  return `${symbol}${amount.toLocaleString("en-US")}`;
}
