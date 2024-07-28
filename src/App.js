import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/auth/login/Login'))
const ForgetPassword = React.lazy(() => import('./views/auth/forgetPassword/forget_password'))
const LockScreen = React.lazy(() => import('./views/auth/lockScreen/lock_screen'))
const VerifyOTP = React.lazy(() => import('./views/auth/lockScreen/verify_otp'))
const PasswordChange = React.lazy(() => import('./views/auth/passwordChange/password_change'))
const ClearSession = React.lazy(() => import('./views/auth/lockScreen/clear_session'))
//
const TransactingBranch = React.lazy(() => import('./views/auth/transactingBranch'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" name="Login Page" element={<Login />} />
          <Route
            exact
            path="/auth-recoverpw"
            name="Recover Password"
            element={<ForgetPassword />}
          />
          <Route exact path="/auth-lock-screen" name="Lock Screen" element={<LockScreen />} />
          <Route
            exact
            path="/auth-two-step-verification"
            name="Verify OTP"
            element={<VerifyOTP />}
          />
          <Route
            exact
            path="/auth-pwd-change"
            name="Password Change"
            element={<PasswordChange />}
          />
          <Route exact path="/auth-clear-session" name="Clear Session" element={<ClearSession />} />
          {/*  */}
          <Route
            exact
            path="/auth/branch"
            name="Transacting Branch"
            element={<TransactingBranch />}
          />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="*" name="Page 404" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
