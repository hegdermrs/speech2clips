import type { ReactNode } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { cn } from '../lib/utils'

type MotifProps = {
  className?: string
}

type StarShapeProps = MotifProps & {
  size?: number
}

export function StarShape({ className, size = 20 }: StarShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 1.5l2.85 6.42 6.98.58-5.28 4.52 1.65 6.82L12 16.9l-6.2 3.34 1.65-6.82-5.28-4.52 6.98-.58L12 1.5z"
      />
    </svg>
  )
}

export function USFlag({ className, size = 'sm' }: MotifProps & { size?: 'sm' | 'md' }) {
  const sizes = {
    sm: 'h-3.5 w-[1.3125rem]',
    md: 'h-5 w-[1.875rem]',
  }

  return (
    <US
      title="United States"
      className={cn('rounded-[2px] shadow-sm', sizes[size], className)}
    />
  )
}

export function PatrioticBarThin({ className }: MotifProps) {
  return (
    <div className={cn('flex h-px w-full items-center opacity-80', className)} aria-hidden>
      <div className="h-full flex-1 bg-gradient-to-r from-transparent to-[var(--color-red)]" />
      <StarShape size={7} className="mx-1.5 text-white/45" />
      <div className="h-full w-6 bg-white/50 sm:w-8" />
      <StarShape size={7} className="mx-1.5 text-white/45" />
      <div className="h-full flex-1 bg-gradient-to-l from-transparent to-[var(--color-blue-bright)]" />
    </div>
  )
}

export function PatrioticBar({ className }: MotifProps) {
  return (
    <div className={cn('flex h-3 w-full items-center gap-1', className)} aria-hidden>
      <div className="h-full flex-1 bg-[var(--color-red)]" />
      <StarShape size={10} className="text-white/90" />
      <div className="h-full w-6 bg-white sm:w-8" />
      <StarShape size={10} className="text-white/90" />
      <div className="h-full flex-1 bg-[var(--color-blue)]" />
    </div>
  )
}

export function CantonAccent({ className }: MotifProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute overflow-hidden rounded-br-[100px] bg-[linear-gradient(135deg,#002868_0%,#001a45_100%)] opacity-80',
        className,
      )}
      aria-hidden
    />
  )
}

export function PatriotDots({ className }: MotifProps) {
  return (
    <span className={cn('inline-flex gap-1', className)} aria-hidden>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-red)]" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue-bright)]" />
    </span>
  )
}

const patriotIconColors = ['text-patriot-red', 'text-patriot-white', 'text-patriot-blue'] as const

export function patriotIconColor(index: number) {
  return patriotIconColors[index % patriotIconColors.length]
}

const patriotStepColors = [
  'text-patriot-red',
  'text-patriot-white/90',
  'text-patriot-blue',
] as const

export function patriotStepColor(index: number) {
  return patriotStepColors[index % patriotStepColors.length]
}

export function PatriotBadge({ children, className }: MotifProps & { children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]',
        className,
      )}
    >
      <USFlag size="sm" />
      {children}
    </span>
  )
}
