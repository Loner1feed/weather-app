import axios from 'axios'

const defaultData = {
  host: 'https://api.openweathermap.org/',
  token: 'c95bd997f720de95dfc717a5eb46fa33'
}

export const instance = axios.create({
  baseURL: `${defaultData.host}`
})