import { Accessibility, Award, Heart, Users } from '@/components/icons'
import SectionHeading from './section-heading'

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Commitment"
          title="Your Health, Our Priority"
          subtitle="Built on trust, accessibility, and community care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Fully Accessible */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-200">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Accessible</h3>
            <p className="text-gray-600">
              Wheelchair access, accessible restrooms, and welcoming service for all community members.
            </p>
          </div>

          {/* Community Trusted */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Trusted</h3>
            <p className="text-gray-600">
              4.6-star rating with 77+ reviews. A local pharmacy you can depend on.
            </p>
          </div>

          {/* Expert Care */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
            <p className="text-gray-600">
              Knowledgeable pharmacist providing personalized guidance and medication support.
            </p>
          </div>

          {/* Community Heart */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-200">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Heart</h3>
            <p className="text-gray-600">
              Genuine care for your health and wellness. We&apos;re here for the long term.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
