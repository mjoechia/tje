'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream shadow-[0_1px_0_rgba(31,61,43,0.08)]'
            : 'bg-cream/90 backdrop-blur-sm'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 h-16">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] text-forest"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>

          {/* Desktop left nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/shop"
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-forest font-semibold border-b border-forest/60 pb-0.5"
            >
              Shop
            </Link>
            <Link
              href="/process"
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-charcoal/60 hover:text-forest transition-colors"
            >
              Process
            </Link>
            <Link
              href="/bundles"
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-charcoal/60 hover:text-forest transition-colors"
            >
              Bundles
            </Link>
          </div>

          {/* Centred logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-headline text-[1.4rem] italic font-bold text-forest tracking-tight">
              TJE &amp; Co.
            </span>
          </Link>

          {/* Cart */}
          <button
            aria-label="Cart (0 items)"
            className="relative text-forest hover:text-gold transition-colors duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-gold text-forest text-[8px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center leading-none">
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {[
          { label: 'Shop', href: '/shop' },
          { label: 'Process', href: '/process' },
          { label: 'Bundles', href: '/bundles' },
          { label: 'Our Story', href: '/story' },
          { label: 'Wholesale', href: '/wholesale' },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-headline text-5xl italic text-forest hover:text-gold transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-8 font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/40">
          hello@tje.com.sg
        </div>
      </div>
    </>
  )
}
