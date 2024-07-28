import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import ProductImage from '../../../assets/images/LoginPageLogo.png'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { AlertErrorArrayResponse, AlertSuccessResponse } from '../../../UI/alerts/alertResponse'
import { HandleLogin } from '../../../services/auth_Services'

const Login = () => {
  //meta title
  document.title = 'Login | phAMACore Cloud'
  const navigate = useNavigate()
  let location = useLocation()

  const [ErrorArray, setErrorArray] = useState([])

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const userData = {
      machineCookie: '',
      clientPin: 0,
      latt: '',
      long: '',
      username: data?.credName,
      password: data?.credPass,
    }
    HandleSubmit(userData)
  }

  const {
    isPending,
    isError,
    mutate: HandleSubmit,
  } = useMutation({
    mutationKey: ['login_auth'],
    mutationFn: (data) => HandleLogin(data),
    onSuccess: () => {
      setErrorArray([])
      toast.success('Authorization successfull')
      navigate('/auth/branch', { replace: true })
    },
    onError: (error) => {
      console.log(error)
      toast.error('An error occured processing your current request!', {
        duration: 5000,
      })
      setErrorArray([...error.message?.split(',')])
      if (error?.message?.includes('Account is locked due to failed login attempts')) {
        return navigate('/auth-lock-screen', {
          state: { error: error?.message, userName: getValues('credName') },
        })
      }
      if (error?.message?.includes('You need to update your password before proceeding')) {
        return navigate('/auth-pwd-change', {
          state: { error: error?.message },
        })
      }
      if (error?.message?.includes('do you want to auto logout')) {
        return navigate('/auth-clear-session', {
          state: {
            error: error?.message,
            userName: getValues('credName'),
            password: getValues('credPass'),
          },
        })
      }
    },
  })

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-4">
            {location.state?.success && <AlertSuccessResponse success={location.state?.success} />}
            {isError && <AlertErrorArrayResponse ErrorArray={ErrorArray} />}
            <div className="card shadow-sm">
              <div className="auth-bg-banner text-center">
                <div className="text-dark p-4">
                  <img src={ProductImage} className="img-fluid" width="100" alt="brand" />
                  <p className="fw-semibold m-0 system_version text-center">Version 2.0.0.2</p>
                  <h5>Welcome Back !</h5>
                  <p className="m-0">
                    Sign in to continue to <span className="footer-link fw-bold">phAMACore</span>.
                  </p>
                </div>
              </div>
              <div className="card-body p-4">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="credName" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control auth-form"
                      id="credName"
                      {...register('credName', { required: true })}
                      placeholder="Enter your username"
                      autoFocus
                    />
                    {errors.credName && (
                      <span className="form-text text-danger" role="alert">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="credPass" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control auth-form"
                      id="credPass"
                      {...register('credPass', { required: true })}
                      placeholder="*********"
                    />
                    {errors.credPass && (
                      <span className="form-text text-danger" role="alert">
                        This field is required
                      </span>
                    )}
                  </div>

                  <button
                    className="btn btn-block d-grid w-100 auth-button"
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <i className="bx bx-loader bx-spin font-size-16 me-2 align-middle"></i>{' '}
                        Loading
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                  <div className="mt-3 text-center">
                    <Link to="/auth-recoverpw" className="link-secondary">
                      <i className="mdi mdi-lock me-1" />
                      Forgot your password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p>
                © {new Date().getFullYear()} phAMACore. Crafted with{' '}
                <i className="mdi mdi-heart text-danger" /> by{' '}
                <span className="footer-link fw-semibold">CoreBase Solutions</span>
              </p>
            </div>
          </div>
        </div>
      </CContainer>
    </div>
  )
}

export default Login
