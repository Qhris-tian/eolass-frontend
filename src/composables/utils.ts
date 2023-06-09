import type { Status } from '@/interfaces'
import { format } from 'date-fns/fp'

export const useUtils = () => {
  function formatDate(date: string, pattern: string) {
    try {
      return format(pattern, new Date(date))
    } catch (error) {
      return date
    }
  }

  function placeholder(data: any) {
    return data ? data : 'N/A'
  }

  function status(key: string) {
    const classes: Status = {
      accept: 'text-green-400 border-green-400',
      rejected: 'text-red-800 border-red-300',
      pending: 'text-blue-400 border-blue-400',
      success: 'text-green-800 border-green-300 bg-green-50',
      danger: 'text-red-800 border-red-300 bg-red-50',
      info: 'text-blue-800 border-blue-300 bg-blue-50',
      warning: 'text-yellow-800 border-yellow-300 bg-yellow-50'
    }

    if (key in classes) {
      return classes[key]
    }

    return null
  }

  function isEmpty(data: any | Array<any>) {
    if (typeof data === 'undefined' || data === null) {
      return true
    }

    if (typeof data === 'object') {
      return data.length === 0
    }

    if (typeof data === 'string') {
      return data.trim() === ''
    }
  }

  function toAmount(value: number) {
    return value.toFixed(2)
  }

  function toTitleCase(sentence: string) {
    const copy = sentence.toLowerCase()
    return copy.charAt(0).toUpperCase() + copy.slice(1)
  }

  return { formatDate, placeholder, status, isEmpty, toAmount, toTitleCase }
}
