const items = [
  '100% Cold-Pressed',
  'No Added Sugar',
  'Freshly Made in SG',
  'No Preservatives',
  'Same-Day Delivery',
  'Sustainably Sourced',
  'No Coloring Added',
  '500ml Per Bottle',
]

export default function TrustBar() {
  // Duplicate items so the marquee loops seamlessly
  const doubled = [...items, ...items]

  return (
    <div className="bg-forest py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-3 px-8 flex-shrink-0">
            <span className="text-gold text-[10px]">✦</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-cream/75 font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
