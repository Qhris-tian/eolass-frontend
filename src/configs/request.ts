import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: parseInt(process.env.VUE_APP_AXIOS_TIMEOUT ?? '15000'),
//   headers: { 'Authorization': 'foobar' }
})
