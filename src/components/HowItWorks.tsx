import { FadeIn } from './FadeIn'

const steps = [
  {
    number: '01',
    title: 'Tell me where & when',
    body: 'You tell me where and when you\'re speaking. I show up with pro cameras and mics.',
  },
  {
    number: '02',
    title: 'I capture the moment',
    body: 'I record clean, high-quality footage of you in action — speeches, debates, forums.',
  },
  {
    number: '03',
    title: 'Clips in 24–48 hours',
    body: 'Within 24 to 48 hours, I deliver 20 to 30 ready-to-post clips straight to your private cloud folder.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,10,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label mb-4">How It Works</p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
                Super simple.
                <br />
                Three steps.
              </h2>
            </div>
            <p className="max-w-sm text-base text-[var(--color-muted)] md:text-right">
              No long contracts, no complicated approvals. Just consistent,
              powerful content showing up exactly when your campaign needs it most.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.12}>
              <article className="flex h-full flex-col bg-[var(--color-surface)] p-8 md:p-10">
                <span className="font-[family-name:var(--font-display)] text-5xl text-[var(--color-accent)]/80">
                  {step.number}
                </span>
                <h3 className="mt-8 text-2xl font-medium text-white">{step.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--color-muted)]">
                  {step.body}
                </p>
                {index < steps.length - 1 && (
                  <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-white/10 to-transparent md:block" />
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
