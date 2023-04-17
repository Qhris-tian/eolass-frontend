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

  return { formatDate, placeholder }
}
