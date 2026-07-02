import { useEffect, useRef } from 'react'

const CAL_LINK = 'sarzoza/15min'
const NAMESPACE = '15min'

declare global {
  interface Window {
    Cal: {
      ns: Record<string, (...args: unknown[]) => void>
      loaded: boolean
      q: unknown[][]
      config: { forwardQueryParams?: boolean }
      (...args: unknown[]): void
    }
  }
}

export function CalBooking() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (document.getElementById('cal-embed-script')) return

    // Cal.com embed shim — queues calls before the script loads
    ;((C: Window, A: string, L: string) => {
      const p = (a: { q: unknown[][] }, ar: unknown[]) => {
        a.q.push(ar)
      }
      const d = C.document
      C.Cal = C.Cal || function () {
        const cal = C.Cal
        const ar = arguments as unknown as unknown[]
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function () {
            p(api as unknown as { q: unknown[][] }, arguments as unknown as unknown[])
          }
          const namespace = ar[1] as string
          ;(api as unknown as { q: unknown[][] }).q =
            (api as unknown as { q: unknown[][] }).q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] =
              cal.ns[namespace] || (api as unknown as (...args: unknown[]) => void)
            p(cal.ns[namespace] as unknown as { q: unknown[][] }, ar)
            p(cal, ['initNamespace', namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    const Cal = window.Cal
    Cal('init', NAMESPACE, { origin: 'https://app.cal.com' })
    Cal.config = Cal.config || {}
    Cal.config.forwardQueryParams = true

    Cal.ns[NAMESPACE]('inline', {
      elementOrSelector: '#cal-booking-inline',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: CAL_LINK,
    })

    Cal.ns[NAMESPACE]('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return (
    <div
      id="cal-booking-inline"
      ref={ref}
      className="w-full overflow-visible rounded-xl border border-white/10"
      style={{ minHeight: 700 }}
    />
  )
}
