import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
// import { MultiSelect } from 'primereact/multiselect'
import PropTypes from 'prop-types'
import { dateDefineds, ranges } from '../../utils/helpers'
import { useForm } from 'react-hook-form'
import moment from 'moment'

function DashboardAnalysisFilters({ isLoading, HandleSubmit }) {
  const [show, setShow] = useState(false)
  const [selectedCities, setSelectedCities] = useState(null)
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dateRange: 'Today',
      startDate: new Date(),
      endDate: new Date(),
    },
  })
  const watchAllFields = watch() // when pass nothing as argument, you are watching everything

  const onSubmit = (data) =>
    HandleSubmit({
      //   bcodes: '1,2,3,4,6',
      bcodes: '',
      startDate: moment(data?.startDate).format('DD/MM/YYYY'),
      endDate: moment(data?.endDate).format('DD/MM/YYYY'),
    })

  const handleDate = (e) => {
    switch (e.target.value) {
      case 'Today':
        setValue('startDate', dateDefineds.startOfToday)
        setValue('endDate', dateDefineds.endOfToday)
        break
      case 'Yesterday':
        setValue('startDate', dateDefineds.startOfYesterday)
        setValue('endDate', dateDefineds.endOfYesterday)
        break
      case 'This Week':
        setValue('startDate', dateDefineds.startOfWeek)
        setValue('endDate', dateDefineds.endOfWeek)
        break
      case 'Last Week':
        setValue('startDate', dateDefineds.startOfLastWeek)
        setValue('endDate', dateDefineds.endOfLastWeek)
        break
      case 'This Month':
        setValue('startDate', dateDefineds.startOfMonth)
        setValue('endDate', dateDefineds.endOfMonth)
        break
      case 'Month To Date':
        setValue('startDate', dateDefineds.startOfMonth)
        setValue('endDate', dateDefineds.endOfToday)
        break
      case 'Last Month':
        setValue('startDate', dateDefineds.startOfLastMonth)
        setValue('endDate', dateDefineds.endOfLastMonth)
        break
      case 'This Year':
        setValue('startDate', dateDefineds.startOfYear)
        setValue('endDate', dateDefineds.endOfYear)
        break
      case 'Month To Year':
        setValue('startDate', dateDefineds.startOfLastYear)
        setValue('endDate', dateDefineds.endOfToday)
        break
      case 'Last Year':
        setValue('startDate', dateDefineds.startOfLastYear)
        setValue('endDate', dateDefineds.endOfLastYear)
        break
      case 'Year To Date':
        setValue('startDate', dateDefineds.startOfYear)
        setValue('endDate', dateDefineds.endOfToday)
        break
      default:
        setValue('startDate', new Date())
        setValue('endDate', new Date())
    }
  }

  const handleMask = () => {
    setShow((show) => !show)
  }

  return (
    <div className="card dashboard-card mb-3">
      <div className="card-header fw-bold mb-0">Filter Actions</div>
      <div className="card-body">
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            <div className="col">
              <label htmlFor="branches" className="col-form-label">
                Branches
              </label>
              {/* <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                options={cities}
                optionLabel="name"
                display="chip"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                className="w-full md:w-20rem"
              /> */}
            </div>
            <div className="col">
              <label htmlFor="inputEmail4" className="col-form-label">
                Date Range
              </label>
              <select
                className="form-select form-select-sm"
                {...register('dateRange', {
                  onChange: (e) => handleDate(e),
                })}
              >
                <option>No Date</option>
                {ranges.map((range, key) => {
                  return (
                    <option key={key} value={range}>
                      {range}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="col">
              <label htmlFor="inputEmail4" className="col-form-label">
                Start Date
              </label>
              <DatePicker
                className="form-control form-control-sm"
                selected={watchAllFields.startDate}
                dateFormat="dd/MM/yyyy"
                {...register('startDate', {
                  required: true,
                })}
                onChange={(date) => setValue('startDate', date)}
                //
                dropdownMode="select"
                showMonthDropdown
                showYearDropdown
              />
            </div>
            <div className="col">
              <label htmlFor="inputEmail4" className="col-form-label">
                End Date
              </label>
              <DatePicker
                className="form-control form-control-sm"
                selected={watchAllFields.endDate}
                dateFormat="dd/MM/yyyy"
                {...register('endDate', {
                  required: true,
                })}
                onChange={(date) => setValue('endDate', date)}
                //
                dropdownMode="select"
                showMonthDropdown
                showYearDropdown
              />
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between mt-3">
            <p className="m-0 not-important">
              Selected Branches: <span className="fw-bold"></span>
            </p>
            <p className="m-0 not-important">
              Filtered From: <span className="fw-bold"></span>
            </p>
            <div className="hstack gap-3">
              <button
                type="submit"
                style={{ width: '5rem' }}
                className="btn btn-sm company-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <i className="bx bx-loader bx-spin font-size-16 ms-1 align-middle"></i>
                ) : (
                  'Apply'
                )}
              </button>
              <div className="vr"></div>
              <button
                type="button"
                style={{ width: '5rem' }}
                className="btn btn-sm reverse-company-btn"
                disabled={isLoading}
                onClick={handleMask}
              >
                {show ? (
                  <>
                    Show <i className="mdi mdi-eye-outline ms-1" />
                  </>
                ) : (
                  <>
                    Mask <i className="mdi mdi-eye-off-outline ms-1" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

DashboardAnalysisFilters.propTypes = {
  isLoading: PropTypes.bool,
  HandleSubmit: PropTypes.func,
}

export default DashboardAnalysisFilters
