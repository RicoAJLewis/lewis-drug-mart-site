'use client'

import { Clock, MapPin, Phone, Accessibility } from '@/components/icons'
import { pharmacyInfo, businessHours } from '@/lib/data'
import { getCurrentDay, isOpen } from '@/lib/utils'

export default function QuickInfoCards() {
  const currentDay = getCurrentDay()
  const open = isOpen(businessHours, currentDay)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hours Card */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Hours Today</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-block w-2 h-2 rounded-full ${open ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  <p className="font-bold text-gray-900">{open ? 'Open' : 'Closed'}</p>
                </div>
                <p className="text-sm text-gray-600">
                  {open ? `Closes ${pharmacyInfo.closeTime}` : 'Opens tomorrow'}
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Location</p>
                <p className="font-bold text-gray-900 text-sm mb-2">Bridgetown</p>
                <p className="text-xs text-gray-600 line-clamp-2">
                  Highway 7, Christ Church
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Call Us</p>
                <a
                  href={`tel:${pharmacyInfo.phone}`}
                  className="font-bold text-accent-700 hover:text-accent-800 transition-colors text-sm"
                >
                  {pharmacyInfo.phone}
                </a>
                <p className="text-xs text-gray-600 mt-1">Always available to help</p>
              </div>
            </div>
          </div>

          {/* Accessibility Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Accessibility className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Accessibility</p>
                <p className="font-bold text-gray-900 text-sm mb-2">Fully Accessible</p>
                <p className="text-xs text-gray-600">Wheelchair friendly, accessible restrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
