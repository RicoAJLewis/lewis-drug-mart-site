import PageHero from '@/components/page-hero'
import ContactCTA from '@/components/contact-cta'
import BusinessHours from '@/components/business-hours'
import ContactForm from '@/components/contact-form'
import RefillForm from '@/components/refill-form'
import MapPlaceholder from '@/components/map-placeholder'
import { businessHours, pharmacyInfo } from '@/lib/data'

export const metadata = {
  title: 'Contact | Lewis Drug Mart',
  description:
    'Get in touch with Lewis Drug Mart. Find our location, hours, phone number, and contact form. Located in Bridgetown, Barbados.',
}

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out with questions, refill requests, or just to say hello."
      />

      {/* Quick Contact Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCTA />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Hours & Map */}
            <div className="space-y-8">
              {/* Business Hours */}
              <BusinessHours hours={businessHours} />

              {/* Additional Info */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Wheelchair accessible entrance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Accessible parking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Accessible restrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Friendly, patient service
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <ContactForm />

              {/* Prescription Refill Form */}
              <div id="refill">
                <RefillForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Find Us on the Map
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-96 md:h-[500px]">
            <MapPlaceholder address={pharmacyInfo.address} />
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prefer to Call?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Give us a call and speak directly with our friendly pharmacy team. We're happy to help
            with any questions or concerns.
          </p>
          <a
            href={`tel:${pharmacyInfo.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg text-lg"
          >
            Call Now: {pharmacyInfo.phone}
          </a>
        </div>
      </section>
    </>
  )
}
