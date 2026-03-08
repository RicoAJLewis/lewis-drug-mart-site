"use client"

import React from 'react'
import { Pill, BookOpen, Package, Heart, Shield, Sparkles, Users, Accessibility } from '@/components/icons'

interface ServiceCardProps {
  name: string
  description: string
  icon: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill,
  BookOpen,
  Package,
  Heart,
  Shield,
  Sparkles,
  Users,
  Accessibility,
}

const IconComponent = ({ icon }: { icon: string }) => {
  const Icon = iconMap[icon]
  if (!Icon) return null
  return <Icon className="w-8 h-8 text-primary-600" />
}

export default function ServiceCard({ name, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
        <IconComponent icon={icon} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 w-0 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded group-hover:w-12 transition-all duration-300"></div>
    </div>
  )
}
