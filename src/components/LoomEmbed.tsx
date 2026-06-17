import { cn } from '../lib/utils'

type LoomEmbedProps = {
  src: string
  title?: string
  className?: string
}

export function LoomEmbed({
  src,
  title = 'How Speech 2 Clips works',
  className,
}: LoomEmbedProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-black',
        className,
      )}
      style={{ paddingBottom: '54.04732254047322%' }}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
