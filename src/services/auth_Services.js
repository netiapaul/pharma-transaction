import axios from 'axios'
import { handleErrors } from '../utils/functions'

/**
 * Login User
 * @param {Object} userData - login form data
 */
export async function HandleLogin(userData) {
  localStorage.removeItem('token')
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
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Unlocks User
 *
 */
export async function ForgotPassword(userData) {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_DYNAMIC_URL}/ForgotPassword`, {
      params: {
        userName: userData?.username,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    // window.location.reload(true)
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Unlocks User
 *
 */
export async function UnlockAccount(userData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DYNAMIC_URL}/UnlockAccount`,
      {
        userName: userData?.userName,
        password: userData?.password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response)
    // window.location.reload(true)
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Change User Password
 *
 */
export async function ChangePassword(userData) {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_DYNAMIC_URL}/ChangePassword`, {
      params: {
        currentPassword: userData?.currentPassword,
        newPassword: userData?.newPassword,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    localStorage.removeItem('token')
    // window.location.reload(true)
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Change User Password
 *
 */
export async function ClearSessions() {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DYNAMIC_URL}/ClearSessions`,
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
    localStorage.removeItem('token')
    // window.location.reload(true)
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Verifies OTP sent to user
 *
 */
export async function VerifyUnlockCode(userData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DYNAMIC_URL}/VerifyUnlockCode`,
      {
        userName: userData.userName,
        code: userData.otpcode,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response)
    // window.location.reload(true)
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
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
    return response.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
