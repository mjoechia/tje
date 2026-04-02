import Image from 'next/image'

const highlights = [
  '100% cold-pressed',
  'No added sugar',
  'No preservatives',
  '500ml per bottle',
  'Same-day delivery',
]

export default function ProductShowcase() {
  return (
    <section className="py-32 px-6 bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-charcoal/40 mb-5">
            The Flagship
          </p>
          <h2 className="font-headline text-4xl md:text-6xl text-forest">
            Our Signature Press
          </h2>
        </div>

        <div className="bg-cream flex flex-col lg:flex-row items-stretch overflow-hidden border border-charcoal/10 shadow-sm max-w-5xl mx-auto">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApEj4Fu_Q-YmwIZnRxuBA3BsquXX7p2KtwLBEXfgV0R94MfYNbtRUIkJxGLWoDtpOEt0orRw3tebmS0UuRGuYbYkyO6YU9pzJH6F2gf-glLUyBF5fWQIk2lpaHQTE8dNlOt6PmCYW-spt-GEV-5DiDhdpHZXDXbLw6WoO9O-DecZKgG8NrQM3r5cIT_NXi8n-sGxsdRQH6NU3pzU6-Xo0X0IbNUqRhMb8_JLz9XctQQqioYfcy8VY0E8o7f0-oweH_ulXDy7CvjY"
              alt="Minimalist clear glass bottle filled with vibrant light green sugarcane juice"
              width={600}
              height={700}
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gold font-sans text-[10px] uppercase tracking-[0.22em] mb-5">
              <span className="w-8 h-[1px] bg-gold" />
              Bestseller
            </div>

            <h3 className="font-headline text-3xl md:text-4xl text-forest mb-5 leading-tight">
              Pure Cold-Pressed<br />Sugarcane Juice
            </h3>

            <p className="font-sans text-sm text-charcoal/60 mb-8 leading-relaxed">
              Our flagship elixir. Simple, honest, and incredibly refreshing. 500ml of pure
              vitality — nothing else.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 font-sans text-sm text-charcoal/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-2 mb-10 pb-10 border-b border-charcoal/10">
              <span className="font-headline text-5xl text-forest">$6.50</span>
              <span className="font-sans text-sm text-charcoal/45">/ bottle</span>
            </div>

            <div className="space-y-3">
              <button className="w-full py-4 bg-forest text-cream text-xs font-medium tracking-[0.18em] uppercase hover:bg-forest-800 transition-colors duration-200 active:scale-95">
                Add to Cart
              </button>
              <button className="w-full py-4 border border-forest text-forest text-xs font-medium tracking-[0.18em] uppercase hover:bg-forest hover:text-cream transition-all duration-200 flex items-center justify-center gap-3">
                Buy Bundle
                <span className="bg-gold/20 text-gold text-[9px] px-2 py-0.5 font-bold tracking-widest">
                  SAVE 10%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
