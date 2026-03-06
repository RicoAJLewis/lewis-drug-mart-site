'use client'

import { useState, useEffect } from 'react'
import Link from '@/components/next-link'
import { Menu, X, Phone, Map } from '@/components/icons'
import { pharmacyInfo } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-2 group"
              aria-label="Lewis Drug Mart Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
                LD
              </div>
              <span className="hidden sm:inline whitespace-nowrap font-bold text-gray-900">Lewis Drug Mart</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              >
                Services
              </Link>
              <Link
                href="/reviews"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${pharmacyInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 bg-transparent hover:bg-primary-50 rounded-lg transition-colors"
                aria-label={`Call Lewis Drug Mart at ${pharmacyInfo.phone}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Now</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(pharmacyInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-md hover:shadow-lg"
                aria-label="Get directions to Lewis Drug Mart"
              >
                <Map className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-100"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/reviews"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                <a
                  href={`tel:${pharmacyInfo.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-primary-600 font-medium hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(pharmacyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors font-medium"
                >
                  <Map className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
