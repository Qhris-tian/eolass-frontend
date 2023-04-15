import { format } from 'date-fns/fp'

export const useUtils = () => {
  function formatDate(date: string, pattern: string) {
    try {
      return format(pattern, new Date(date))
    } catch (error) {
      return date
    }
  }
  return { formatDate }
}
