import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import ProductImage from '../../../assets/images/LoginPageLogo.png'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { AlertErrorArrayResponse } from '../../../UI/alerts/alertResponse'
import { ForgotPassword } from '../../../services/auth_Services'

const Login = () => {
  //meta title
  document.title = 'Forget Password | phAMACore Cloud'
  const navigate = useNavigate()

  const [ErrorArray, setErrorArray] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const userData = {
      username: data?.credName,
    }
    HandleSubmit(userData)
  }

  const { isPending, mutate: HandleSubmit } = useMutation({
    mutationKey: ['forget_pwd'],
    mutationFn: (data) => ForgotPassword(data),
    onSuccess: (res) => {
      setErrorArray([])
      toast.success('Password reset successfull')
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
            {Boolean(ErrorArray?.length) && <AlertErrorArrayResponse ErrorArray={ErrorArray} />}
            <div className="card shadow-sm border-0">
              <div className="auth-bg-banner text-center">
                <div className="text-dark p-4">
                  <img src={ProductImage} className="img-fluid" width="100" alt="brand" />
                  <p className="fw-semibold m-0 system_version text-center">Version 2.0.0.2</p>
                  <h5>Reset Password !</h5>
                  <p className="m-0">
                    Reset Password to <span className="footer-link fw-bold">phAMACore</span>.
                  </p>
                </div>
              </div>
              <p className="m-0 text-center text-success fw-medium">
                Enter your username and instructions will be sent to you!
              </p>
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
                      'reset'
                    )}
                  </button>
                  <div className="mt-3 text-center">
                    Remember It ?
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
