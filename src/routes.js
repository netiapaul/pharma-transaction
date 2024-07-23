import React from 'react'

// Setups
const Branches = React.lazy(() => import('./views/setups/systems/branches'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ProfitPicture = React.lazy(() => import('./views/dashboard/profitPicture'))
const StockAnalysis = React.lazy(() => import('./views/dashboard/stockAnalysis'))
const BranchAnalysis = React.lazy(() => import('./views/dashboard/branchAnalysis'))

// CUSTOMER
const SalesInvoice = React.lazy(() => import('./views/Customer/salesInvoice/salesInvoice'))
const CreateSalesInvoice = React.lazy(
  () => import('./views/Customer/salesInvoice/createSalesInvoice'),
)

const analysis = [
  { path: '/dashboard', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/profit-picture', exact: true, name: 'ProfitPicture' },
  { path: '/profit-picture/profit-picture', name: 'ProfitPicture', element: ProfitPicture },
  { path: '/stock-analysis', exact: true, name: 'StockAnalysis' },
  { path: '/stock-analysis/stock-analysis', name: 'StockAnalysis', element: StockAnalysis },
  { path: '/branch-analysis', exact: true, name: 'BranchAnalysis' },
  { path: '/branch-analysis/branch-analysis', name: 'BranchAnalysis', element: BranchAnalysis },
]

const setups = [
  { path: '/branch-setup', exact: true, name: 'Branches' },
  { path: '/branch-setup/branch-setup', name: 'Branches', element: Branches },
]

const customers = [
  { path: '/sales-invoice', exact: true, name: 'Sales Invoice' },
  { path: '/sales-invoice/sales-invoice', name: 'Sales Invoice', element: SalesInvoice },
  {
    path: '/sales-invoice/create-salesinvoice',
    name: 'New Sales Invoice',
    element: CreateSalesInvoice,
  },
  { path: '/charts', name: 'Charts', element: Charts },
]

const routes = [...analysis, ...setups, ...customers]
// const routes = [
//   { path: '/dashboard', exact: true, name: 'Dashboard' },
//   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
//   { path: '/theme', name: 'Theme', element: Colors, exact: true },
//   { path: '/theme/colors', name: 'Colors', element: Colors },
//   { path: '/theme/typography', name: 'Typography', element: Typography },
//   { path: '/base', name: 'Base', element: Cards, exact: true },
//   { path: '/base/accordion', name: 'Accordion', element: Accordion },
//   { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
//   { path: '/base/cards', name: 'Cards', element: Cards },
//   { path: '/base/carousels', name: 'Carousel', element: Carousels },
//   { path: '/base/collapses', name: 'Collapse', element: Collapses },
//   { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
//   { path: '/base/navs', name: 'Navs', element: Navs },
//   { path: '/base/paginations', name: 'Paginations', element: Paginations },
//   { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
//   { path: '/base/popovers', name: 'Popovers', element: Popovers },
//   { path: '/base/progress', name: 'Progress', element: Progress },
//   { path: '/base/spinners', name: 'Spinners', element: Spinners },
//   { path: '/base/tabs', name: 'Tabs', element: Tabs },
//   { path: '/base/tables', name: 'Tables', element: Tables },
//   { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
//   { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
//   { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
//   { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
//   { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
//   { path: '/charts', name: 'Charts', element: Charts },
//   { path: '/forms', name: 'Forms', element: FormControl, exact: true },
//   { path: '/forms/form-control', name: 'Form Control', element: FormControl },
//   { path: '/forms/select', name: 'Select', element: Select },
//   { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
//   { path: '/forms/range', name: 'Range', element: Range },
//   { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
//   { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
//   { path: '/forms/layout', name: 'Layout', element: Layout },
//   { path: '/forms/validation', name: 'Validation', element: Validation },
//   { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
//   { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
//   { path: '/icons/flags', name: 'Flags', element: Flags },
//   { path: '/icons/brands', name: 'Brands', element: Brands },
//   { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
//   { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
//   { path: '/notifications/badges', name: 'Badges', element: Badges },
//   { path: '/notifications/modals', name: 'Modals', element: Modals },
//   { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
//   { path: '/widgets', name: 'Widgets', element: Widgets },
// ]

export default routes
