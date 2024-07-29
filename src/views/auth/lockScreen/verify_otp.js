import React, { useState } from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import ProductImage from '../../../assets/images/LoginPageLogo.png'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { InputOtp } from 'primereact/inputotp'
import { AlertErrorArrayResponse, AlertSuccessResponse } from '../../../UI/alerts/alertResponse'
import { VerifyUnlockCode } from '../../../services/auth_Services'

const Login = () => {
  //meta title
  document.title = 'Verify OTP | phAMACore Cloud'
  const navigate = useNavigate()
  let location = useLocation()
  const [ErrorArray, setErrorArray] = useState([])

  if (!location.state?.userName || !location.state?.success)
    return <Navigate to="/" replace={true} />

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lockedcredName: location.state?.userName || '',
      otpcode: '',
    },
  })

  const handleOTP = (value) => {
    setValue('otpcode', value)
    console.log(value)
  }

  const onSubmit = (data) => {
    const userData = {
      userName: data?.lockedcredName,
      otpcode: data?.otpcode,
    }
    console.log(userData)
    handleUnlock(userData)
  }

  const { isPending, mutate: handleUnlock } = useMutation({
    mutationKey: ['verify_auth'],
    mutationFn: (data) => VerifyUnlockCode(data),
    onSuccess: () => {
      setErrorArray([])
      toast.success('OTP Verified successfull'), navigate('/', { replace: true })
    },
    onError: (error) => {
      console.log(error)
      if (error?.message?.includes('Account is now unlocked')) {
        toast.success('OTP Verified successfull')
        return navigate('/', {
          state: { success: error?.message },
        })
      }
      setErrorArray([...error.message?.split(',')])
    },
  })
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <AlertSuccessResponse success={location.state?.success} />
            {Boolean(ErrorArray?.length) && <AlertErrorArrayResponse ErrorArray={ErrorArray} />}
            <div className="card shadow-sm border-0">
              <div className="auth-bg-banner text-center">
                <div className="text-dark p-4">
                  <img src={ProductImage} className="img-fluid" width="100" alt="brand" />
                  <p className="fw-semibold m-0 system_version text-center">Version 2.0.0.2</p>
                  <h5>Verify OTP</h5>
                  <p className="m-0">Please enter the 4 digit code sent to the mobile</p>
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
                      OTP
                    </label>
                    <InputOtp
                      id="otpcode"
                      name="otpcode"
                      length={4}
                      onChange={(e) => handleOTP(e.value)}
                      required
                      integerOnly
                    />
                    {errors.otpcode && (
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
                      'Verify'
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
