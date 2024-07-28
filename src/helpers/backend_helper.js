import { get } from './api_helpers'

// CUSTOMER TRANSACTIONS
export const GET_CUSTOMER_INVOICES = (userData) =>
  get(`/api/SalesInvoice/GetSalesInvoice`, {
    params: {
      bcode: Number(localStorage.getItem('bcode')),
      startDate: userData?.startDate,
      endDate: userData?.endDate,
      cusRef: userData?.cusRef,
      account: userData?.account,
      amount: Number(userData?.amount),
      scheme: userData?.scheme,
      salesCategory: Number(userData?.salesCategory),
      batched: userData?.batched,
      viewall: userData?.viewall,
    },
  })
