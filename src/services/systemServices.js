import axios from 'axios'
import { handleErrors } from '../utils/functions'
const defErrorMessage = 'An error occured processing your current request!'

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
    // localStorage.setItem('usergrouplist', response?.data['user'].usergrouplist)
    // localStorage.setItem('serverName', response?.data['user'].serverName)
    // localStorage.setItem('userName', response?.data['user'].username)
    // localStorage.setItem('companyName', response?.data['user'].companyName)
    // localStorage.setItem('clientCode', response?.data['user'].clientCode)
    // localStorage.setItem('companyDetailId', response?.data['user'].companyDetailId)
    // localStorage.setItem('fullusername', response?.data['user'].fullusername)
    // localStorage.setItem('cellnumber', response?.data['user'].cellnumber)
    // localStorage.setItem(
    //   'branches',
    //   JSON.stringify(response?.data['user'].userBranches || userData.customBranch),
    // )
    // localStorage.setItem('cusId', response?.data['user'].cusId)
    // localStorage.setItem('userrights', JSON.stringify(response?.data['user'].userrights))
    // localStorage.setItem('userProfiles', JSON.stringify(response?.data['user'].userPROFILEGROUPS))
    // localStorage.setItem('viewDashboard', JSON.stringify(response?.data['user'].viewDashboard))
    // username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/
    // document.cookie = `username=${response?.data['user'].username}; expires=Sat, 31 Dec 2050 12:00:00 UTC;`
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
/**
 * Returns the System default settings
 * @returns {Oject} System defaults
 */
export async function SysDefaults() {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/SysDefaults`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    localStorage.setItem('SysDefaults', JSON.stringify(response?.data))
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Returns assigned module/packages
 * @param {number} bcode selected transacting branch bcode
 * @returns {Array} assigned module/packages
 */
export async function GetClientModules(bcode) {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/Branches/GetClientModules`, {
      params: {
        bcode: bcode,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    localStorage.setItem('cloudModules', JSON.stringify(response.data))
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Returns assigned module/packages
 * @param {number} bcode selected transacting branch bcode
 * @returns {Array} assigned module/packages
 */
export async function GetAvailableTills(bcode) {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/api/Tills/GetAvailableTills`, {
      params: {
        bcode: bcode,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Returns expiry object details
 * @param {number} bcode selected transacting branch bcode
 * @returns {Object} expiry object details
 */
export async function GetExpiryDate(bcode) {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/Branches/GetExpiryDate`, {
      params: {
        bcode: bcode,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    localStorage.setItem('isExpiringNear', JSON.stringify(response.data.days <= 15))
    localStorage.setItem('days', response.data.days)
    localStorage.setItem('expDate', response.data.expDate)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Returns true if branch is Validated
 * @returns {string} true
 */
export async function ValidateBranch(userData) {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/Branches/ValidateBranch`, {
      params: {
        bcode: userData?.bcode,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    localStorage.setItem('bcode', userData?.bcode)
    GetClientModules(userData?.bcode)
    GetAvailableTills(userData?.bcode)
    // GetExpiryDate(userData?.bcode)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}

/**
 * Returns All dashboard analysis of the company
 * @returns {Object} All dashboard analysis
 */
export async function GetSalesAnalysis(userData) {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/api/Dashboard/SalesAnalysisV2`, {
      params: {
        startDate: userData?.startDate,
        endDate: userData?.endDate,
        bcodes: userData?.bcodes,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
/**
 * Returns All Branches of the company
 * @returns {Object} All Branches
 */
export async function Branches() {
  let BASE_URL = localStorage.getItem('BASE_URL')
  try {
    const response = await axios.get(`${BASE_URL}/Branches`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return response?.data
  } catch (error) {
    console.log(error)
    return handleErrors(error)
  }
}
