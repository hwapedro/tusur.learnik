import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_URL } from './constant'

export interface reqDone<T> {
  succses: string
  data: T
}

class API {
  private readonly baseUrl: string

  private axios: AxiosInstance = Axios.create({
    withCredentials: true,
  })

  readonly request = this.axios

  constructor(baseURL: string) {
    this.baseUrl = baseURL
    this.init()
  }

  private init = (): void => {
    this.axios.defaults.baseURL = this.baseUrl
    this.axios.interceptors.request.use(this.requestSetHeaders, () => ({ error: 'Request is rejected' }))
  }

  private requestSetHeaders = (request: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('token')
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }

    return request
  }
}

export default new API(API_URL)


