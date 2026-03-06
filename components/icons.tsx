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
}
