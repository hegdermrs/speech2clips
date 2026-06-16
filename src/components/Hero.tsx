import { BorderBeam } from 'border-beam'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Clapperboard } from 'lucide-react'
import { FadeIn } from './FadeIn'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <FadeIn>
              <p className="section-label mb-6 flex items-center gap-3">
                <Clapperboard className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                Campaign content, delivered fast
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="max-w-4xl text-balance font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-white">
                One speech.
                <br />
                <span className="text-[var(--color-accent)]">20–30 clips.</span>
                <br />
                Zero content gaps.
              </h1>
            </FadeIn>

            <FadeIn delay={0.16} className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
                Campaigns are moving fast — every day counts, and your message
                can&apos;t wait. I show up with pro gear, capture clean footage,
                and deliver scroll-stopping clips within 48 hours.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.24} direction="right">
            <BorderBeam
              size="md"
              colorVariant="sunset"
              theme="dark"
              duration={2.4}
              strength={0.85}
              borderRadius={28}
            >
              <div className="glass rounded-[28px] p-8 md:p-10">
                <p className="section-label mb-4">The final stretch</p>
                <p className="text-balance text-2xl leading-snug text-white md:text-3xl">
                  Speeches, debates, forums — you&apos;re showing up, but your
                  team is drowning trying to turn every moment into content.
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-[var(--color-muted)]">
                    That&apos;s where I come in.
                  </span>
                  <motion.a
                    href="#what-you-get"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
                    animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    See what you get
                    <ArrowDownRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </BorderBeam>
          </FadeIn>
        </div>

        <FadeIn delay={0.32} className="mt-16 max-w-3xl">
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            No fluff. No middleman. Just consistent, powerful content that keeps
            your voters engaged when it matters most. The election clock is
            ticking — let&apos;s make sure your voice isn&apos;t the one that
            goes quiet.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
