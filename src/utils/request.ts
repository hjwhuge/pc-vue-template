import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent
    // console.log('config', config)
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log('response', response)
    const res = response.data
    const { code, msg } = res
    return response
    // if (code !== 200) {
    //   // token过期
    //   if (code === 1000) {
    //     console.error(msg || '请重新登录')
    //     return
    //   }
    //   console.error(msg || 'Error')
    //   return Promise.reject(new Error(msg || 'Error'))
    // } else {
    //   // console.log('response111', res)
    //   return response
    // }
  },
  (error) => {
    // console.log(error) // for debug
    return Promise.reject(error)
  },
)

export default service
