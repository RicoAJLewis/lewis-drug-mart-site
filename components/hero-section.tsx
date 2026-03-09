'use client'

import Link from '@/components/next-link'
import { Phone, Map } from '@/components/icons'
import Reveal from './reveal'
import { pharmacyInfo } from '@/lib/data'

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Hero content wrapper (background moved to parent landing wrapper) */}
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 -ml-48 -mb-48 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="mx-auto max-w-4xl rounded-2xl bg-black/10 backdrop-blur-sm px-6 py-8">
          <div className="max-w-3xl mx-auto text-center text-white">
          {/* Badge */}
          <Reveal className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full border border-white/20 shadow-sm">
              <div className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm font-medium text-white/80">Premium Local Pharmacy</span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Trusted Community Pharmacy in Barbados
            </h1>
          </Reveal>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Friendly service. Trusted guidance. Convenient local care. We&apos;re here to support your health and wellness with compassionate, expert pharmacy services.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {pharmacyInfo.rating}
              </div>
              <p className="text-sm text-white/80">Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {pharmacyInfo.reviewCount}
              </div>
              <p className="text-sm text-white/80">Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">✓</div>
              <p className="text-sm text-white/80">Fully Accessible</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${pharmacyInfo.phone}`}
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label={`Call Lewis Drug Mart at ${pharmacyInfo.phone}`}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(pharmacyInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all shadow-md hover:shadow-lg"
                aria-label="Get directions to Lewis Drug Mart"
              >
                <Map className="w-5 h-5" />
                Get Directions
              </a>
              <Link
                href="/contact#refill"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 bg-white/10 border-2 border-white/20 text-white/90 font-semibold rounded-lg hover:bg-white/20 transition-all shadow-sm hover:shadow-md"
                aria-label="Go to prescription refill form"
              >
                Refill Prescription
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
    </section>
  )
}
