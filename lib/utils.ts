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

function pad(n: number) {
  return n < 10 ? `0${n}` : String(n)
}

export function isOpenDay(hours: { day: string; open: string; close: string }[], day: string): boolean {
  const dayHours = hours.find(h => h.day === day)
  return dayHours ? dayHours.open !== 'Closed' : false
}

function parseTimeToDate(time: string, refDate: Date): Date {
  // time expected in format like '9:00 AM' or '5:30 PM'
  const d = new Date(refDate)
  const m = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  if (!m) return d
  let hour = parseInt(m[1], 10)
  const minute = parseInt(m[2], 10)
  const ampm = m[3].toUpperCase()
  if (ampm === 'PM' && hour !== 12) hour += 12
  if (ampm === 'AM' && hour === 12) hour = 0
  d.setHours(hour, minute, 0, 0)
  return d
}

export function isOpenNow(
  hours: { day: string; open: string; close: string }[],
  closedDates: string[] = [],
  now: Date = new Date()
): boolean {
  // Build local ISO date (YYYY-MM-DD)
  const localISO = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
  if (closedDates.includes(localISO)) return false

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = days[now.getDay()]
  const todayHours = hours.find(h => h.day === today)
  if (!todayHours || todayHours.open === 'Closed') return false

  const openDate = parseTimeToDate(todayHours.open, now)
  const closeDate = parseTimeToDate(todayHours.close, now)

  return now >= openDate && now <= closeDate
}
