const testimonials = [
  {
    quote:
      'Finally, a sugarcane juice that feels premium and clean. No more sticky sugar crashes — just pure, sustained energy.',
    name: 'Serene T.',
    role: 'Yoga Instructor',
  },
  {
    quote:
      'The weekly subscription is a game-changer for my family. We love having fresh juice ready in the fridge every Monday.',
    name: 'Marcus L.',
    role: 'Tech Lead',
  },
  {
    quote:
      "I've tried many sugarcane juices across Singapore. TJE & Co. is on another level — clean, refined, and genuinely fresh.",
    name: 'Priya M.',
    role: 'Nutritionist',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-charcoal/40 mb-5">
            What People Say
          </p>
          <h2 className="font-headline text-4xl md:text-6xl text-forest leading-tight text-balance">
            Trusted by Health-Conscious<br />Singaporeans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream p-10 border-l-2 border-gold/50 flex flex-col">
              <div className="flex gap-0.5 text-gold mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-base leading-none">★</span>
                ))}
              </div>

              <p className="font-headline text-xl italic text-forest mb-8 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-charcoal/8">
                <div className="w-9 h-9 rounded-full bg-sage-pale flex-shrink-0" />
                <div>
                  <span className="block font-sans font-semibold text-sm text-charcoal">
                    {t.name}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-charcoal/40">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
