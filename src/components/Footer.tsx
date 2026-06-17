import { SITE } from '../data/site'
import { PatrioticBar, PatrioticBarThin, USFlag } from './PatrioticMotifs'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 wash-blue">
      <PatrioticBar className="absolute inset-x-0 top-0 opacity-80" />
      <PatrioticBarThin className="absolute inset-x-0 top-[14px]" />

      <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <USFlag size="md" />
              <p className="font-[family-name:var(--font-display)] text-2xl text-white">
                {SITE.name}
              </p>
            </div>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              © 2026 {SITE.owner} ·{' '}
              <a
                href={SITE.url}
                className="text-white/70 transition hover:text-patriot-red"
              >
                Speech2Clips.com
              </a>
            </p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">All rights reserved</p>
          </div>

          <div className="flex flex-col gap-4 text-sm md:items-end">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="#privacy"
                className="text-[var(--color-muted)] transition hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-[var(--color-muted)] transition hover:text-white"
              >
                Terms of Service
              </a>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="text-white/70 transition hover:text-patriot-blue"
            >
              {SITE.email}
            </a>

            <div className="flex items-center gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:text-white"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
          {SITE.name} is an independent private business. It is not affiliated with, endorsed by,
          or connected to any government agency, political party, or candidate committee.
        </p>
      </div>
    </footer>
  )
}
