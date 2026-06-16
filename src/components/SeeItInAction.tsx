import { BorderBeam } from 'border-beam'
import { Play } from 'lucide-react'
import { FadeIn } from './FadeIn'

const clipPreviews = [
  { title: 'Opening statement', duration: '0:42' },
  { title: 'Healthcare platform', duration: '0:38' },
  { title: 'Community rally', duration: '0:55' },
  { title: 'Debate highlight', duration: '0:31' },
  { title: 'Volunteer call-out', duration: '0:47' },
  { title: 'Closing message', duration: '0:36' },
]

export function SeeItInAction() {
  return (
    <section id="see-it-in-action" className="border-t border-white/5 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <FadeIn direction="left">
            <p className="section-label mb-4">See It In Action</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
              12 minutes of raw footage.
              <br />
              20 scroll-stopping clips.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
              Watch what your content could look like — professionally cleaned
              up and ready to post. In the primary campaign, I delivered powerful
              clips across multiple events, helping my candidate stay active on
              social media every single day without filming daily.
            </p>
            <p className="mt-6 text-base font-medium text-white/80">
              Your voters are scrolling. Make sure they&apos;re seeing you — not
              your opponent.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} direction="right">
            <BorderBeam
              size="md"
              colorVariant="colorful"
              theme="dark"
              duration={2.8}
              strength={0.75}
              borderRadius={24}
            >
              <div className="overflow-hidden rounded-[24px] bg-[var(--color-surface-elevated)]">
                <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,214,10,0.15),transparent_50%)]" />
                  <button
                    type="button"
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:scale-105 hover:bg-white/15"
                    aria-label="Play sample reel"
                  >
                    <Play className="h-6 w-6 fill-white text-white" />
                  </button>
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    Sample reel · 2:14
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3">
                  {clipPreviews.map((clip) => (
                    <div
                      key={clip.title}
                      className="group cursor-pointer bg-[var(--color-surface)] p-4 transition hover:bg-white/[0.03]"
                    >
                      <div className="mb-3 aspect-[9/16] rounded-lg bg-gradient-to-b from-white/10 to-white/[0.02] transition group-hover:from-[var(--color-accent)]/20" />
                      <p className="truncate text-sm text-white">{clip.title}</p>
                      <p className="text-xs text-[var(--color-muted)]">{clip.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BorderBeam>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
