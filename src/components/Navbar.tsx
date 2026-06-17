import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { USFlag } from './PatrioticMotifs'

const links = [
  { label: 'What You Get', href: '#what-you-get' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'In Action', href: '#see-it-in-action' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'FAQ', href: '#faq' },
]

const sectionIds = links.map((link) => link.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#030508]/90 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-[#030508]/80 to-transparent',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 md:px-10 md:py-4">
          <a href="#" className="group flex min-w-0 shrink-0 items-center gap-3">
            <span className="relative">
              <USFlag size="md" className="shadow-[0_0_16px_rgba(220,20,60,0.25)]" />
              <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[var(--color-red)] ring-2 ring-[#030508]" />
            </span>
            <div className="min-w-0">
              <span className="section-label block truncate text-[9px] text-white/55">
                Sammy Sarzoza
              </span>
              <span className="block truncate font-[family-name:var(--font-display)] text-xl leading-none tracking-tight text-white transition-colors group-hover:text-patriot-red md:text-2xl">
                Speech 2 Clips
              </span>
            </div>
          </a>

          <nav className="hidden items-center lg:flex">
            <div className="glass-nav flex items-center gap-1 rounded-full px-2 py-1.5">
              {links.map((link) => {
                const id = link.href.slice(1)
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all duration-300',
                      isActive
                        ? 'border-white/30 bg-white/10 text-white'
                        : 'border-transparent text-white/60 hover:border-white/10 hover:bg-white/[0.06] hover:text-white',
                    )}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#act-now"
              className="hidden rounded-full bg-gradient-to-r from-[var(--color-red)] to-[#b01030] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(220,20,60,0.35)] transition hover:brightness-110 sm:inline-flex"
            >
              Book now
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[var(--color-blue-bright)]/40 hover:bg-[var(--color-blue-soft)] lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.div
              className="fixed inset-x-4 top-[5.25rem] z-50 overflow-hidden rounded-2xl border border-white/10 lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="glass-nav flex flex-col p-3">
                {links.map((link) => {
                  const id = link.href.slice(1)
                  const isActive = activeSection === id
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        'rounded-xl border px-4 py-3.5 text-base font-medium transition',
                        isActive
                          ? 'border-white/30 bg-white/10 text-white'
                          : 'border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white',
                      )}
                    >
                      {link.label}
                    </a>
                  )
                })}
                <a
                  href="#act-now"
                  onClick={closeMobile}
                  className="mt-2 rounded-xl bg-gradient-to-r from-[var(--color-red)] to-[#b01030] px-4 py-3.5 text-center text-base font-semibold text-white"
                >
                  Book now
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
