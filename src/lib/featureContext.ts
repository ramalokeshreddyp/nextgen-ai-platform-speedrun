const STORAGE_KEY = "nexflow-active-feature";
const MOBILE_BREAKPOINT = 768;

let activeIndex = 0;

export function getActiveFeatureIndex(): number {
  return activeIndex;
}

export function setActiveFeatureIndex(index: number): void {
  activeIndex = index;
  if (typeof window !== "undefined") {
    sessionStorage.setItem(STORAGE_KEY, String(index));
  }
}

export function restoreActiveFeatureIndex(): number {
  if (typeof window === "undefined") return 0;
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored !== null) {
    activeIndex = parseInt(stored, 10) || 0;
  }
  return activeIndex;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

export { MOBILE_BREAKPOINT };
