const pillars = [
  {
    symbol: '❄',
    label: 'Cold-Pressed Extraction',
    body: 'Preserving vital enzymes and antioxidants that heat-pasteurized juices destroy in the process.',
  },
  {
    symbol: '✿',
    label: 'Pure Ingredients Only',
    body: 'No added sugar, water, or coloring. Just 100% premium sugarcane harvested at peak sweetness.',
  },
  {
    symbol: '◷',
    label: 'Fresh to Order',
    body: 'We press daily and deliver within hours to ensure maximum freshness and nutritional integrity.',
  },
]

export default function WhyDifferent() {
  return (
    <section className="py-32 px-6 bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-charcoal/40 mb-5">
            Our Standard
          </p>
          <h2 className="font-headline text-4xl md:text-6xl text-forest leading-tight max-w-3xl mx-auto text-balance">
            Not All Sugarcane Juice<br />Is Created Equal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-charcoal/10">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className={`p-12 md:p-16 group ${
                i < pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-charcoal/10' : ''
              }`}
            >
              <div className="text-3xl text-gold mb-8">{p.symbol}</div>
              <h3 className="font-headline text-2xl md:text-[1.6rem] text-forest mb-4 leading-snug">
                {p.label}
              </h3>
              <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
