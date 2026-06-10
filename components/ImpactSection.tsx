'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

const impactCards = [
  {
    id: 1,
    title: "People's Person",
    subtitle: '25 years as elected representatives serving people as MLA, MP-RS, MP-LS',
    detail:
      'Some political pundits say that leaders are born while others are of the view that they are created by the circumstances. But Amit Shah is a leader who has been hailed as one created by the masses themselves. His electrifying connection with the people and an uncanny ability to understand their problems are the factors that make him a person of the common folks. He created a lush green cover in his assembly constituency at a time when no one was talking about environment protection.',
  },
  {
    id: 2,
    title: 'Facilitator of Change',
    subtitle:
      'Eight years as Minister in Gujarat Government & Exemplary work as Union Minister for Home and Cooperation',
    detail:
      'To ensure peace and stability in Kashmir he chose the path of abrogating Article 370 under the guidance of Prime Minister Narendra Modi. In the first three years of his tenure, Northeast India has seen a 68% decrease in terror incidents, a 60% decrease in the death of security personnel, and an 83% decrease in the death of civilians. His deft handling of tricky situations resulted in a drastic dip in Left Wing Extremism.',
  },
  {
    id: 3,
    title: 'Contributor in Nation Building',
    subtitle: 'A Firm Believer in Indian Culture & Ethos',
    detail:
      'Amit Shah has always been a firm believer in Indian culture and ethos. His initiatives have consistently aimed at strengthening the cultural and social fabric of the nation. He introduced chess in schools of Ahmedabad and created toy banks for children from poor families in his constituency, demonstrating his commitment to grassroots development and the holistic welfare of society.',
  },
  {
    id: 4,
    title: 'Organization Builder: Six Years as National President of BJP',
    subtitle: 'Making BJP world\'s largest party and building an invincible election machine',
    detail:
      'As the National President of the BJP, Amit Shah transformed the party into the world\'s largest political organization in terms of primary membership. His organizational skills and meticulous planning led to decisive victories in numerous state and central elections. Under his leadership, the BJP\'s membership soared and the party\'s electoral machinery became virtually unbeatable across the country.',
  },
  {
    id: 5,
    title: 'Sports Administrator',
    subtitle: 'Taking Cricket & Chess in Gujarat to greater heights',
    detail:
      'Amit Shah helmed the Ahmedabad Central Board of Cricket Association, Gujarat State Cricket Association, and Gujarat Chess Association. With the advice of the then Chief Minister Narendra Modi, he introduced chess in schools of Ahmedabad. His contribution to sports administration brought recognition to Gujarat and nurtured sporting talent at the grassroots level.',
  },
  {
    id: 6,
    title: 'Pioneer of Cooperative Moment in Gujarat',
    subtitle: 'Important role in bringing cooperative moment at the centre stage of Gujarat Economy',
    detail:
      'Amit Shah played a pioneering role in bringing the cooperative movement to the centre stage of the Gujarat economy. Under the new regime, major policy decisions to enable a structured evolution of the sector were rolled out. The individual housing loan limit for urban cooperative banks has been doubled and rural Co-operative Banks are now permitted to lend to Commercial Real Estate, empowering millions.',
  },
]

export default function ImpactSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="about" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="mb-8">
        <span
          className="inline-block bg-[#e8714e] text-white text-sm font-bold tracking-widest px-5 py-2 rounded-full"
          style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
        >
          IMPACT
        </span>
        <div className="h-px bg-gray-200 mt-4" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Big circle with "40 years" */}
        <div className="lg:w-72 flex-shrink-0 flex items-center justify-center">
          <div
            className="relative w-64 h-64 rounded-full border-2 flex items-center justify-center text-center"
            style={{ borderColor: '#e8714e' }}
          >
            <div
              className="w-52 h-52 rounded-full border flex items-center justify-center text-center p-4"
              style={{ borderColor: '#e8714e' }}
            >
              <div>
                <p
                  className="text-5xl font-black leading-none"
                  style={{ color: '#e8714e', fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  40
                </p>
                <p
                  className="text-2xl font-bold leading-tight mt-1"
                  style={{ color: '#e8714e', fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  years in Public Life
                </p>
                <p className="text-xs text-[#e8714e]/70 mt-2 leading-snug">
                  Journey from a polling booth worker to Union Home Minister
                </p>
                <button className="mt-3 w-7 h-7 rounded-full border border-[#e8714e] flex items-center justify-center mx-auto hover:bg-[#e8714e] hover:text-white transition-colors">
                  <ChevronDown className="w-3 h-3 text-[#e8714e]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 2×3 grid of cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {impactCards.map((card) => (
            <div key={card.id}>
              <div
                className="impact-card rounded-xl border border-[#e8714e]/30 p-5 cursor-pointer hover:border-[#e8714e] bg-white"
                onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
              >
                <h3
                  className="text-base font-semibold leading-snug mb-2"
                  style={{ color: '#e8714e', fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.subtitle}</p>
                <div className="mt-3 flex justify-center">
                  <button
                    aria-label={`Expand ${card.title}`}
                    className="w-7 h-7 rounded-full border border-[#e8714e]/50 flex items-center justify-center hover:bg-[#e8714e] hover:text-white hover:border-[#e8714e] transition-colors"
                  >
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform"
                      style={{
                        color: '#e8714e',
                        transform: expandedCard === card.id ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded card modal */}
      {expandedCard !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              aria-label="Close"
              onClick={() => setExpandedCard(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: '#e8714e', fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
            >
              {impactCards.find((c) => c.id === expandedCard)?.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {impactCards.find((c) => c.id === expandedCard)?.subtitle}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {impactCards.find((c) => c.id === expandedCard)?.detail}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
