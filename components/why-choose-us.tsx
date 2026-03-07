'use client'

import SectionHeading from './section-heading'
import React from 'react'
import { Users, BookOpen, Smile, MapPin, Package, Accessibility } from '@/components/icons'

interface WhyChooseUsItem {
  id: number
  title: string
  description: string
  icon: string
}

interface WhyChooseUsProps {
  items: WhyChooseUsItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  BookOpen,
  Smile,
  MapPin,
  Package,
  Accessibility,
}

const IconComponent = ({ icon }: { icon: string }) => {
  const Icon = iconMap[icon]
  if (!Icon) return null
  return <Icon className="w-6 h-6" />
}

export default function WhyChooseUs({ items }: WhyChooseUsProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Community Trust"
          title="Why Choose Lewis Drug Mart?"
          subtitle="We&apos;re more than a pharmacy – we&apos;re your trusted health partner in the community."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {items.map(item => (
            <div
              key={item.id}
              className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                  <IconComponent icon={item.icon} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
