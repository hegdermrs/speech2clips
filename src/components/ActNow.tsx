import { BorderBeam } from 'border-beam'
import { ArrowRight, Calendar } from 'lucide-react'
import { FadeIn } from './FadeIn'

export function ActNow() {
  return (
    <section id="act-now" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,214,10,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <BorderBeam
            size="md"
            colorVariant="sunset"
            theme="dark"
            duration={2}
            strength={1}
            brightness={1.5}
            borderRadius={36}
          >
            <div className="overflow-hidden rounded-[36px] bg-[var(--color-surface)] px-8 py-14 md:px-16 md:py-20">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="section-label mb-4 flex items-center gap-2 text-[var(--color-accent)]">
                    <Calendar className="h-3.5 w-3.5" />
                    Act Now
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-white">
                    The election is here.
                    <br />
                    Don&apos;t go quiet.
                  </h2>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                    Every day your message isn&apos;t reaching voters is a day
                    your opponent is pulling ahead. Book your first event
                    recording now — limited slots available before November.
                  </p>
                  <p className="mt-4 text-base text-white/70">
                    Spots are filling up fast. Let&apos;s get your message out
                    there while there&apos;s still time.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:sammy@rewritelocked.com?subject=Book%20Event%20Recording"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-black transition hover:brightness-110"
                  >
                    Book your first event
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </a>
                  <p className="text-center text-sm text-[var(--color-muted)]">
                    Click below and tell me where you&apos;re speaking next.
                  </p>
                </div>
              </div>
            </div>
          </BorderBeam>
        </FadeIn>
      </div>
    </section>
  )
}
