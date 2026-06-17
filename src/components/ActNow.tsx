import { type FormEvent, useState } from 'react'
import { BorderBeam } from 'border-beam'
import { ArrowRight, Calendar, Mail, MapPin } from 'lucide-react'
import { SITE } from '../data/site'
import { FadeIn } from './FadeIn'
import { PatrioticBar, USFlag } from './PatrioticMotifs'

export function ActNow() {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const body = [
      'Hi Sammy,',
      '',
      'I would like to book an event recording.',
      '',
      location ? `Event / location: ${location}` : 'Event / location: (not provided)',
      date ? `Date: ${date}` : 'Date: (not provided)',
      email ? `Reply to: ${email}` : 'Reply to: (not provided)',
    ].join('\n')

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Book Event Recording')}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="act-now" className="relative overflow-hidden py-28 md:py-40 wash-red">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.14),transparent_60%),radial-gradient(ellipse_at_80%_50%,rgba(0,40,104,0.12),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <BorderBeam
            size="md"
            colorVariant="colorful"
            theme="dark"
            duration={2}
            strength={1}
            brightness={1.5}
            borderRadius={36}
          >
            <div className="overflow-hidden rounded-[36px] bg-[var(--color-surface)]">
              <PatrioticBar />

              <div className="grid gap-10 px-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-wider text-patriot-red">
                    Limited slots before November
                  </p>

                  <p className="section-label-color mb-4">Act Now</p>
                  <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-white">
                    The election is here.
                    <br />
                    Don&apos;t let your socials go <span className="text-patriotic">quiet.</span>
                  </h2>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                    Every day your message isn&apos;t reaching voters is a day
                    your opponent gets ahead. Book your first event recording
                    now — spots are filling up before November.
                  </p>

                  <blockquote className="mt-8 border-l-2 border-[var(--color-blue-bright)]/50 pl-4">
                    <p className="text-sm italic leading-relaxed text-white/75">
                      &ldquo;Working with Sammy, I finally stopped stressing about
                      creating daily content.&rdquo;
                    </p>
                    <footer className="mt-2 text-xs text-[var(--color-muted)]">
                      — Rob Lucero, Candidate for Congress in CA-34
                    </footer>
                  </blockquote>
                </div>

                <div className="glass rounded-[28px] border border-white/10 p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        Where are you speaking next?
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        I&apos;ll reply to confirm your slot.
                      </p>
                    </div>
                    <USFlag size="md" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                        <MapPin className="h-3.5 w-3.5 text-patriot-red" />
                        Event / location
                      </span>
                      <input
                        type="text"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="Town hall in Sacramento, CA"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-blue-bright)]/50"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                        <Calendar className="h-3.5 w-3.5 text-patriot-blue" />
                        Event date
                      </span>
                      <input
                        type="text"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        placeholder="Saturday, October 12"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-blue-bright)]/50"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                        <Mail className="h-3.5 w-3.5 text-white/70" />
                        Your email
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@campaign.com"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-blue-bright)]/50"
                      />
                    </label>

                    <button
                      type="submit"
                      className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-red)] to-[#b01030] px-8 py-4 text-base font-semibold text-white shadow-[0_0_32px_rgba(220,20,60,0.3)] transition hover:brightness-110"
                    >
                      Book your first event
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </button>
                  </form>

                  <p className="mt-6 border-t border-white/10 pt-6 text-sm text-[var(--color-muted)]">
                    Or email{' '}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-patriot-blue hover:underline"
                    >
                      {SITE.email}
                    </a>
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
