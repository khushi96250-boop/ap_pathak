'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const timelineEvents = [
  {
    year: '1964',
    title: 'Birth in Mumbai',
    description:
      'Amit Shah was born to Gujarati parents Shri Anilchandra and Smt. Kusumben in Mumbai on October 22, 1964. He belongs to a family with strong values and traditions deeply rooted in Indian culture.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '1977',
    title: 'Early Political Awakening',
    description:
      'At the age of 13, during India\'s politically turbulent times, the young Amit Shah was seen campaigning for Jan Sangh candidate Maniben Patel. The RSS took him under its wings, recognizing the fire within him.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '1982',
    title: 'Joins RSS & BJP',
    description:
      'Amit Shah formally joined the Rashtriya Swayamsevak Sangh and later the Bharatiya Janata Party, beginning his lifelong commitment to the organization and its ideology.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '1997',
    title: 'First Electoral Victory',
    description:
      'Amit Shah won his first election as the BJP candidate for the Sarkhej Assembly bye-polls in Gujarat with a margin of 24,689 votes, beginning an unbeaten electoral record.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '2014',
    title: 'National General Secretary & UP In-charge',
    description:
      'Made National General Secretary of BJP and given charge of Uttar Pradesh for the 2014 Lok Sabha elections. Under his management, the party won 73 out of 80 seats in the state.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '2014',
    title: 'Elected National President of BJP',
    description:
      'In recognition of his contribution to the party\'s historic victory in the 2014 Lok Sabha polls, Amit Shah was elected the BJP\'s National President, going on to transform it into the world\'s largest political party.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '2019',
    title: 'Union Minister of Home Affairs',
    description:
      'After winning from the Gandhinagar constituency with a record margin of 5.57 lakh votes, Amit Shah was sworn in as the Union Minister of Home Affairs, ushering in transformative changes in India\'s internal security.',
    image: '/timeline-mumbai.png',
  },
  {
    year: '2021',
    title: 'Minister of Cooperation',
    description:
      'Assumed charge of the newly created Ministry of Cooperation in 2021 with the vision of "Sahakar se Samriddhi" — making cooperative societies a pillar of India\'s economic growth.',
    image: '/timeline-mumbai.png',
  },
]

const yearTabs = ['1964', '1977', '1982', '1997', '2002', '2014', '2019', '2021']

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1))
  const next = () => setActiveIndex((i) => Math.min(timelineEvents.length - 1, i + 1))

  const event = timelineEvents[activeIndex]

  return (
    <section id="timeline" className="py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Year tabs */}
        <div className="overflow-x-auto">
          <div className="flex gap-0 border-b border-gray-200 min-w-max">
            {yearTabs.map((year, idx) => (
              <button
                key={year + idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 ${
                  idx === activeIndex
                    ? 'border-[#e8714e] text-[#e8714e]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                style={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Main event card */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-start relative">
          {/* Image */}
          <div className="md:w-2/5 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="w-full h-56 md:h-64 object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 relative">
            {/* Year badge */}
            <div
              className="absolute -top-3 right-0 md:right-auto md:left-0 text-white text-lg font-black px-4 py-1 rounded"
              style={{
                backgroundColor: '#e8714e',
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              }}
            >
              {event.year}
            </div>
            <div className="pt-8 md:pt-6">
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  color: '#1a1a1a',
                }}
              >
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-sm font-semibold text-[#e8714e] hover:underline"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2 md:absolute md:top-2 md:right-0">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous event"
              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-500 disabled:opacity-30 hover:border-[#e8714e] hover:text-[#e8714e] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === timelineEvents.length - 1}
              aria-label="Next event"
              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-500 disabled:opacity-30 hover:border-[#e8714e] hover:text-[#e8714e] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
