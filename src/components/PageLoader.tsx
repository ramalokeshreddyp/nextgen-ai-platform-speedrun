"use client";

import { useEffect } from "react";

export default function PageLoader() {
  useEffect(() => {
    const loader = document.getElementById("page-loader");
    const html = document.documentElement;

    const timer = window.setTimeout(() => {
      loader?.classList.add("is-done");
      html.classList.add("page-ready");
      window.setTimeout(() => loader?.remove(), 220);
    }, 300);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div id="page-loader" className="page-loader" aria-hidden="true">
      <div className="page-loader__bar" />
    </div>
  );
}
