import React, { useState } from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import ProductImage from '../../../assets/images/LoginPageLogo.png'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { AlertErrorArrayResponse, AlertErrorResponse } from '../../../UI/alerts/alertResponse'
import { ClearSessions } from '../../../services/auth_Services'

const Login = () => {
  //meta title
  document.title = 'Lock Screen | phAMACore Cloud'
  const navigate = useNavigate()
  let location = useLocation()
  const [ErrorArray, setErrorArray] = useState([])

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lockedcredName: location.state?.userName || '',
      lockedcredPass: location.state?.password || '',
    },
  })

  const onSubmit = (data) => {
    const userData = {
      userName: data?.lockedcredName,
      password: data?.lockedcredPass,
    }
    handleUnlock(userData)
  }

  const { isPending, mutate: handleUnlock } = useMutation({
    mutationKey: ['clear_session'],
    mutationFn: ClearSessions,
    onSuccess: (res) => {
      setErrorArray([])
      toast.success('Session cleared successfull')
      navigate('/', {
        replace: true,
        state: {
          success: res.message,
        },
      })
    },
    onError: (error) => {
      console.log(error)
      setErrorArray([...error.message?.split(',')])
    },
  })
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <AlertErrorResponse error={location.state?.error} />
            {Boolean(ErrorArray?.length) && <AlertErrorArrayResponse ErrorArray={ErrorArray} />}
            <div className="card shadow-sm border-0">
              <div className="auth-bg-banner text-center">
                <div className="text-dark p-4">
                  <img src={ProductImage} className="img-fluid" width="100" alt="brand" />
                  <p className="fw-semibold m-0 system_version text-center">Version 2.0.0.2</p>
                  <h5>Clear Session</h5>
                  <p className="m-0">
                    Enter your credentials to unlock{' '}
                    <span className="footer-link fw-bold">phAMACore</span>.
                  </p>
                </div>
              </div>
              <div className="card-body p-4">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="lockedcredName" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control auth-form"
                      id="lockedcredName"
                      {...register('lockedcredName', { required: true })}
                      placeholder="Enter your username"
                      disabled={location.state?.userName}
                    />
                    {errors.lockedcredName && (
                      <span className="form-text text-danger" role="alert">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lockedcredPass" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control auth-form"
                      id="lockedcredPass"
                      {...register('lockedcredPass', { required: true })}
                      placeholder="*********"
                      disabled={location.state?.password}
                    />
                    {errors.lockedcredPass && (
                      <span className="form-text text-danger" role="alert">
                        This field is required
                      </span>
                    )}
                  </div>
                  <button
                    className="btn btn-block d-grid w-100 auth-button-logout"
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <i className="bx bx-loader bx-spin font-size-16 me-2 align-middle"></i>{' '}
                        Loading
                      </>
                    ) : (
                      'Logout'
                    )}
                  </button>
                  <div className="mt-3 text-center">
                    Not you ? return
                    <Link to="/" className="link-secondary ms-1">
                      Sign In here
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
