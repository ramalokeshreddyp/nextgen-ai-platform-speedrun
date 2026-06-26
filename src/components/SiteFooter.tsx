export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-default)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#FF9932" />
            <path
              d="M8 16L14 10L20 16L26 10"
              stroke="#F1F6F4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-heading text-sm text-arctic-powder">NexFlow</span>
        </div>
        <p className="text-sm text-muted">
          &copy; 2026 NexFlow. AI-driven data automation platform.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-sm text-muted hover:text-arctic-powder">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted hover:text-arctic-powder">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted hover:text-arctic-powder">
                Docs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
