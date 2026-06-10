'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  {
    label: 'Press',
    href: '#press',
    children: [
      { label: 'News', href: '#' },
      { label: 'Interviews', href: '#' },
      { label: 'Editorials', href: '#' },
      { label: 'Critic', href: '#' },
      { label: 'Press Releases', href: '#' },
    ],
  },
  {
    label: 'My View',
    href: '#myview',
    children: [
      { label: 'Quotes', href: '#' },
      { label: 'Blogs', href: '#' },
      { label: 'Articles', href: '#' },
    ],
  },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
          scrolled ? 'shadow-lg' : ''
        }`}
        style={{ backgroundColor: '#e8714e' }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            {/* BJP Lotus Icon */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="BJP Logo"
            >
              <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="2" fill="none" />
              <path
                d="M30 8 C30 8 18 20 18 30 C18 36 23 40 30 40 C37 40 42 36 42 30 C42 20 30 8 30 8Z"
                fill="white"
              />
              <path
                d="M14 22 C14 22 20 28 20 34 C20 38 24 42 30 42"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M46 22 C46 22 40 28 40 34 C40 38 36 42 30 42"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="30" cy="42" r="3" fill="white" />
              <line x1="20" y1="46" x2="40" y2="46" stroke="white" strokeWidth="2" />
            </svg>
            <span
              className="text-white font-bold tracking-wider text-base uppercase"
              style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', letterSpacing: '0.12em' }}
            >
              AMIT SHAH
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="nav-link flex items-center gap-1 text-white text-sm font-medium hover:text-white/80 transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-md py-2 min-w-[160px] z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e8714e] transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="text-white font-medium text-sm flex items-center gap-1">
              EN <ChevronDown className="w-3 h-3" />
            </button>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded transition-colors lg:flex"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="bg-white px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full border border-gray-200 rounded px-4 py-2 text-sm outline-none focus:border-[#e8714e]"
              autoFocus
            />
          </div>
        )}
      </header>

      {/* Full-screen mega menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="relative ml-auto w-full max-w-sm h-full overflow-y-auto shadow-2xl text-white flex flex-col"
            style={{ backgroundColor: '#e8714e' }}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <span
                className="font-bold text-lg uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
              >
                MENU
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-white hover:text-white/70"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {[
                'HOME',
                'ABOUT',
                'STALWART SAYS',
                'PRESS',
                'MY VIEWS',
                'GALLERY',
                'TIMELINE',
                'CONTACT US',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 border-b border-white/20 font-semibold text-base tracking-wide hover:text-white/70 transition-colors"
                  style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Social follow */}
            <div className="mt-auto p-4 border-t border-white/20">
              <p className="text-sm font-semibold mb-3 tracking-wider uppercase">Follow</p>
              <div className="flex gap-3">
                {['f', 'X', 'in', 'yt', 'wa'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-xs font-bold hover:bg-white/10 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Right sidebar float buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col">
        {['Share', 'Act', 'Listen'].map((label) => (
          <button
            key={label}
            className="text-white text-xs font-semibold writing-mode-vertical px-2 py-3 hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: '#e8714e',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.05em',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  )
}
