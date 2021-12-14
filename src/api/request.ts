import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { jsonp } from 'vue-jsonp'

const service = axios.create({
  timeout: 30000
})

/**
 * 添加请求拦截器
 * 记录日志
 */
service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

/**
 * 添加响应拦截器
 * 记录日志
 */
service.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

/**
 * 通过axios发送xhr请求
 * @param config AxiosRequestConfig
 * @returns Promise<AxiosResponse<any>>
 */
export async function request(config: AxiosRequestConfig): Promise<any> {
  return service(config)
}
