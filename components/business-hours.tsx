'use client'

import { Clock } from '@/components/icons'
import { getCurrentDay, isOpen } from '@/lib/utils'

interface Hours {
  day: string
  open: string
  close: string
}

interface BusinessHoursProps {
  hours: Hours[]
  title?: string
}

export default function BusinessHours({ hours, title = 'Hours of Operation' }: BusinessHoursProps) {
  const currentDay = getCurrentDay()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <Clock className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-3">
        {hours.map(hour => {
          const isCurrentDay = hour.day === currentDay
          const dayOpen = isOpen(hours, hour.day)

          return (
            <div
              key={hour.day}
              className={`flex justify-between items-center p-3 rounded-lg ${
                isCurrentDay
                  ? 'bg-primary-50 border border-primary-200'
                  : 'bg-gray-50 border border-transparent'
              }`}
            >
              <span className={isCurrentDay ? 'font-bold text-gray-900' : 'text-gray-700'}>
                {hour.day}
              </span>
              <div className="flex items-center gap-3">
                {dayOpen ? (
                  <>
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className={isCurrentDay ? 'font-bold text-gray-900' : 'text-gray-600'}>
                      {hour.open} – {hour.close}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-600">{hour.open}</span>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
