import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useSysDefaults } from '../hooks/serviceHooks'
import { Navigate } from 'react-router-dom'

const DefaultLayout = () => {
  if (!localStorage.getItem('token') && !Boolean(Number(localStorage.getItem('bcode'))))
    return <Navigate to="/" replace={true} />

  const { isLoadingDefaults, error } = useSysDefaults()

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
