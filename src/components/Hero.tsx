import { BorderBeam } from 'border-beam'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Camera, Clock, Cloud, Megaphone } from 'lucide-react'
import { FadeIn } from './FadeIn'
import { CantonAccent } from './PatrioticMotifs'

const pipeline = [
  {
    icon: Megaphone,
    title: 'You speak',
    detail: 'Speeches, debates, forums, town halls, rallies',
  },
  {
    icon: Camera,
    title: 'I record it',
    detail: 'Clean audio and video on-site',
  },
  {
    icon: Clock,
    title: 'I edit it',
    detail: 'Cut, color-corrected, ready to post',
  },
  {
    icon: Cloud,
    title: 'Your team posts',
    detail: 'Clips land in your private folder',
  },
]

const eventTypes = ['Speeches', 'Debates', 'Forums', 'Town halls', 'Rallies']

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[var(--color-red)]/16 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-[var(--color-blue-bright)]/18 blur-[140px]" />
        <div className="absolute right-[30%] top-[40%] h-48 w-48 rounded-full bg-white/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <FadeIn>
              <p className="section-label mb-6">Speech 2 Clips</p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="max-w-4xl text-balance font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-white">
                One speech.
                <br />
                <span className="text-patriotic">20–30 clips.</span>
                <br />
                No content gaps.
              </h1>
            </FadeIn>

            <FadeIn delay={0.16} className="mt-8 max-w-xl">
              <p className="text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
                Campaigns move fast and every day counts. I show up, capture your
                events, and turn them into content your team can post all week.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#act-now"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-red)] to-[#b01030] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(220,20,60,0.35)] transition hover:brightness-110"
              >
                Book your first event
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#what-you-get"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[var(--color-blue-bright)]/40 hover:bg-[var(--color-blue-soft)]"
              >
                What you get
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.22} direction="right">
            <div className="space-y-5">
              <BorderBeam
                size="md"
                colorVariant="colorful"
                theme="dark"
                duration={2.4}
                strength={0.85}
                borderRadius={28}
              >
                <div className="relative overflow-hidden rounded-[28px]">
                  <CantonAccent className="right-0 top-0 h-20 w-28 rounded-bl-[100px] rounded-br-none md:h-24 md:w-32" />
                  <div className="glass rounded-[28px] p-8 md:p-9">
                    <p className="section-label mb-4">The final stretch</p>
                    <p className="text-balance text-2xl leading-snug text-white md:text-[1.65rem]">
                      Speeches, debates, forums — you&apos;re showing up, but your
                      team is drowning trying to turn every moment into content.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                      That&apos;s where I come in. One event becomes a week of posts,
                      without your staff editing until midnight.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {eventTypes.map((type) => (
                        <span
                          key={type}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderBeam>

              <BorderBeam
                size="md"
                colorVariant="ocean"
                theme="dark"
                duration={3}
                strength={0.6}
                borderRadius={24}
              >
                <div className="rounded-[24px] bg-[var(--color-surface-elevated)] p-6 md:p-7">
                  <p className="section-label-color mb-5">What happens at an event</p>
                  <div className="space-y-0">
                    {pipeline.map((step, index) => (
                      <div key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                        {index < pipeline.length - 1 && (
                          <span
                            className="absolute left-[17px] top-9 h-[calc(100%-12px)] w-px bg-gradient-to-b from-[var(--color-red)]/50 via-white/20 to-[var(--color-blue-bright)]/50"
                            aria-hidden
                          />
                        )}
                        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[var(--color-blue)]/30">
                          <step.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="pt-1">
                          <p className="font-medium text-white">{step.title}</p>
                          <p className="mt-0.5 text-sm text-[var(--color-muted)]">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm text-white/60">Sample clips below</span>
                    <motion.a
                      href="#see-it-in-action"
                      className="inline-flex items-center gap-2 text-sm font-medium text-patriot-blue"
                      animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      Watch them
                      <ArrowDownRight className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </BorderBeam>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
