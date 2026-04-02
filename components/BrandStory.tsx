export default function BrandStory() {
  return (
    <section className="py-32 bg-forest text-cream overflow-hidden relative">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="w-10 h-[1px] bg-gold mx-auto mb-12" />

        <h2 className="font-headline text-4xl md:text-6xl mb-12 leading-tight">
          Rooted in Tradition.<br />
          <em className="font-light italic">Refined for Today.</em>
        </h2>

        <p className="font-sans text-base md:text-lg font-light leading-relaxed mb-12 text-cream/75 max-w-2xl mx-auto">
          TJE &amp; Co. was born from a desire to elevate a humble Southeast Asian staple into a
          premium wellness experience. We believe that true luxury lies in simplicity, purity, and
          the deep respect for nature&apos;s original design.
        </p>

        <div className="w-10 h-[1px] bg-gold mx-auto mb-10" />

        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold/70">
          Est. Singapore
        </p>
      </div>
    </section>
  )
}
