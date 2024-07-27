import axios from 'axios'
import { handleErrors, defErrorMessage } from '../utils/functions'

/**
 * Login User
 * @param {Object} userData - login form data
 */
export async function HandleLogin(userData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DYNAMIC_URL}`,
      {
        userName: userData.username,
        password: userData.password,
        machineCookie: userData.machineCookie || '',
        clientPin: localStorage.getItem('clientPin') || 0,
        latt: localStorage.getItem('latitude') || '',
        long: localStorage.getItem('longitude') || '',
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response)
    if (response?.data['user'].usergrouplist === 'customerQuo') {
      localStorage.setItem('customerQuoCode', response?.data['user'].username)
    } else if (response?.data['user'].usergrouplist === 'salesrepQuo') {
      localStorage.setItem('salesrepQuoCode', response?.data['user'].username)
    }
    localStorage.setItem('token', response?.data.token)
    localStorage.setItem('user', JSON.stringify(response?.data['user']))
    localStorage.setItem('BASE_URL', response?.data['user'].baseUrl)
    return response
  } catch (error) {
    console.log(error)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response?.data.errors) {
        console.log('step 1')
        throw new Error(
          Object.keys(error.response.data.errors).map(
            (key, value) => error.response.data.errors[key],
          ),
        )
      } else if (error.response?.data.message) {
        console.log('step 2')
        throw new Error(error.response.data.message)
      } else {
        console.log('step 3')
        throw new Error(error.message)
      }
    } else if (error.request?.statusText) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      throw new Error(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      //   throw new Error('Error', error.message)
      throw new Error(defErrorMessage)
    }
  }
}
/**
 * Logut User
 *
 */
export async function Logout() {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.post(
      `${BASE_URL}/Auth/Logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response)
    localStorage.clear()
    localStorage.setItem('coreui-free-react-admin-template-theme', 'light')
    // window.location.reload(true)
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
