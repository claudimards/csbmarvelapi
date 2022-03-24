import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MARVEL_API_BASE_URL,
  params: {
    apikey: process.env.NEXT_PUBLIC_MAVEL_API_KEY
  }
})