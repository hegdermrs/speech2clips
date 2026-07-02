import { MessageCircle, User, Users, Zap } from 'lucide-react'
import { cn } from '../lib/utils'
import { FadeIn } from './FadeIn'
import { PatrioticBarThin, patriotIconColor } from './PatrioticMotifs'

const reasons = [
  {
    icon: User,
    title: 'You work with me directly',
    body: 'No agency, no account manager, no layers between you and the person doing the work.',
  },
  {
    icon: Zap,
    title: 'Built for campaign pace',
    body: 'I know what the final months feel like — tight schedules, constant events, no time to edit.',
  },
  {
    icon: MessageCircle,
    title: 'I stay off your accounts',
    body: 'I deliver the files. Your team decides what goes up and when.',
  },
  {
    icon: Users,
    title: 'Done this in a real race',
    body: 'I\'ve kept a primary candidate active on social every day without them filming daily.',
  },
]

export function WhyMe() {
  return (
    <section id="why-me" className="relative py-28 md:py-36 wash-blue">
      <PatrioticBarThin className="absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <p className="section-label-color mb-4">Why Me</p>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
            You&apos;re in the final stretch. Every post counts.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.08} className="h-full">
              <article className="glass h-full rounded-[20px] p-7">
                <reason.icon className={cn('h-5 w-5', patriotIconColor(index))} />
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
