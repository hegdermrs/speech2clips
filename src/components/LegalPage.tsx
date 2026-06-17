import { ArrowLeft } from 'lucide-react'
import { SITE } from '../data/site'
import { PatrioticBarThin, USFlag } from './PatrioticMotifs'

type LegalPageProps = {
  page: 'privacy' | 'terms'
}

export function LegalPage({ page }: LegalPageProps) {
  const isPrivacy = page === 'privacy'

  return (
    <div className="min-h-screen bg-[#030508]">
      <header className="border-b border-white/5 bg-[#030508]/90 backdrop-blur-xl">
        <PatrioticBarThin />
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <USFlag size="md" />
            <span className="font-[family-name:var(--font-display)] text-xl text-white">
              {SITE.name}
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="section-label-color mb-4">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-white">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--color-muted)]">
          {isPrivacy ? (
            <>
              <p>I respect your privacy. When you book a session, I only collect your name and email address.</p>
              <p>
                Your information is kept strictly confidential. I never share or sell your personal
                information to third parties.
              </p>
              <p>
                I use Calendly for scheduling and Stripe for payments — these services have their
                own privacy policies.
              </p>
            </>
          ) : (
            <>
              <p>Full payment is required upfront before any work begins. There are no refunds.</p>
              <p>You retain full ownership of your clips at all times.</p>
              <p>
                Questions? Feel free to reach out before booking at{' '}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-patriot-blue transition hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </>
          )}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8">
          <p className="font-medium text-white">{SITE.owner}</p>
          <a
            href={SITE.url}
            className="mt-1 inline-block text-sm text-patriot-blue transition hover:underline"
          >
            Speech2Clips.com
          </a>
        </footer>
      </main>
    </div>
  )
}
