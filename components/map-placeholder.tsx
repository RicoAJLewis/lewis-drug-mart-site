import { MapPin } from '@/components/icons'

interface MapPlaceholderProps {
  address?: string
  lat?: number
  lng?: number
}

export default function MapPlaceholder({ address, lat = 13.1939, lng = -59.5432 }: MapPlaceholderProps) {
  const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`

  return (
    <div className="relative rounded-xl overflow-hidden h-96 md:h-full min-h-[400px] bg-gray-200 group">
      {/* Placeholder Map */}
      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
        {/* Grid Pattern Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Center Marker */}
        <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="relative">
            <div className="w-4 h-4 bg-primary-600 rounded-full shadow-lg ring-2 ring-primary-300"></div>
            <div className="absolute -inset-2 bg-primary-600 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Info Card Overlay */}
        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-sm group-hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Lewis Drug Mart</p>
              {address && <p className="text-xs text-gray-600 mt-1">{address}</p>}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
