import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <i className="nav-icon mdi mdi-tablet-dashboard"></i>,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  {
    component: CNavGroup,
    name: 'phAMACore Analysis',
    icon: <i className="nav-icon mdi mdi-google-analytics"></i>,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Profit Picture',
        to: '/profit-picture/profit-picture',
      },
      {
        component: CNavItem,
        name: 'Stock Analysis',
        to: '/stock-analysis/stock-analysis',
      },
      {
        component: CNavItem,
        name: 'Branch Analysis',
        to: '/branch-analysis/branch-analysis',
      },
      {
        component: CNavItem,
        name: 'Cashier Analysis',
        to: '/dashboard3',
      },
      {
        component: CNavItem,
        name: 'Daily Reconciliation',
        to: '/dashboard4',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customer Module',
    icon: <i className="nav-icon mdi mdi-account-switch-outline"></i>,
    items: [
      {
        component: CNavItem,
        name: 'Sales Invoice',
        to: '/sales-invoice/sales-invoice',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
