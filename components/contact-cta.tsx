import { Phone, Mail, MapPin, Clock } from '@/components/icons'
import { pharmacyInfo } from '@/lib/data'

interface ContactInfo {
  icon: React.ComponentType<{ className: string }>
  title: string
  content: string | JSX.Element
  href?: string
}

export default function ContactCTA() {
  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: 'Call Us',
      content: pharmacyInfo.phone,
      href: `tel:${pharmacyInfo.phone}`,
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: pharmacyInfo.email,
      href: `mailto:${pharmacyInfo.email}`,
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: pharmacyInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(pharmacyInfo.address)}`,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactInfo.map((info, index) => {
        const Icon = info.icon
        const Component = info.href ? 'a' : 'div'

        return (
          <Component
            key={index}
            href={info.href}
            target={info.href?.startsWith('http') ? '_blank' : undefined}
            rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all ${
              info.href ? 'cursor-pointer' : ''
            }`}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
            <p className={`text-sm ${info.href ? 'text-primary-600 hover:text-primary-700' : 'text-gray-600'}`}>
              {info.content}
            </p>
          </Component>
        )
      })}
    </div>
  )
}
