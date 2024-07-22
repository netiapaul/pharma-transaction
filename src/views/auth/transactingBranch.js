import React, { useState } from 'react'
import { CContainer } from '@coreui/react'
import Phamacore from '../../assets/images/pcico.png'
import AccountingTills from '../../UI/tills/tills'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AlertErrorArrayResponse } from '../../UI/alerts/alertResponse'
import { Logout, ValidateBranch } from '../../services/systemServices'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'

function TransactingBranch() {
  if (!localStorage.getItem('token')) return <Navigate to="/" replace={true} />

  document.title = 'Validate Branch | phAMACore Cloud'

  const [ErrorArray, setErrorArray] = useState([])

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => handleValidate(JSON.parse(data.branch))

  const { isPending: isValidating, mutate: handleValidate } = useMutation({
    mutationKey: ['validateBranch'],
    mutationFn: (data) => ValidateBranch(data),
    onSuccess: () => {
      toast.success('Branch validation successfull')
      navigate('/dashboard', { replace: true })
    },
  })

  const { isPending, mutate: handleLogOut } = useMutation({
    mutationKey: ['logout'],
    mutationFn: Logout,
    onSuccess: () => {
      navigate('/', { replace: true })
    },
    onError: (error) => {
      console.log(error)
      setErrorArray(...new Set([...ErrorArray, ...error.message?.split(',')]))
    },
    onSettled: () => {
      navigate('/', { replace: true })
    },
  })

  let isLoading = isPending || isValidating

  return (
    <>
      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              {Boolean(ErrorArray?.length) && <AlertErrorArrayResponse ErrorArray={ErrorArray} />}
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center">
                    <img
                      src={Phamacore}
                      alt="brand"
                      className="img-fluid d-flex justify-content-center m-auto mb-3"
                      width={50}
                    />
                  </div>
                  <h6 className="text-center mb-3">Assigned Branches</h6>
                  <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="bcode" className="form-label text-muted">
                        Please select your transacting branch
                      </label>
                      <select
                        className="form-select auth-form"
                        {...register('branch', { required: true })}
                      >
                        <option value={''}>Open this select menu</option>
                        {JSON.parse(localStorage.getItem('user')).userBranches?.map(
                          (branch, index) => (
                            <option key={index} value={JSON.stringify(branch)}>
                              {branch.brancH_NAME}
                            </option>
                          ),
                        )}
                      </select>
                      {errors.branch && (
                        <span className="form-text text-danger" role="alert">
                          This field is required
                        </span>
                      )}
                    </div>

                    <button
                      className="btn btn-primary flex-fill d-grid w-100 auth-button"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <i className="bx bx-loader bx-spin font-size-16 me-2 align-middle"></i>{' '}
                          Loading
                        </>
                      ) : (
                        'Proceed'
                      )}
                    </button>
                    <div className="mt-4 text-center">
                      <p className="text-muted m-0">
                        <i className="mdi mdi-lock me-1" />
                        Back to{' '}
                        <span
                          className="text-decoration-underline fw-medium text-primary-emphasis"
                          role="button"
                          onClick={handleLogOut}
                        >
                          Sign in
                        </span>
                      </p>
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
      {/* <AccountingTills /> */}
    </>
  )
}

export default TransactingBranch
