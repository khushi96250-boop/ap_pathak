'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    quote: '"A NATIONALIST TO THE CORE"',
    bg: '/hero-bg.png',
  },
  {
    id: 2,
    quote: '"A RELIGIOUS MAN"',
    bg: '/hero-bg.png',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[560px] md:h-[600px] overflow-hidden" aria-label="Hero banner">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.bg}
            alt="Amit Shah with Indian flag"
            fill
            className="object-cover object-center"
            priority={idx === 0}
          />
          {/* Dark overlay on right side for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/70" />

          {/* Quote text - bottom right */}
          <div className="absolute bottom-16 right-8 md:right-16 text-right max-w-xs">
            <p
              className="text-[#e8714e] font-black text-3xl md:text-5xl leading-tight text-balance"
              style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', lineHeight: 1.1 }}
            >
              {slide.quote.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}

      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              idx === current
                ? 'bg-[#e8714e] border-[#e8714e]'
                : 'bg-transparent border-[#e8714e]/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
