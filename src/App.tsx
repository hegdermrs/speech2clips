import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatYouGet } from './components/WhatYouGet'
import { HowItWorks } from './components/HowItWorks'
import { SeeItInAction } from './components/SeeItInAction'
import { WhyMe } from './components/WhyMe'
import { Testimonial } from './components/Testimonial'
import { FAQ } from './components/FAQ'
import { ActNow } from './components/ActNow'
import { Footer } from './components/Footer'
import { LegalPage } from './components/LegalPage'

type LegalRoute = 'privacy' | 'terms'

function getLegalRoute(): LegalRoute | null {
  const hash = window.location.hash.slice(1)
  if (hash === 'privacy' || hash === 'terms') return hash
  return null
}

export default function App() {
  const [legalPage, setLegalPage] = useState<LegalRoute | null>(getLegalRoute)

  useEffect(() => {
    const syncRoute = () => setLegalPage(getLegalRoute())
    syncRoute()
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  if (legalPage) {
    return <LegalPage page={legalPage} />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatYouGet />
        <HowItWorks />
        <SeeItInAction />
        <WhyMe />
        <Testimonial />
        <FAQ />
        <ActNow />
      </main>
      <Footer />
    </>
  )
}
