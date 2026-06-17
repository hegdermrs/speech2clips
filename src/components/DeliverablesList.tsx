import { CheckCircle2 } from 'lucide-react'
import { deliverables } from '../data/deliverables'
import { cn } from '../lib/utils'

type DeliverablesListProps = {
  className?: string
  compact?: boolean
}

export function DeliverablesList({ className, compact }: DeliverablesListProps) {
  return (
    <ul className={cn('space-y-2.5', className)}>
      {deliverables.map((item) => (
        <li
          key={item}
          className={cn(
            'flex items-start gap-2.5 text-[var(--color-muted)]',
            compact ? 'text-sm' : 'text-base',
          )}
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-patriot-red" />
          {item}
        </li>
      ))}
    </ul>
  )
}
