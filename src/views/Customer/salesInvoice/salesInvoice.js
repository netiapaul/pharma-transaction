/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  DeleteTransactionButton,
  EditTransactionButton,
  FilterButton,
  NewTransactionButton,
} from '../../../UI/buttons/buttons'
import Drawer from '@mui/material/Drawer'
import DatePicker from 'react-datepicker'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { GET_CUSTOMER_INVOICES } from '../../../services/customer_Module_Services'
import { useSearchParams } from 'react-router-dom'

function SalesInvoice() {
  document.title = 'Sales Invoice | phAMACore Cloud'
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [queryFilterData, setQueryFilterData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    reference: '',
    account: '',
    amount: '',
    scheme: '',
    salesCategory: 0,
    batched: '',
    viewall: false,
  })
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    code: { value: null, matchMode: FilterMatchMode.CONTAINS },
    price: { value: null, matchMode: FilterMatchMode.CONTAINS },
    category: { value: null, matchMode: FilterMatchMode.CONTAINS },
    quantity: { value: null, matchMode: FilterMatchMode.CUSTOM },
  })
  const [globalFilterValue, setGlobalFilterValue] = useState('')
  let [searchParams, setSearchParams] = useSearchParams()

  const formatDate = (value) => {
    return value.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const onGlobalFilterChange = (e) => {
    const value = e.target.value
    let _filters = { ...filters }

    _filters['global'].value = value
    console.log(_filters)
    console.log(value)
    setFilters(_filters)
    setGlobalFilterValue(value)
  }

  const handleSelect = (e) => {
    setSelectedProduct(e.value)
    console.log(e)
  }

  const dateBodyTemplate = (rowData) => {
    return formatDate(new Date(rowData.docDate))
  }

  const statusBodyTemplate = (rowData) => {
    return (
      <div
        // className={`badge rounded-pill ${rowData.bch ? 'verified-status-pill' : 'unverified-status-pill'}`}
        className={rowData.bch ? 'batched-doc' : 'unbatched-doc'}
      ></div>
    )
  }

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-end">
        <input
          type="text"
          className="form-control form-control-sm search-field-input"
          placeholder="Search"
          name=""
          id=""
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          disabled
        />
      </div>
    )
  }

  const handleFilterData = (e) => {
    e.preventDefault()
    setSearchParams({
      startDate: formatDate(new Date(queryFilterData.startDate)),
      endDate: formatDate(new Date(queryFilterData.endDate)),
      reference: queryFilterData.reference,
      account: queryFilterData.account,
      amount: queryFilterData.amount,
      scheme: queryFilterData.scheme,
      salesCategory: queryFilterData.salesCategory,
      batched: queryFilterData.batched,
      viewall: queryFilterData.viewall,
    })
    const data = {}
    GetSalesInvoice(data)
    // console.log(queryFilterData)
  }

  const {
    isPending: isLoadingInvoice,
    isError: isMutateError,
    mutate: GetSalesInvoice,
    error: mutateSalesInvError,
  } = useMutation({
    mutationKey: ['salesInvoice'],
    mutationFn: (formData) => {
      return fetch('/api', formData)
    },
  })

  const {
    isPending,
    isError,
    data = [],
    error,
  } = useQuery({
    queryKey: ['salesInvoice'],
    queryFn: () =>
      GET_CUSTOMER_INVOICES({
        startDate: '01/01/2024',
        endDate: '31/12/2024',
        reference: '',
        account: '',
        amount: '',
        scheme: '',
        salesCategory: 0,
        batched: '',
        viewall: false,
      }),
  })

  const header = renderHeader()
  let isLoading = isPending || isLoadingInvoice

  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid p-0">
        <div className="flex-fill d-flex align-items-center">
          <div className="d-flex">
            <h6 className="m-0 position-relative">
              Sales Invoice
              <span
                className="position-absolute top-0 start-150 translate-middle badge rounded-pill bg-danger"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                role="button"
                title={data[0]?.unbatched + ' Unbatched Invoice'}
              >
                {data[0]?.unbatched}
              </span>
            </h6>
          </div>
          <span className="flex-fill flex-grow-1"></span>
          <span>
            <FilterButton onClick={() => setIsDrawerOpened(true)} />
            <NewTransactionButton text={'New'} />
            <EditTransactionButton text={'Edit'} />
          </span>
        </div>
        <React.Fragment key={'right'}>
          <Drawer anchor={'right'} open={isDrawerOpened} PaperProps={{ style: { width: '30rem' } }}>
            <div className="container p-3 h-100">
              <h6 className="fw-bold mb-0 offcanvas-title">Filter Options</h6>
              <hr className="mt-1 mb-3" />
              <form autoComplete="off" onSubmit={handleFilterData}>
                <div className="row mb-3">
                  <label htmlFor="date" className="col-3 col-form-label divider">
                    Date
                  </label>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <DatePicker
                          className="form-control form-control-sm"
                          selected={queryFilterData.startDate}
                          //
                          dropdownMode="select"
                          dateFormat="dd/MM/yyyy"
                          showMonthDropdown
                          showYearDropdown
                          onChange={(date) =>
                            setQueryFilterData({
                              ...queryFilterData,
                              startDate: date,
                            })
                          }
                        />
                      </div>
                      <div className="col">
                        <DatePicker
                          className="form-control form-control-sm"
                          selected={queryFilterData.endDate}
                          //
                          dropdownMode="select"
                          showMonthDropdown
                          showYearDropdown
                          maxDate={new Date()}
                          dateFormat="dd/MM/yyyy"
                          onChange={(date) =>
                            setQueryFilterData({
                              ...queryFilterData,
                              endDate: date,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="amount" className="col-3 col-form-label divider">
                    Account
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={queryFilterData.account}
                      onChange={(e) =>
                        setQueryFilterData({
                          ...queryFilterData,
                          account: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="amount" className="col-3 col-form-label divider">
                    Amount
                  </label>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      value={queryFilterData.amount}
                      onChange={(e) =>
                        setQueryFilterData({
                          ...queryFilterData,
                          amount: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="amount" className="col-3 col-form-label divider">
                    Scheme
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={queryFilterData.scheme}
                      onChange={(e) =>
                        setQueryFilterData({
                          ...queryFilterData,
                          scheme: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="reference" className="col-3 col-form-label divider">
                    Reference
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={queryFilterData.reference}
                      onChange={(e) =>
                        setQueryFilterData({
                          ...queryFilterData,
                          reference: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="batched" className="col-3 col-form-label divider">
                    Batched
                  </label>
                  <div className="col">
                    <select
                      className="form-select form-select-sm"
                      id="viewall"
                      name="viewall"
                      value={queryFilterData.batched}
                      onChange={(e) =>
                        setQueryFilterData({
                          ...queryFilterData,
                          batched: e.target.value,
                        })
                      }
                    >
                      <option value={''}>View All</option>
                      <option value={'true'}>True</option>
                      <option value={'false'}>False</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="batched" className="col-3 col-form-label divider">
                    View All
                  </label>
                  <div className="col">
                    <select
                      className="form-select form-select-sm"
                      id="viewall"
                      name="viewall"
                      value={queryFilterData.viewall}
                      onChange={(e) =>
                        setQueryFilterData({
                          ...queryFilterData,
                          viewall: e.target.value,
                        })
                      }
                    >
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <NewTransactionButton type="submit" text={'Select'} />
                  <DeleteTransactionButton
                    type="button"
                    text={'Close'}
                    onClick={() => setIsDrawerOpened(false)}
                  />
                </div>
              </form>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
      <hr className="my-2" />
      <div className="card">
        <div className="card-body">
          {JSON.stringify(selectedProduct)}
          <DataTable
            value={data}
            showGridlines
            size={'small'}
            paginator
            rows={20}
            rowsPerPageOptions={[5, 10, 15, 20, 50]}
            emptyMessage="No data found."
            selectionMode="single"
            selection={selectedProduct}
            header={header}
            loading={isLoading}
            onSelectionChange={(e) => handleSelect(e)}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          >
            <Column field="docNumber" header="DocNumber" style={{ width: '6rem' }}></Column>
            <Column
              field="docDate"
              header="DocDate"
              body={dateBodyTemplate}
              style={{ width: '6rem' }}
            ></Column>
            <Column field="docAmt" header="DocAmount"></Column>
            <Column field="curr" header="Curr"></Column>
            <Column field="acct" header="Acct"></Column>
            <Column field="acctName" header="AcctName"></Column>
            <Column field="membername" header="Member"></Column>
            <Column field="acctRef" header="Ref"></Column>
            <Column field="numberOfItems" header="Items"></Column>
            <Column field="printcopy" header="PrintedCopies" style={{ width: '6rem' }}></Column>
            <Column
              field="bch"
              header="Batched"
              dataType="boolean"
              body={statusBodyTemplate}
              style={{ width: '3rem', textAlign: 'center' }}
            ></Column>
            <Column field="doneBy" header="DoneBy"></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default SalesInvoice
