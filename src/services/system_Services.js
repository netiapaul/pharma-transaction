import axios from 'axios'
import { handleErrors, defErrorMessage } from '../utils/functions'

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
    return response.data
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
    return response.data
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
