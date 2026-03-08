import PageHero from '@/components/page-hero'
import TestimonialGrid from '@/components/testimonial-grid'
import SectionHeading from '@/components/section-heading'
import { testimonials, reviewHighlights, pharmacyInfo } from '@/lib/data'
import { Star, TrendingUp } from '@/components/icons'
import Link from '@/components/next-link'

export const metadata = {
  title: 'Reviews | Lewis Drug Mart',
  description:
    'Read genuine customer reviews for Lewis Drug Mart. Discover why our customers trust us with their pharmacy needs.',
}

export default function Reviews() {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        subtitle="Real stories from real customers who trust Lewis Drug Mart."
      />

      {/* Rating Overview */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Average Rating */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-gray-900">
                  {pharmacyInfo.rating}
                </span>
                <div className="text-3xl">⭐</div>
              </div>
              <p className="text-gray-600 mb-4">Average Rating</p>
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* Review Count */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <p className="text-5xl font-bold text-gray-900 mb-2">
                {pharmacyInfo.reviewCount}
              </p>
              <p className="text-gray-600">Customer Reviews</p>
            </div>

            {/* Recommendation */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="mb-4">
                <p className="text-5xl font-bold text-gray-900">98%</p>
              </div>
              <p className="text-gray-600">Would Recommend</p>
              <p className="text-sm text-gray-500 mt-2">Based on customer surveys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Common Themes"
            title="What Customers Love"
            subtitle="Highlights from our customer feedback"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviewHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200"
              >
                <div className="flex gap-3 items-start">
                  <div className="text-2xl">💬</div>
                  <p className="text-gray-800 leading-relaxed">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <TestimonialGrid testimonials={testimonials} />

      {/* Why Leave a Review */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Had a Great Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;d love to hear about your visit to Lewis Drug Mart. Your feedback helps us serve
            you better and guides other community members.
          </p>
          <a
            href={`https://www.google.com/maps/search/Lewis+Drug+Mart,+Bridgetown,+Barbados`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Leave a Review on Google
            <span>→</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Community of Satisfied Customers
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Visit Lewis Drug Mart today and experience the friendly service and expert care that
            our customers love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
