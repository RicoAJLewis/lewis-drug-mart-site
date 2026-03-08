'use client'

import React from 'react'

type IconProps = { className?: string }

export const Menu = (props: IconProps) => <span aria-hidden className={props.className}>☰</span>
export const X = (props: IconProps) => <span aria-hidden className={props.className}>✕</span>
export const Phone = (props: IconProps) => <span aria-hidden className={props.className}>📞</span>
export const Map = (props: IconProps) => <span aria-hidden className={props.className}>🗺️</span>
export const Clock = (props: IconProps) => <span aria-hidden className={props.className}>⏰</span>
export const MapPin = (props: IconProps) => <span aria-hidden className={props.className}>📍</span>
export const Accessibility = (props: IconProps) => <span aria-hidden className={props.className}>♿</span>
export const ArrowRight = (props: IconProps) => <span aria-hidden className={props.className}>→</span>
export const Plus = (props: IconProps) => <span aria-hidden className={props.className}>＋</span>
export const Minus = (props: IconProps) => <span aria-hidden className={props.className}>−</span>
export const Check = (props: IconProps) => <span aria-hidden className={props.className}>✔️</span>
export const Mail = (props: IconProps) => <span aria-hidden className={props.className}>✉️</span>
export const Award = (props: IconProps) => <span aria-hidden className={props.className}>🏅</span>
export const Heart = (props: IconProps) => <span aria-hidden className={props.className}>❤️</span>
export const Users = (props: IconProps) => <span aria-hidden className={props.className}>👥</span>
export const CheckCircle = (props: IconProps) => <span aria-hidden className={props.className}>✅</span>
export const Star = (props: IconProps) => <span aria-hidden className={props.className}>★</span>
export const TrendingUp = (props: IconProps) => <span aria-hidden className={props.className}>📈</span>

// Service icons
export const Pill = (props: IconProps) => <span aria-hidden className={props.className}>💊</span>
export const BookOpen = (props: IconProps) => <span aria-hidden className={props.className}>📖</span>
export const Package = (props: IconProps) => <span aria-hidden className={props.className}>📦</span>
export const Shield = (props: IconProps) => <span aria-hidden className={props.className}>🛡️</span>
export const Sparkles = (props: IconProps) => <span aria-hidden className={props.className}>✨</span>
export const Smile = (props: IconProps) => <span aria-hidden className={props.className}>😊</span>

// Brand mark (refined home/brand icon) — simple SVG monogram used across header/footer
export const BrandMark = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} aria-hidden>
    <rect width="48" height="48" rx="10" fill="url(#g)" />
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stopColor="#3b82f6" />
        <stop offset="1" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <g fill="#fff" transform="translate(8,10)">
      <path d="M8 0C5.8 0 4 1.8 4 4v16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4H8zm1.2 3.2h6.4c.1 0 .2.1.2.2v11.2c0 .9-.7 1.6-1.6 1.6H9.6c-.9 0-1.6-.7-1.6-1.6V3.4c0-.1.1-.2.2-.2z" />
      <text x="4" y="20" fontSize="10" fontWeight="700" fill="#fff">LD</text>
    </g>
  </svg>
)

export const Instagram = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} aria-hidden>
    <rect width="24" height="24" rx="5" fill="#2563eb" />
    <path d="M7 7h10v10H7z" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.2" stroke="#fff" strokeWidth="1.2" />
    <circle cx="17.2" cy="6.8" r="0.5" fill="#fff" />
  </svg>
)

export default {
  Menu,
  X,
  Phone,
  Map,
  Clock,
  MapPin,
  Accessibility,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Mail,
  Award,
  Heart,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  Pill,
  BookOpen,
  Package,
  Shield,
  Sparkles,
  Smile,
  BrandMark,
  Instagram,
}
