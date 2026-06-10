'use client'

import { useState } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'भारत को एकसूत्र में पिरोने का काम भारतीय जनता पार्टी ने ही किया है',
    thumbnail: 'https://img.youtube.com/vi/placeholder/hqdefault.jpg',
    date: 'May 20, 2026',
  },
  {
    id: 2,
    title: 'Amit Shah addresses the nation on internal security',
    thumbnail: 'https://img.youtube.com/vi/placeholder2/hqdefault.jpg',
    date: 'May 18, 2026',
  },
  {
    id: 3,
    title: 'Union Home Minister Amit Shah on Article 370 abrogation',
    thumbnail: 'https://img.youtube.com/vi/placeholder3/hqdefault.jpg',
    date: 'May 15, 2026',
  },
  {
    id: 4,
    title: 'Amit Shah on cooperative movement in India',
    thumbnail: 'https://img.youtube.com/vi/placeholder4/hqdefault.jpg',
    date: 'May 10, 2026',
  },
]

export default function VideoSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(videos.length - 1, c + 1))

  return (
    <section className="py-4 px-4 max-w-7xl mx-auto">
      {/* Video cards row */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{ transform: `translateX(-${current * 320}px)` }}
          >
            {videos.map((video, idx) => (
              <div
                key={video.id}
                className={`flex-shrink-0 w-72 rounded-lg overflow-hidden cursor-pointer group relative ${
                  idx === 0 ? 'ring-2 ring-[#e8714e]' : ''
                }`}
              >
                {/* Thumbnail placeholder */}
                <div className="relative h-44 bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="text-center px-4">
                      <p className="text-white/60 text-xs leading-relaxed line-clamp-3">{video.title}</p>
                    </div>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#e8714e]/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="bg-white px-3 py-2 border border-gray-100">
                  <p className="text-xs text-gray-600 leading-snug line-clamp-2">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous video"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center disabled:opacity-30 hover:bg-[#e8714e] hover:text-white hover:border-[#e8714e] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          disabled={current >= videos.length - 1}
          aria-label="Next video"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center disabled:opacity-30 hover:bg-[#e8714e] hover:text-white hover:border-[#e8714e] transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slider dots */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to video ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === current ? 'bg-[#e8714e]' : 'bg-[#e8714e]/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
