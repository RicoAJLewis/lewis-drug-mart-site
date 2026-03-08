import Link from '@/components/next-link'
import { ArrowRight } from '@/components/icons'
import TestimonialGrid from './testimonial-grid'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  rating: number
}

interface ReviewsPreviewProps {
  testimonials: Testimonial[]
}

export default function ReviewsPreview({ testimonials }: ReviewsPreviewProps) {
  return (
    <>
      <TestimonialGrid testimonials={testimonials} limit={3} />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            See Why Customers Trust Us
          </h3>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
          >
            View All Reviews
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
