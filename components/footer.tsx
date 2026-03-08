import Link from '@/components/next-link'
import { Phone, Mail, MapPin, BrandMark, Instagram } from '@/components/icons'
import { pharmacyInfo } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <BrandMark className="w-10 h-10" />
              </div>
              <span className="font-bold text-gray-900">{pharmacyInfo.name}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted community pharmacy in Barbados, providing friendly service and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Prescription Dispensing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Medication Guidance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Vitamins & Wellness
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Prescription Refill
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a
                  href={`tel:${pharmacyInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {pharmacyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href={`mailto:${pharmacyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {pharmacyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>{pharmacyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; {currentYear} {pharmacyInfo.name}. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 items-center">
              <a href={pharmacyInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:opacity-90">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
