import { Play } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  type sampleClips,
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
} from '../data/media'

type Clip = (typeof sampleClips)[number]

type ClipCardProps = {
  clip: Clip
  index: number
  isActive: boolean
  onSelect: () => void
}

export function ClipCard({ clip, index, isActive, onSelect }: ClipCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'group w-full rounded-xl bg-[var(--color-surface)] p-3 text-left transition',
        isActive ? 'ring-2 ring-[var(--color-red)]/60' : 'hover:bg-white/[0.03]',
      )}
    >
      <div className="relative mb-3 aspect-[9/16] overflow-hidden rounded-lg bg-black">
        {isActive ? (
          <iframe
            src={youtubeEmbedUrl(clip.youtubeId, true)}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <>
            <img
              src={youtubeThumbnailUrl(clip.youtubeId)}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/50 backdrop-blur-sm">
                <Play className="h-4 w-4 fill-white text-white" />
              </span>
            </div>
          </>
        )}
        <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white/80">
          Clip {index + 1}
        </span>
      </div>
      <p className="truncate text-sm font-medium text-white">{clip.title}</p>
      <p className="mt-0.5 line-clamp-2 text-xs text-[var(--color-muted)]">
        {clip.subtitle}
      </p>
    </button>
  )
}
