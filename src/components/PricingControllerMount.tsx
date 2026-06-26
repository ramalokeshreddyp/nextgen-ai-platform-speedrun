"use client";

import { useEffect } from "react";
import { PricingController } from "@/lib/pricingController";

export default function PricingControllerMount() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-pricing-root]");
    if (!root) return;
    new PricingController({ root });
  }, []);

  return null;
}
