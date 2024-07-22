import axios from 'axios'

//apply base url for axios
const API_URL = ''

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.defaults.baseURL = 'https://api.example.com'
axiosApi.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
axiosApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Add a request interceptor
axiosApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)
// Add a response interceptor
axiosApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

// export async function get(url, config = {}) {
//   try {
//     const response = await axiosApi.get(url, { ...config })
//     return response
//   } catch (error) {
//     throw new Error(error)
//   }
// }

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => response)
}
export async function get(url, config = {}) {
  return axiosApi.post(url, { ...config }).then((response) => response)
}

// export async function post(url, data, config = {}) {
//   return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data)
// }

// export async function put(url, data, config = {}) {
//   return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data)
// }

// export async function del(url, config = {}) {
//   return await axiosApi.delete(url, { ...config }).then((response) => response.data)
// }
