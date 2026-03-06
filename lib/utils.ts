import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+1)(\d{3})(\d{3})(\d{4})/, '$1-$2-$3-$4')
}

export function getCurrentDay(): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const now = new Date()
  return days[now.getDay()]
}

export function isOpen(hours: { day: string; open: string; close: string }[], day: string): boolean {
  const dayHours = hours.find(h => h.day === day)
  return dayHours ? dayHours.open !== 'Closed' : false
}
