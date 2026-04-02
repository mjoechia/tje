import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-16">
      {/* Warm cream base */}
      <div className="absolute inset-0 bg-cream" />

      {/* Subtle radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sage-pale/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto py-20 lg:py-32">
        {/* Left: copy */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-pale text-gold border border-gold/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Cold-Pressed Daily
          </span>

          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl text-forest leading-[1.0] mb-8 tracking-tight">
            Pure<br />
            Sugarcane.<br />
            <em className="font-light italic">Perfected.</em>
          </h1>

          <p className="font-sans text-base md:text-lg text-charcoal/65 max-w-md mb-10 leading-relaxed">
            Cold-pressed daily for clean, natural energy — with no additives, no shortcuts. The
            ultimate hydration ritual for the modern professional.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-forest text-cream text-xs font-medium tracking-[0.18em] uppercase hover:bg-forest-800 transition-colors duration-200 active:scale-95">
              Shop Now
            </button>
            <button className="px-8 py-4 border border-forest text-forest text-xs font-medium tracking-[0.18em] uppercase hover:bg-forest hover:text-cream transition-all duration-200 active:scale-95">
              View Plans
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-charcoal/10">
            <div>
              <p className="font-headline text-3xl font-bold text-forest">4h</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-charcoal/45 mt-1">
                Press to door
              </p>
            </div>
            <div>
              <p className="font-headline text-3xl font-bold text-forest">100%</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-charcoal/45 mt-1">
                Pure sugarcane
              </p>
            </div>
            <div>
              <p className="font-headline text-3xl font-bold text-forest">0</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-charcoal/45 mt-1">
                Additives
              </p>
            </div>
          </div>
        </div>

        {/* Right: product image */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          {/* Decorative circle bg */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-sage-pale/70" />
          </div>

          <div className="relative z-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDssV5B6j-e36-E2v0HVzEPlRMyQd6lotDSyR_f_A8QeoaU-pBqNeJXvyHq8xUiQwyxMFGfWFMP35gV-9R8msf3FIYUhI_SuLBVYwOAfa2Zly-0T9NtAlol9ZMUfLUs0huqi8-ICeRCshS48IhqRwXXTHQgUXTLEU5jcQgeW32xELRVqs5_lT5IQgBtHOx8MmlB_UUuZzrd2SP8wFGcDw8kflhTDvwPPE7HacguzmtKcgz03KDSuW5uuaEiomPG8z4kjQlsCGUewSg"
              alt="Premium tall glass bottle of fresh sugarcane juice with condensation"
              width={420}
              height={520}
              priority
              className="w-full max-w-sm h-[480px] object-cover shadow-2xl"
            />
          </div>

          {/* Heritage badge */}
          <div className="absolute bottom-4 -left-4 z-20 w-28 h-28 rounded-full bg-forest border-2 border-gold/40 flex items-center justify-center text-center p-4 shadow-xl">
            <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-gold leading-snug">
              100% Fresh in Singapore
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
