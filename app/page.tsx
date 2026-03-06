import HeroSection from '@/components/hero-section'
import QuickInfoCards from '@/components/quick-info-cards'
import ServicesGrid from '@/components/services-grid'
import ReviewsPreview from '@/components/reviews-preview'
import WhyChooseUs from '@/components/why-choose-us'
import TrustSection from '@/components/trust-section'
import FAQSection from '@/components/faq-section'
import { services, testimonials, whyChooseUs, faqs } from '@/lib/data'

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickInfoCards />
      <ServicesGrid services={services} limit={4} />
      <ReviewsPreview testimonials={testimonials} />
      <WhyChooseUs items={whyChooseUs} />
      <TrustSection />
      <FAQSection faqs={faqs} limit={4} />
    </>
  )
}
