export const OVERVIEW_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/RFfdPP7tlyk'

export const sampleClips = [
  {
    id: 'america-founding',
    title: "America's Founding",
    subtitle: 'Fundraiser Speech',
    youtubeId: 'iOqENhOamnc',
  },
  {
    id: 'china-growth',
    title: "China's Growth",
    subtitle: 'Fundraiser Speech',
    youtubeId: '9N0dSJ-tG3E',
  },
  {
    id: 'national-bank',
    title: 'National Bank',
    subtitle: 'Debate',
    youtubeId: 'YaHccoI7_Vg',
  },
  {
    id: 'healthcare-fraud',
    title: 'Healthcare Fraud',
    subtitle: 'Debate',
    youtubeId: 'nYh9jar8en0',
  },
  {
    id: 'lucero',
    title: 'Lucero For Congress',
    subtitle: 'Stump Speech',
    youtubeId: '0UJ7s_af_ww',
  },
  {
    id: 'war-leadership',
    title: 'War & Leadership',
    subtitle: 'Stump Speech',
    youtubeId: 'ijsLhLNui9M',
  },
] as const

export function youtubeEmbedUrl(youtubeId: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
  })

  if (autoplay) {
    params.set('autoplay', '1')
  }

  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`
}

export function youtubeThumbnailUrl(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}
