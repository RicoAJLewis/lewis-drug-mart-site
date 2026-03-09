import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import AnnouncementBar from '@/components/announcement-bar'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lewis Drug Mart | Trusted Pharmacy in Barbados',
  description:
    'Your trusted community pharmacy in Barbados. Friendly service, expert guidance, and convenient care. 4.6-star rated, fully accessible.',
  keywords: 'pharmacy, Barbados, prescriptions, medications, healthcare, Bridgetown',
  authors: [{ name: 'Lewis Drug Mart' }],
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lewisdrugmart.bb',
    siteName: 'Lewis Drug Mart',
    title: 'Lewis Drug Mart | Trusted Pharmacy in Barbados',
    description:
      'Your trusted community pharmacy in Barbados. Friendly service, expert guidance, and convenient care.',
  },
  icons: {
    icon: '/lewis-drug-mart-favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/lewis-drug-mart-favicon.svg" />
        <link rel="apple-touch-icon" href="/lewis-drug-mart-favicon.svg" />
      </head>
      <body className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
