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

export function parseTimeToDate(time: string, refDate: Date): Date {
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

export function getTimeUntil(
  hours: { day: string; open: string; close: string }[],
  now: Date = new Date()
): {
  openNow: boolean
  until: { hours: number; minutes: number } | null
  nextOpen?: { day: string; date: Date } | null
} {
  const localPad = (n: number) => (n < 10 ? `0${n}` : `${n}`)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = days[now.getDay()]
  const todayHours = hours.find(h => h.day === today)

  if (!todayHours || todayHours.open === 'Closed') {
    // find next opening day
    for (let i = 1; i <= 7; i++) {
      const d = new Date(now)
      d.setDate(now.getDate() + i)
      const dayName = days[d.getDay()]
      const dayHours = hours.find(h => h.day === dayName)
      if (dayHours && dayHours.open !== 'Closed') {
        const openDate = parseTimeToDate(dayHours.open, d)
        return { openNow: false, until: null, nextOpen: { day: dayName, date: openDate } }
      }
    }
    return { openNow: false, until: null, nextOpen: null }
  }

  const openDate = parseTimeToDate(todayHours.open, now)
  const closeDate = parseTimeToDate(todayHours.close, now)

  if (now < openDate) {
    // Not yet open today
    const diff = openDate.getTime() - now.getTime()
    const mins = Math.floor(diff / 60000)
    return { openNow: false, until: { hours: Math.floor(mins / 60), minutes: mins % 60 }, nextOpen: { day: today, date: openDate } }
  }

  if (now >= openDate && now <= closeDate) {
    const diff = closeDate.getTime() - now.getTime()
    const mins = Math.max(0, Math.floor(diff / 60000))
    return { openNow: true, until: { hours: Math.floor(mins / 60), minutes: mins % 60 }, nextOpen: null }
  }

  // Closed for the rest of today, find next open
  for (let i = 1; i <= 7; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    const dayName = days[d.getDay()]
    const dayHours = hours.find(h => h.day === dayName)
    if (dayHours && dayHours.open !== 'Closed') {
      const openDateNext = parseTimeToDate(dayHours.open, d)
      return { openNow: false, until: null, nextOpen: { day: dayName, date: openDateNext } }
    }
  }

  return { openNow: false, until: null, nextOpen: null }
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
