import ReviewCard from './review-card'
import SectionHeading from './section-heading'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  rating: number
}

interface TestimonialGridProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  limit?: number
}

export default function TestimonialGrid({
  testimonials,
  title = 'What Our Customers Say',
  subtitle = 'Real reviews from real customers who trust Lewis Drug Mart.',
  limit,
}: TestimonialGridProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading tag="Trusted Reviews" title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayTestimonials.map(testimonial => (
            <ReviewCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
