'use client'

import { Share2 } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    source: 'पंजाब केसरी',
    sourceColor: '#c0392b',
    headline: 'समझौतों से आई शांति, रेल-हवाई संपर्क से मिटी दिल्ली की दूरी: अमित शाह',
    date: 'Jun 04, 2026',
    bgColor: '#e8f4fd',
  },
  {
    id: 2,
    source: 'Hindustan Times',
    sourceColor: '#1a1a1a',
    headline: 'Monitor demographic changes: Shah to DMs; orders special groups',
    date: 'May 31, 2026',
    bgColor: '#fff8f0',
  },
  {
    id: 3,
    source: 'Millennium Post',
    sourceColor: '#8B0000',
    headline: 'Shah calls for crackdown on illegal infiltration and financial crimes; reviews Border Security in Gujarat',
    date: 'May 31, 2026',
    bgColor: '#f0fff4',
  },
  {
    id: 4,
    source: 'हिन्दुस्तान',
    sourceColor: '#c0392b',
    headline: 'सीमाओं पर बढ़ेगी तकनीकी निगरानी, फेंसिंग कार्य में आएगी तेजी',
    date: 'May 30, 2026',
    bgColor: '#fdf0f0',
  },
  {
    id: 5,
    source: 'State Times',
    sourceColor: '#1a5276',
    headline: "People Of West Bengal Endorsed SIR Despite Opposition's Campaign: Amit Shah",
    date: 'May 30, 2026',
    bgColor: '#f8f9fa',
  },
  {
    id: 6,
    source: 'The Hindu',
    sourceColor: '#8B0000',
    headline: "No legal action if infiltrators go back on their own: Amit Shah",
    date: 'May 29, 2026',
    bgColor: '#fff8f0',
  },
]

const popularPress = [
  {
    id: 1,
    headline: "PM Modi's promise of 'Rs 15 lakh in each...",
    date: 'Feb 06, 2015',
  },
  {
    id: 2,
    headline: "NEP's roots in Santiniketan education mo...",
    date: 'May 10, 2023',
  },
  {
    id: 3,
    headline: 'Democracy reached to grassroots level in...',
    date: 'Sep 28, 2023',
  },
]

const liveStreamCard = {
  title: 'Live Streaming of Programs of',
  subtitle: 'Honorable Minister of Home and Minister of Cooperation',
  name: 'Shri Amit Shah',
  badge: 'Live Soon',
}

export default function PressSection() {
  return (
    <section id="press" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header row */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-6 pb-2 border-b border-gray-200">
          {['Panjaab', 'Hindustan', 'Millenium', 'Hindu', 'Tribune', 'Dainik'].map((src) => (
            <div
              key={src}
              className="h-6 w-20 bg-gray-300 rounded opacity-50 flex-shrink-0"
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: main news grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  {/* News thumbnail placeholder */}
                  <div
                    className="h-36 flex flex-col justify-end p-3"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <span
                      className="text-xs font-bold mb-1"
                      style={{ color: item.sourceColor }}
                    >
                      {item.source}
                    </span>
                    <p className="text-xs text-gray-700 leading-snug line-clamp-3 font-medium">
                      {item.headline}
                    </p>
                  </div>
                  <div className="px-3 py-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <button
                      aria-label="Share article"
                      className="text-gray-400 hover:text-[#e8714e] transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Popular Press + Live Stream */}
          <div className="lg:w-72 flex-shrink-0 flex flex-col gap-4">
            {/* Popular Press */}
            <div>
              <h3
                className="text-base font-bold mb-3 tracking-wide"
                style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
              >
                Popular Press
              </h3>
              <div className="flex flex-col gap-3">
                {popularPress.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    className="flex gap-3 items-start hover:text-[#e8714e] transition-colors group"
                  >
                    <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 leading-snug group-hover:text-[#e8714e] line-clamp-2">
                        {item.headline}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Live Stream Card */}
            <div
              className="rounded-xl overflow-hidden text-white p-4 relative"
              style={{
                background: 'linear-gradient(135deg, #f5a623 0%, #e8714e 100%)',
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold tracking-wider">Live Streaming</span>
                  </div>
                  <p className="text-xs opacity-90 leading-snug">{liveStreamCard.title}</p>
                  <p className="text-xs opacity-90 leading-snug">{liveStreamCard.subtitle}</p>
                  <p
                    className="text-lg font-black mt-1 leading-tight"
                    style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                  >
                    {liveStreamCard.name}
                  </p>
                </div>
                {/* Avatar placeholder */}
                <div className="w-20 h-24 bg-white/20 rounded-lg flex-shrink-0 flex items-center justify-center ml-2">
                  <div className="w-16 h-20 rounded bg-white/30" />
                </div>
              </div>
              <div className="mt-3 bg-white/20 rounded-full text-center py-1">
                <span className="text-xs font-bold">{liveStreamCard.badge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
