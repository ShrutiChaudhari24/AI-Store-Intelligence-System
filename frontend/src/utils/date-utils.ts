/**
 * Date Utilities
 */

import { format, differenceInHours, differenceInMinutes, differenceInDays } from 'date-fns'

export const formatDate = (date: Date, formatStr = 'yyyy-MM-dd'): string => {
  return format(new Date(date), formatStr)
}

export const formatDateTime = (date: Date, formatStr = 'yyyy-MM-dd HH:mm:ss'): string => {
  return format(new Date(date), formatStr)
}

export const formatTime = (date: Date, formatStr = 'HH:mm:ss'): string => {
  return format(new Date(date), formatStr)
}

export const getRelativeTime = (date: Date): string => {
  const now = new Date()
  const minutes = differenceInMinutes(now, new Date(date))
  const hours = differenceInHours(now, new Date(date))
  const days = differenceInDays(now, new Date(date))

  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes} minutes ago`
  if (hours < 24) return `${hours} hours ago`
  if (days < 7) return `${days} days ago`
  return formatDate(new Date(date))
}

export const isSameDay = (date1: Date, date2: Date): boolean => {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export const getDayOfWeek = (date: Date): string => {
  return format(new Date(date), 'EEEE')
}

export const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}
