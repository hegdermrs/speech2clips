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

export default function App() {
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
