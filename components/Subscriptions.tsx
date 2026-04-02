const plans = [
  {
    name: '6 Bottle Pack',
    desc: 'Perfect for a work week boost.',
    price: '$36',
    sub: '$6.00 / bottle',
    cta: 'Select Pack',
    featured: false,
    features: [],
  },
  {
    name: 'Weekly Subscription',
    desc: 'Delivered every Monday morning.',
    price: '$65',
    sub: 'per fortnight',
    cta: 'Subscribe Now',
    featured: true,
    badge: 'Most Popular',
    features: [
      '12 bottles delivered',
      'Pause or cancel anytime',
      'Free thermal bag',
      'Priority dispatch',
    ],
  },
  {
    name: '12 Bottle Pack',
    desc: 'Share the goodness with family.',
    price: '$68',
    sub: '$5.60 / bottle',
    cta: 'Select Pack',
    featured: false,
    features: [],
  },
]

export default function Subscriptions() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-charcoal/40 mb-5">
            Make It a Ritual
          </p>
          <h2 className="font-headline text-4xl md:text-6xl text-forest mb-4">
            Choose Your Plan
          </h2>
          <p className="font-sans text-sm text-charcoal/55">
            Save more when you commit to wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between transition-all ${
                plan.featured
                  ? 'bg-forest text-cream p-10 md:p-12 shadow-2xl md:-my-6'
                  : 'bg-cream border border-charcoal/12 p-10 md:p-12 hover:border-forest/40'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-forest px-4 py-1.5 font-sans font-bold text-[9px] uppercase tracking-widest whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3
                  className={`font-headline text-2xl mb-2 ${
                    plan.featured ? 'text-cream' : 'text-forest'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-sans text-sm mb-8 ${
                    plan.featured ? 'text-cream/65' : 'text-charcoal/55'
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mb-10">
                  <span
                    className={`font-headline text-5xl ${
                      plan.featured ? 'text-cream' : 'text-forest'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`font-sans text-xs ml-2 ${
                      plan.featured ? 'text-cream/50' : 'text-charcoal/45'
                    }`}
                  >
                    {plan.sub}
                  </span>
                </div>

                {plan.features.length > 0 && (
                  <ul className="space-y-3 mb-12">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 font-sans text-sm text-cream/75"
                      >
                        <span className="text-gold text-xs flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                className={`w-full py-4 text-xs font-medium tracking-[0.18em] uppercase transition-all duration-200 active:scale-95 ${
                  plan.featured
                    ? 'bg-gold text-forest hover:bg-gold-light'
                    : 'border border-forest text-forest hover:bg-forest hover:text-cream'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
