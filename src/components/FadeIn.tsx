import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const reduceMotion = useReducedMotion()

  const offset = {
    up: { x: 0, y: 32 },
    left: { x: -32, y: 0 },
    right: { x: 32, y: 0 },
  }[direction]

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
