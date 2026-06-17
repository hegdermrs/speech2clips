import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { cn } from '../lib/utils'
import type { sampleClips } from '../data/media'

type Clip = (typeof sampleClips)[number]

type ClipCardProps = {
  clip: Clip
  index: number
  isActive: boolean
  onSelect: () => void
}

export function ClipCard({ clip, index, isActive, onSelect }: ClipCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    onSelect()

    if (video.paused) {
      void video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <button
      type="button"
      onClick={togglePlay}
      className={cn(
        'group w-full rounded-xl bg-[var(--color-surface)] p-3 text-left transition',
        isActive ? 'ring-2 ring-[var(--color-red)]/60' : 'hover:bg-white/[0.03]',
      )}
    >
      <div className="relative mb-3 aspect-[9/16] overflow-hidden rounded-lg bg-black">
        <video
          ref={videoRef}
          src={clip.src}
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center transition',
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100',
          )}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/50 backdrop-blur-sm">
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 fill-white text-white" />
            )}
          </span>
        </div>
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
