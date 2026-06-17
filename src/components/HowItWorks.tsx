import { BorderBeam } from 'border-beam'

import { FadeIn } from './FadeIn'

import { LoomEmbed } from './LoomEmbed'

import { PatrioticBarThin, patriotStepColor } from './PatrioticMotifs'

import { LOOM_EMBED_URL } from '../data/media'



export function HowItWorks() {

  return (

    <section id="how-it-works" className="relative overflow-hidden py-28 md:py-36 wash-blue">

      <PatrioticBarThin className="absolute inset-x-0 top-0" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_55%)]" />



      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        <FadeIn>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="section-label-color mb-4">How It Works</p>

              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">

                Super simple.

                <br />

                Three steps.

              </h2>

            </div>

            <p className="max-w-sm text-base text-[var(--color-muted)] md:text-right">

              Book event by event. Tell me where and when —

              I show up and deliver.

            </p>

          </div>

        </FadeIn>



        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-3">

          {[

            {

              number: '01',

              title: 'Tell me where & when',

              body: 'You tell me where and when you\'re speaking.',

            },

            {

              number: '02',

              title: 'I record the event',

              body: 'I capture clean footage of you in action — speeches, debates, forums.',

            },

            {

              number: '03',

              title: 'Clips delivered',

              body: 'Edited clips land in your private folder, ready for your team to post.',

            },

          ].map((step, index) => (

            <FadeIn key={step.number} delay={index * 0.12}>

              <article className="flex h-full flex-col bg-[var(--color-surface)] p-8 md:p-10">

                <span

                  className={`font-[family-name:var(--font-display)] text-5xl ${patriotStepColor(index)}`}

                >

                  {step.number}

                </span>

                <h3 className="mt-8 text-2xl font-medium text-white">{step.title}</h3>

                <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--color-muted)]">

                  {step.body}

                </p>

              </article>

            </FadeIn>

          ))}

        </div>



        <FadeIn delay={0.2} className="mt-20">

          <PatrioticBarThin className="mb-10" />

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <p className="section-label mb-4">Walkthrough</p>

              <h3 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">

                Here&apos;s what the process looks like end to end.

              </h3>

              <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)]">

                Raw footage in, polished clips out. This video walks through how

                one event turns into content your team can post all week.

              </p>

            </div>

            <BorderBeam

              size="md"

              colorVariant="ocean"

              theme="dark"

              duration={3}

              strength={0.7}

              borderRadius={24}

            >

              <LoomEmbed src={LOOM_EMBED_URL} title="How Speech 2 Clips works" />

            </BorderBeam>

          </div>

        </FadeIn>

      </div>

    </section>

  )

}


