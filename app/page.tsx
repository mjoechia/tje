import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import WhyDifferent from '@/components/WhyDifferent'
import Benefits from '@/components/Benefits'
import ProductShowcase from '@/components/ProductShowcase'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Subscriptions from '@/components/Subscriptions'
import BrandStory from '@/components/BrandStory'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyDifferent />
        <Benefits />
        <ProductShowcase />
        <Process />
        <Testimonials />
        <Subscriptions />
        <BrandStory />

        {/* Final CTA */}
        <section className="py-32 bg-cream text-center px-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-charcoal/40 mb-5">
            Begin the ritual
          </p>
          <h2 className="font-headline text-4xl md:text-6xl text-forest mb-12 italic font-light">
            Start Drinking Better Today
          </h2>
          <button className="px-12 py-5 bg-forest text-cream text-xs tracking-[0.2em] uppercase font-medium hover:bg-forest-800 transition-colors duration-200 shadow-lg active:scale-95">
            Shop Now
          </button>
        </section>

        <Footer />
      </main>
      <BottomNav />
    </>
  )
}
