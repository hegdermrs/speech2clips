import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const links = [
  { label: 'What You Get', href: '#what-you-get' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'In Action', href: '#see-it-in-action' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/5 bg-black/70 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 py-5 md:px-10">
        <a href="#" className="group flex flex-col gap-1">
          <span className="section-label text-[10px]">Sammy Sarzoza</span>
          <span
            className="font-[family-name:var(--font-display)] text-2xl leading-none tracking-tight text-white transition-colors group-hover:text-[var(--color-accent)] md:text-3xl"
          >
            Speech 2 Clips
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#act-now"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent-soft)]"
        >
          Book now
        </a>
      </div>
    </header>
  )
}
