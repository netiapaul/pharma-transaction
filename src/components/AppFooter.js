import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        {new Date().getFullYear()}
        <span className="ms-1">
          &copy; <span>phAMACore</span>.
        </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://corebase.co.ke/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Corebase Solutions
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
