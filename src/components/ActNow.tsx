import { type FormEvent, useState } from 'react'
import { BorderBeam } from 'border-beam'
import { ArrowRight, Calendar, CheckCircle, Loader2, Mail, MapPin, MessageSquare } from 'lucide-react'
import { SITE } from '../data/site'
import { CalBooking } from './CalBooking'
import { FadeIn } from './FadeIn'
import { PatrioticBar, USFlag } from './PatrioticMotifs'

function encodeForm(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

export function ActNow() {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'booking',
          location,
          date,
          email,
          message,
        }),
      })

      if (!res.ok) throw new Error('Form submission failed')
      setStatus('success')
      setLocation('')
      setDate('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="act-now" className="relative py-28 md:py-40 wash-red">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.14),transparent_60%),radial-gradient(ellipse_at_80%_50%,rgba(0,40,104,0.12),transparent_50%)]" />

      <div className="relative mx-auto max-w-[90rem] px-6 md:px-10">
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
            <div className="rounded-[36px] bg-[var(--color-surface)]">
              <PatrioticBar />

              <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_3fr] md:gap-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
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
                        Fill out the form or pick a time below.
                      </p>
                    </div>
                    <USFlag size="md" />
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-6">
                    <div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="hidden" name="form-name" value="booking" />

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

                        <label className="block">
                          <span className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                            <MessageSquare className="h-3.5 w-3.5 text-patriot-blue" />
                            Tell me about your event
                          </span>
                          <textarea
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="What kind of event is it? How many attendees? Any specific shots you want?"
                            rows={3}
                            className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-blue-bright)]/50"
                          />
                        </label>

                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-red)] to-[#b01030] px-8 py-4 text-base font-semibold text-white shadow-[0_0_32px_rgba(220,20,60,0.3)] transition hover:brightness-110 disabled:opacity-60"
                        >
                          {status === 'submitting' ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Book your first event
                              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                            </>
                          )}
                        </button>

                        {status === 'success' && (
                          <p className="mt-3 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                            <CheckCircle className="h-4 w-4 shrink-0" />
                            Message sent! I&apos;ll get back to you soon.
                          </p>
                        )}

                        {status === 'error' && (
                          <p className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                            Something went wrong. Please try again or email{' '}
                            <a href={`mailto:${SITE.email}`} className="underline hover:text-red-200">
                              {SITE.email}
                            </a>
                            .
                          </p>
                        )}
                      </form>

                      <p className="mt-4 text-sm text-[var(--color-muted)]">
                        Or email{' '}
                        <a
                          href={`mailto:${SITE.email}`}
                          className="text-patriot-blue hover:underline"
                        >
                          {SITE.email}
                        </a>
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-medium text-white">
                        Pick a time directly
                      </h4>
                      <CalBooking />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BorderBeam>
        </FadeIn>
      </div>
    </section>
  )
}
