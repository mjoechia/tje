import Image from 'next/image'

const steps = [
  {
    num: '01',
    title: 'Sourced premium sugarcane',
    body: 'We hand-select only the highest grade Saccharum officinarum from sustainable family farms.',
  },
  {
    num: '02',
    title: 'Cold-pressed extraction',
    body: 'Our slow-masticating press gently extracts every drop of juice without generating heat.',
  },
  {
    num: '03',
    title: 'Bottled immediately',
    body: 'Oxygen is the enemy of freshness. We seal each bottle within seconds of pressing.',
  },
  {
    num: '04',
    title: 'Delivered fresh',
    body: 'Our temperature-controlled fleet ensures your juice arrives as vibrant as when it left.',
  },
]

export default function Process() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: steps */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-charcoal/40 mb-6">
              The Process
            </p>
            <h2 className="font-headline text-4xl md:text-5xl text-forest mb-16 leading-tight">
              From Cane to Bottle —<br />
              <em className="font-light italic">Nothing in Between</em>
            </h2>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-8 h-8 border border-gold/50 flex items-center justify-center">
                    <span className="font-sans text-[10px] font-bold text-gold">{step.num}</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-headline text-xl text-forest mb-2">{step.title}</h4>
                    <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + badge */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB24_QW78zuHnKfZUTbtKntOYzxOEBqB26KYc2CU1kADe2y_JnAaf0g5rXmqdrmcaPtl5mm6zwcZvj6636Pxirkm2KhfHBZoLSnWd_XSLSYBFUfI6TNp0A60ep_Ful0iVXtmIVVDzUx_nEdmncFtVfd6SqGrx7sST4Lym1yzECQendQuqf0tJd7RhbzWTdsOHsmK41ysdGjRBliCR9-vxp1A3t38aIAXRPpqCX-kq8Lqq6UG8FAH8LMwbbgl3CziADeqKl5IjB5Tro"
                alt="Macro detail of fresh sugarcane stalks showing fibrous texture and natural green hues"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Time badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-40 h-40 bg-forest text-cream p-6 flex flex-col justify-center items-center text-center shadow-xl">
              <span className="font-headline text-4xl font-bold">4h</span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-cream/65 mt-1 leading-snug">
                From Press to Doorstep
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
