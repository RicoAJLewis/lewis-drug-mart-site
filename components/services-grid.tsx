import ServiceCard from './service-card'
import SectionHeading from './section-heading'

interface Service {
  id: number
  name: string
  description: string
  icon: string
}

interface ServicesGridProps {
  services: Service[]
  title?: string
  subtitle?: string
  limit?: number
}

export default function ServicesGrid({
  services,
  title = 'Our Services',
  subtitle = 'Comprehensive pharmacy services designed for your health and wellness.',
  limit,
}: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading tag="What We Offer" title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {displayServices.map(service => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
