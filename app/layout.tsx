import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TJE & Co. | Modern Premium Sugarcane Wellness',
  description:
    'Cold-pressed daily for clean, natural energy — no additives, no shortcuts. Fresh sugarcane juice delivered in Singapore.',
  keywords: 'sugarcane juice, cold-pressed, Singapore, wellness, natural, premium',
  openGraph: {
    title: 'TJE & Co. | Modern Premium Sugarcane Wellness',
    description: 'Cold-pressed daily for clean, natural energy.',
    locale: 'en_SG',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-cream text-charcoal`}>
        {children}
      </body>
    </html>
  )
}
