import {
  computeTierPrice,
  formatPrice,
  type BillingCycle,
  type CurrencyCode,
  PRICING_MATRIX,
} from "./pricingMatrix";

interface PricingControllerOptions {
  root: HTMLElement;
  onBillingChange?: (cycle: BillingCycle) => void;
}

export class PricingController {
  private currency: CurrencyCode = "USD";
  private billing: BillingCycle = "monthly";
  private root: HTMLElement;

  constructor({ root }: PricingControllerOptions) {
    this.root = root;
    this.bindControls();
    this.syncPriceNodes();
    this.syncControlLabels();
  }

  private bindControls(): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-billing]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cycle = btn.dataset.billing as BillingCycle;
        if (!cycle || cycle === this.billing) return;
        this.billing = cycle;
        this.syncBillingButtons();
        this.syncPriceNodes();
        this.syncControlLabels();
      });
    });

    this.root.querySelector<HTMLSelectElement>("[data-currency-select]")?.addEventListener(
      "change",
      (event) => {
        const target = event.target as HTMLSelectElement;
        this.currency = target.value as CurrencyCode;
        this.syncPriceNodes();
      }
    );
  }

  private syncBillingButtons(): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-billing]").forEach((btn) => {
      const active = btn.dataset.billing === this.billing;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  private syncControlLabels(): void {
    const savings = this.root.querySelector<HTMLElement>("[data-savings-label]");
    if (savings) {
      const visible = this.billing === "annual";
      savings.hidden = !visible;
      savings.textContent = visible
        ? "Save 20% with annual billing"
        : "";
    }
  }

  private syncPriceNodes(): void {
    this.root.querySelectorAll<HTMLElement>("[data-price-tier]").forEach((node) => {
      const tierId = node.dataset.priceTier;
      if (!tierId) return;
      const amount = computeTierPrice(tierId, this.currency, this.billing);
      node.textContent = formatPrice(amount, this.currency);
    });

    this.root.querySelectorAll<HTMLElement>("[data-price-period]").forEach((node) => {
      node.textContent = this.billing === "annual" ? "/ year" : "/ month";
    });
  }
}

export function getPricingTierMeta() {
  return PRICING_MATRIX.tiers;
}
