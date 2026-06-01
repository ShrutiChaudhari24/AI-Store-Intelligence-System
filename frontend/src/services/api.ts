/**
 * API Service Client
 * TODO: Implement Axios API client with interceptors
 */

import axios, { AxiosInstance, AxiosError } from 'axios'

class ApiClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
      timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
    })

    // TODO: Add request interceptor for auth token
    this.instance.interceptors.request.use((config) => {
      // TODO: Add authorization header
      return config
    })

    // TODO: Add response interceptor for error handling
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // TODO: Handle errors
        if (error.response?.status === 401) {
          // TODO: Refresh token or redirect to login
        }
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string) {
    return this.instance.get<T>(url)
  }

  post<T>(url: string, data?: unknown) {
    return this.instance.post<T>(url, data)
  }

  put<T>(url: string, data?: unknown) {
    return this.instance.put<T>(url, data)
  }

  delete<T>(url: string) {
    return this.instance.delete<T>(url)
  }
}

export const apiClient = new ApiClient()
