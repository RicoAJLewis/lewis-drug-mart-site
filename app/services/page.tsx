import PageHero from '@/components/page-hero'
import ServicesGrid from '@/components/services-grid'
import SectionHeading from '@/components/section-heading'
import FAQSection from '@/components/faq-section'
import { services, faqs } from '@/lib/data'
import { ArrowRight } from '@/components/icons'
import Link from '@/components/next-link'

export const metadata = {
  title: 'Services | Lewis Drug Mart',
  description:
    'Explore our comprehensive pharmacy services including prescription dispensing, medication guidance, and wellness products.',
}

const serviceDetails = [
  {
    id: 1,
    title: 'Prescription Dispensing',
    description:
      'Our pharmacists carefully review, prepare, and dispense prescriptions with accuracy and care. We ensure you receive the right medication at the right time.',
    benefits: [
      'Fast and accurate service',
      'Clear labeling and instructions',
      'Regular customer records',
      'Refill reminders available',
    ],
  },
  {
    id: 2,
    title: 'Medication Guidance',
    description:
      'Our expert pharmacist is available to answer your questions about medications, dosages, side effects, and interactions.',
    benefits: [
      'One-on-one consultations',
      'Clear explanations',
      'Personalized recommendations',
      'Drug interaction checks',
    ],
  },
  {
    id: 3,
    title: 'Over-the-Counter Medications',
    description:
      'We stock a wide selection of medications for common ailments including cold, flu, pain relief, allergy, and digestive issues.',
    benefits: [
      'Quality brands',
      'Competitive pricing',
      'Expert recommendations',
      'Quick checkout',
    ],
  },
  {
    id: 4,
    title: 'Vitamins & Wellness',
    description:
      'Discover our range of vitamins, supplements, and wellness products designed to support your health goals.',
    benefits: [
      'Premium quality products',
      'Expert consultation',
      'Personalized recommendations',
      'Wellness support',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive pharmacy care tailored to your health and wellness needs."
      />

      <ServicesGrid services={services} />

      {/* Detailed Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="In-Depth"
            title="Service Details"
            subtitle="Learn more about each of our key services."
          />

          <div className="space-y-12 mt-12">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2 lg:auto-flow-dense' : ''
                }`}
              >
                {/* Text Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold flex-shrink-0 text-sm">
                          ✓
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div
                    className={`aspect-square bg-gradient-to-br rounded-xl shadow-lg flex items-center justify-center ${
                      service.id % 2 === 0
                        ? 'from-primary-50 to-primary-100'
                        : 'from-primary-50 to-accent-100'
                    }`} 
                  >
                    <span className="text-6xl">💊</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tag="Expert Care"
                title="Why Choose Our Services?"
                subtitle="Quality, expertise, and genuine care in every interaction."
                center={false}
              />
              <ul className="space-y-4 mt-8">
                {[
                  'Expert pharmacist with years of experience',
                  'Personalized consultations and recommendations',
                  'High-quality medications and products',
                  'Competitive and fair pricing',
                  'Friendly, welcoming service',
                  'Fully accessible pharmacy',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className="group block h-full"
            >
              <div className="h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg p-8 text-white flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-6xl mb-6">🏥</div>
                <h3 className="text-2xl font-bold mb-4">Ready to Experience Quality Care?</h3>
                <p className="text-primary-100 mb-6">
                  Visit us today or get in touch to learn more about our services.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  )
}
