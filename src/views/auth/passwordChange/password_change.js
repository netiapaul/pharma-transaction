import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import ProductImage from '../../../assets/images/LoginPageLogo.png'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { AlertErrorArrayResponse, AlertErrorResponse } from '../../../UI/alerts/alertResponse'
import { ChangePassword } from '../../../services/auth_Services'

const Login = () => {
  //meta title
  document.title = 'Password Change | phAMACore Cloud'
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
      currentPassword: '',
      newPassword: '',
    },
  })

  const onSubmit = (data) => {
    const userData = {
      currentPassword: data?.currentPassword,
      newPassword: data?.newPassword,
    }
    handleUnlock(userData)
  }

  const { isPending, mutate: handleUnlock } = useMutation({
    mutationKey: ['lock_auth'],
    mutationFn: (data) => ChangePassword(data),
    onSuccess: () => {
      setErrorArray([])
      toast.success('Password reset successfull')
      navigate('/', {
        replace: true,
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
            <div className="card shadow-sm">
              <div className="auth-bg-banner text-center">
                <div className="text-dark p-4">
                  <img src={ProductImage} className="img-fluid" width="100" alt="brand" />
                  <p className="fw-semibold m-0 system_version text-center">Version 2.0.0.2</p>
                  <h5>Password Change</h5>
                  <p className="m-0">
                    Enter your new password to unlock{' '}
                    <span className="footer-link fw-bold">phAMACore</span>.
                  </p>
                </div>
              </div>
              <div className="card-body p-4">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control auth-form"
                      id="currentPassword"
                      {...register('currentPassword', { required: true })}
                      placeholder="*********"
                    />
                    {errors.currentPassword && (
                      <span className="form-text text-danger" role="alert">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col pe-1">
                      <div>
                        <label htmlFor="newPassword" className="form-label">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control auth-form"
                          id="newPassword"
                          {...register('newPassword', {
                            required: true,
                          })}
                          placeholder="*********"
                        />
                        {errors.newPassword && (
                          <span className="form-text text-danger" role="alert">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col ps-1">
                      <div>
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control auth-form"
                          id="confirmPassword"
                          {...register('confirmPassword', {
                            required: true,
                            validate: (value) =>
                              value === getValues('newPassword') || 'The passwords do not match',
                          })}
                          placeholder="*********"
                        />
                        {errors.confirmPassword && (
                          <span className="form-text text-danger" role="alert">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </div>
                    </div>
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
                      'Reset'
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
