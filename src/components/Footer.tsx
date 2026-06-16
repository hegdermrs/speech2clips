export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-white">
            Speech 2 Clips
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            © 2026 Sammy Sarzoza ·{' '}
            <a
              href="https://rewritelocked.com"
              className="text-white/70 transition hover:text-[var(--color-accent)]"
            >
              RewriteLocked.com
            </a>
          </p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">All rights reserved</p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <a
            href="#"
            className="text-[var(--color-muted)] transition hover:text-white"
          >
            Privacy Policy & Terms of Service
          </a>
          <a
            href="mailto:sammy@rewritelocked.com"
            className="text-white/70 transition hover:text-[var(--color-accent)]"
          >
            sammy@rewritelocked.com
          </a>
        </div>
      </div>
    </footer>
  )
}
