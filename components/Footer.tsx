import Link from 'next/link'

const navLinks = ['Shop', 'Process', 'Bundles', 'Our Story', 'Wholesale']
const legalLinks = ['Privacy', 'Terms', 'Shipping', 'Lab Results']

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream w-full pt-20 pb-36 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-16 border-b border-cream/10">
          <div>
            <span className="font-headline text-4xl font-bold italic text-gold block mb-2">
              TJE &amp; Co.
            </span>
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-cream/35">
              Editorial Wellness &middot; Singapore
            </p>
          </div>

          <nav className="grid grid-cols-2 sm:flex gap-x-12 gap-y-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '-')}`}
                className="font-sans text-sm text-cream/55 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10">
          <nav className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '-')}`}
                className="font-sans text-xs text-cream/35 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link}
              </Link>
            ))}
          </nav>

          <p className="font-sans text-xs tracking-widest text-cream/25 text-center md:text-right">
            &copy; {new Date().getFullYear()} TJE &amp; Co. Pte Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
