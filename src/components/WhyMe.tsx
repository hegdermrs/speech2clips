import { Camera, Clock, Shield, Zap } from 'lucide-react'
import { FadeIn } from './FadeIn'

const reasons = [
  {
    icon: Camera,
    title: 'Pro gear, on-site',
    body: 'I show up to your events with professional cameras and mics — no phone footage, no excuses.',
  },
  {
    icon: Clock,
    title: '48-hour turnaround',
    body: 'Your team gets content while the moment is still fresh, not weeks later when the news cycle has moved on.',
  },
  {
    icon: Zap,
    title: 'No middleman',
    body: 'You work directly with me. No agency layers, no account managers, no bloated invoices.',
  },
  {
    icon: Shield,
    title: 'Full rights, always',
    body: 'You own everything I deliver. I\'m not managing your accounts — I\'m fueling your message.',
  },
]

export function WhyMe() {
  return (
    <section id="why-me" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <p className="section-label mb-4">Why Me</p>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
            Built for campaigns in the final months — when every post counts.
          </h2>
        </FadeIn>

        <div className="mt-16 columns-1 gap-5 space-y-5 md:columns-2">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.08}>
              <article className="break-inside-avoid glass rounded-[20px] p-7">
                <reason.icon className="h-5 w-5 text-[var(--color-accent)]" />
                <h3 className="mt-5 text-xl font-medium text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {reason.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
