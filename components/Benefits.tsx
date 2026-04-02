const cards = [
  {
    icon: '⚡',
    title: 'Clean Energy',
    body: 'Natural sucrose for sustained focus without the caffeine crash.',
    bg: 'bg-forest',
    iconColor: 'text-gold',
    titleColor: 'text-cream',
    bodyColor: 'text-cream/65',
  },
  {
    icon: '💧',
    title: 'Deep Hydration',
    body: 'Rich in electrolytes to replenish your body after a long day.',
    bg: 'bg-cream-dark',
    iconColor: 'text-forest',
    titleColor: 'text-forest',
    bodyColor: 'text-charcoal/60',
  },
  {
    icon: '🌿',
    title: 'Gentle Detox',
    body: 'Natural alkaline properties that support healthy liver function.',
    bg: 'bg-cream border border-charcoal/12',
    iconColor: 'text-forest',
    titleColor: 'text-forest',
    bodyColor: 'text-charcoal/60',
  },
  {
    icon: '✦',
    title: 'Daily Wellness',
    body: 'Packed with potassium and iron for overall vitality and immunity.',
    bg: 'bg-gold-pale border border-gold/20',
    iconColor: 'text-gold',
    titleColor: 'text-forest',
    bodyColor: 'text-charcoal/60',
  },
]

export default function Benefits() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="font-headline text-4xl md:text-6xl text-forest max-w-xl leading-tight">
            Designed for Modern Living
          </h2>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/45 max-w-xs text-right">
            Functional wellness in every sip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} p-8 md:p-10 flex flex-col justify-between min-h-[280px]`}
            >
              <div className={`text-2xl ${card.iconColor}`}>{card.icon}</div>
              <div>
                <h3 className={`font-headline text-2xl mb-3 ${card.titleColor}`}>
                  {card.title}
                </h3>
                <p className={`font-sans text-sm leading-relaxed ${card.bodyColor}`}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
