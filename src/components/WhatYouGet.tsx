import { BorderBeam } from 'border-beam'
import { Cloud, Film, TrendingUp } from 'lucide-react'
import { FadeIn } from './FadeIn'

const highlights = [
  {
    icon: Film,
    stat: '30–40',
    label: 'Polished clips per event',
    detail:
      'Each 30–60 seconds long, professionally cut, color-corrected, and audio-enhanced.',
  },
  {
    icon: Cloud,
    stat: 'Instant',
    label: 'Private cloud delivery',
    detail:
      'Your team and volunteers grab clips anytime and post exactly when you need them.',
  },
  {
    icon: TrendingUp,
    stat: 'Real-time',
    label: 'Message resonance data',
    detail:
      'See which talking points land with voters so you can double down while there\'s still time.',
  },
]

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="border-t border-white/5 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn direction="left">
            <p className="section-label mb-4">What You Get</p>
            <h2 className="max-w-md font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
              Stop scrambling when your schedule gets crazy.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
              Every time I record you, you&apos;ll receive polished video clips
              that make you sound sharp and look credible — ready to post the
              moment you need them.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              You keep full rights to everything. I&apos;m not managing your
              accounts — I&apos;m just making sure you never run out of
              high-quality content during the most critical months of your
              campaign.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {highlights.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.1}>
                <BorderBeam
                  size="line"
                  colorVariant="mono"
                  theme="dark"
                  duration={3.2}
                  strength={0.55}
                  borderRadius={20}
                >
                  <article className="glass flex gap-6 rounded-[20px] p-6 md:p-8">
                    <div className="flex shrink-0 flex-col items-start">
                      <item.icon className="mb-4 h-5 w-5 text-[var(--color-accent)]" />
                      <span className="font-[family-name:var(--font-display)] text-4xl leading-none text-white md:text-5xl">
                        {item.stat}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-medium text-white">{item.label}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                </BorderBeam>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
