'use client'

import { CheckCircle } from '@/components/icons'
import { pharmacyInfo } from '@/lib/data'

export default function AnnouncementBar() {
  if (!pharmacyInfo.announcementText) return null

  return (
    <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-2 text-center text-sm md:text-base">
          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
          <p className="text-gray-800 font-medium">{pharmacyInfo.announcementText}</p>
        </div>
      </div>
    </div>
  )
}
