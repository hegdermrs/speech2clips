import { BorderBeam } from 'border-beam'
import { Quote } from 'lucide-react'
import { FadeIn } from './FadeIn'
import { PatrioticBarThin, PatriotDots } from './PatrioticMotifs'

export function Testimonial() {
  return (
    <section className="relative border-y border-white/5 py-28 md:py-36 wash-blue">
      <PatrioticBarThin className="absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <BorderBeam
            size="md"
            colorVariant="ocean"
            theme="dark"
            duration={3.6}
            strength={0.6}
            borderRadius={32}
          >
            <blockquote className="relative overflow-hidden rounded-[32px] bg-[var(--color-surface)] px-8 py-12 md:px-16 md:py-16">
              <Quote className="h-10 w-10 text-patriot-red/40" />
              <p className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-white">
                Working with Sammy completely changed how we campaign online. He
                delivered high-quality clips from my speeches that got my message
                out there. The views from those clips also got me recognized by
                potential voters in the community. Working with Sammy, I finally
                stopped stressing about creating daily content.
              </p>
              <footer className="mt-10 flex flex-col gap-1 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <cite className="not-italic text-lg font-medium text-white">
                    Rob Lucero
                  </cite>
                  <p className="text-sm text-[var(--color-muted)]">
                    Candidate for Congress in CA-34
                  </p>
                </div>
                <p className="section-label mt-4 flex items-center gap-2 md:mt-0">
                  <PatriotDots />
                  Testimonial
                </p>
              </footer>
            </blockquote>
          </BorderBeam>
        </FadeIn>
      </div>
    </section>
  )
}
