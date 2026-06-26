export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-oceanic-noir/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2" aria-label="NexFlow home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#FF9932" />
            <path
              d="M8 16L14 10L20 16L26 10"
              stroke="#F1F6F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 22L14 16L20 22L26 16"
              stroke="#D9E8E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-heading text-lg tracking-tight text-arctic-powder">
            NexFlow
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a
                href="#features"
                className="text-sm text-muted transition-colors duration-[175ms] ease-[cubic-bezier(0,0,0.2,1)] hover:text-arctic-powder"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-sm text-muted transition-colors duration-[175ms] ease-[cubic-bezier(0,0,0.2,1)] hover:text-arctic-powder"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-sm text-muted transition-colors duration-[175ms] ease-[cubic-bezier(0,0,0.2,1)] hover:text-arctic-powder"
              >
                Customers
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#pricing"
          className="hover-lift rounded-full bg-deep-saffron px-5 py-2.5 text-sm font-medium text-oceanic-noir"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
