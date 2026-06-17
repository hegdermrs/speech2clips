import { BorderBeam } from 'border-beam'
import { TrendingUp } from 'lucide-react'
import { FadeIn } from './FadeIn'
import { DeliverablesList } from './DeliverablesList'
import { PatrioticBarThin } from './PatrioticMotifs'

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative border-t border-white/5 py-28 md:py-36 wash-red">
      <PatrioticBarThin className="absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn direction="left">
            <p className="section-label-color mb-4">What You Get</p>
            <h2 className="max-w-md font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
              Stop scrambling when your schedule gets crazy.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
              Every time I record you, you get polished video clips — ready to
              post the moment you need them.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Post a range of messages and you&apos;ll quickly learn which parts
              of your platform voters actually respond to.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <BorderBeam
              size="line"
              colorVariant="ocean"
              theme="dark"
              duration={3.2}
              strength={0.55}
              borderRadius={24}
            >
              <div className="glass rounded-[24px] p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-patriot-blue" />
                  <h3 className="text-xl font-medium text-white">Every booking includes</h3>
                </div>
                <DeliverablesList />
              </div>
            </BorderBeam>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
