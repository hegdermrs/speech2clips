import { useState } from 'react'

import { BorderBeam } from 'border-beam'

import { FadeIn } from './FadeIn'

import { ClipCard } from './ClipCard'

import { PatrioticBarThin, USFlag } from './PatrioticMotifs'

import { sampleClips } from '../data/media'



export function SeeItInAction() {

  const [activeClipId, setActiveClipId] = useState<string | null>(null)



  return (

    <section id="see-it-in-action" className="relative border-t border-white/5 py-28 md:py-36 wash-red">

      <PatrioticBarThin className="absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <FadeIn>

          <div className="max-w-3xl">

            <p className="section-label-color mb-4">See It In Action</p>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">

              12 minutes of raw footage.

              <br />

              <span className="text-patriotic">20 clips from one event.</span>

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[var(--color-muted)]">

              Here&apos;s what your content could look like — cleaned up and ready

              to post. Tap any clip below to preview samples from past events.

            </p>

            <p className="mt-6 text-base text-white/70">

              In a primary I worked on, clips from multiple events kept the

              candidate active on social every day without filming daily.

            </p>

          </div>

        </FadeIn>



        <FadeIn delay={0.12} className="mt-14">

          <BorderBeam

            size="md"

            colorVariant="colorful"

            theme="dark"

            duration={2.8}

            strength={0.75}

            borderRadius={24}

          >

            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[var(--color-surface-elevated)] p-5 md:p-8">

              <div className="mb-6 flex items-center gap-2">

                <USFlag size="sm" />

                <span className="section-label text-white/70">

                  {sampleClips.length} samples · tap to play

                </span>

              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

                {sampleClips.map((clip, index) => (

                  <ClipCard

                    key={clip.id}

                    clip={clip}

                    index={index}

                    isActive={activeClipId === clip.id}

                    onSelect={() => setActiveClipId(clip.id)}

                  />

                ))}

              </div>

            </div>

          </BorderBeam>

        </FadeIn>

      </div>

    </section>

  )

}


