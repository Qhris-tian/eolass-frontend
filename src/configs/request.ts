import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: parseInt(import.meta.env.VITE_APP_AXIOS_TIMEOUT ?? '15000'),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
