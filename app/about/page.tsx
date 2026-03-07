import PageHero from '@/components/page-hero'
import SectionHeading from '@/components/section-heading'
import { ArrowRight, CheckCircle } from '@/components/icons'
import Link from '@/components/next-link'

export const metadata = {
  title: 'About Us | Lewis Drug Mart',
  description:
    'Learn about Lewis Drug Mart, your trusted local pharmacy in Barbados. Committed to friendly service and expert care.',
}

export default function About() {
  const values = [
    {
      title: 'Community First',
      description:
        'We are rooted in our community and dedicated to serving our neighbors with integrity and care.',
    },
    {
      title: 'Expert Guidance',
      description:
        'Our skilled pharmacist provides personalized support and expert advice on medications and health.',
    },
    {
      title: 'Accessibility',
      description:
        'We ensure our pharmacy is welcoming and accessible to all members of the community.',
    },
    {
      title: 'Trust & Reliability',
      description:
        'Your health is our priority. We maintain the highest standards of accuracy and professionalism.',
    },
  ]

  return (
    <>
      <PageHero
        title="About Lewis Drug Mart"
        subtitle="Your trusted partner in health and wellness for the Barbados community."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pharmacy with Heart
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Lewis Drug Mart has been serving the Barbados community with dedication and care.
                We&apos;re more than just a pharmacy – we&apos;re a trusted local institution committed to
                your health and wellness.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team, led by a knowledgeable and compassionate pharmacist, takes time to
                understand each customer&apos;s needs. We believe in personalized service, genuine
                interactions, and expert guidance that makes a real difference.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every day, we&apos;re committed to making healthcare accessible, friendly, and
                convenient for everyone in our community. Your health is our priority.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-teal-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    LD
                  </div>
                  <p className="text-gray-700 font-semibold">Lewis Drug Mart</p>
                  <p className="text-sm text-gray-600">Community Pharmacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Values"
            title="What We Stand For"
            subtitle="Core principles that guide everything we do at Lewis Drug Mart."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Team"
            title="Meet the Team"
            subtitle="Dedicated professionals committed to your health and well-being."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member {i}</h3>
                <p className="text-gray-600 mb-3">
                  {i === 1 ? 'Pharmacist & Owner' : 'Pharmacy Technician'}
                </p>
                <p className="text-gray-600 text-sm">
                  Dedicated to providing expert care and friendly service to our community.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Lewis Drug Mart Difference
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Visit us today and discover what makes us your trusted community pharmacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
