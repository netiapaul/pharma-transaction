import React from 'react'
import {
  FilterButton,
  NewTransactionButton,
  EditTransactionButton,
  DeleteTransactionButton,
  PrintReportButton,
  CloseTransactionButton,
} from '../../../UI/buttons/buttons'
import {
  DeleteTransactionModal,
  PostTransactionModal,
} from '../../../UI/modals/deleteTransactionModal'
import { AddItemLine } from '../../../UI/itemLine/itemLine'
import Drawer from '@mui/material/Drawer'

function CreateSalesInvoice() {
  document.title = 'Create SalesInvoice | phAMACore Cloud'
  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid p-0">
        <div className="flex-fill d-flex align-items-center">
          <div className="d-flex">
            <h6 className="m-0">New Sales Invoice</h6>
          </div>
          <span className="flex-fill flex-grow-1"></span>
          <span>
            <FilterButton />
            <DeleteTransactionButton text={'Delete'} />
            <EditTransactionButton text={'Save'} />
            <NewTransactionButton text={'Post'} />
            <PrintReportButton />
            <CloseTransactionButton />
          </span>
        </div>
      </div>
      <hr className="my-2" />
      <div className="row g-2 d-print-none">
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off">
                <div className="d-flex justify-content-between">
                  <p className="m-0 fw-bold" style={{ fontSize: '10px' }}>
                    Sales Invoice Details
                  </p>
                  <div className="d-flex">
                    {/* DRAWER HERE */}
                    <React.Fragment key={'right'}>
                      <Drawer
                        anchor={'right'}
                        open={true}
                        PaperProps={{ style: { width: '30em' } }}
                      >
                        <div className="container-fluid p-3 h-100">
                          <h6 className="fw-bold mb-0 offcanvas-title">Other Invoice Details</h6>
                          <hr className="my-1" />
                          <p className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem
                            repellat recusandae ratione provident delectus. Unde ipsum quidem
                            officiis quasi nam culpa, impedit facilis, itaque totam blanditiis
                            incidunt commodi. Hic!
                          </p>
                          <hr />
                          <div className="d-flex justify-content-end">
                            <DeleteTransactionButton text={'Close'} />
                          </div>
                        </div>
                      </Drawer>
                    </React.Fragment>
                    <div className="vr fw-bold mx-2"></div>
                    <p className="m-0" style={{ fontSize: '10px' }}>
                      User:{' '}
                      <span className="text-primary fw-bold">
                        {JSON.parse(localStorage.getItem('user')).username}
                      </span>
                    </p>
                    <div className="vr fw-bold mx-2"></div>
                    <p className="m-0 " style={{ fontSize: '10px' }}>
                      Status: <span className={'text-danger fw-bold'}>Open</span>
                    </p>
                  </div>
                </div>
                <hr className="mt-1 mb-2" />
                <div className="row">
                  <div className="col-md pe-1">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="row mb-2">
                          <label htmlFor="entryDate" className="col-3 col-form-label divider">
                            Date
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <label htmlFor="customer" className="col-3 col-form-label divider">
                            Customer
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <label htmlFor="scheme" className="col-3 col-form-label divider">
                            Scheme
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="member" className="col-3 col-form-label divider">
                            Member
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md px-1">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="row mb-2">
                          <label htmlFor="orderNo" className="col-3 col-form-label divider">
                            Order No
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <label htmlFor="salesRep" className="col-3 col-form-label divider">
                            Sales Rep
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <label htmlFor="reference" className="col-3 col-form-label divider">
                            Reference
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control form-control-sm"
                              rows="1"
                              id="reference"
                              name="reference"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="contact" className="col-3 col-form-label divider">
                            Contact
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md ps-1">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="row mb-2">
                          <label htmlFor="pricing" className="col-3 col-form-label divider">
                            Pricing
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <label htmlFor="cuInvoiceNumber" className="col-3 col-form-label divider">
                            CU Invoice No
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row mb-2">
                          <label htmlFor="clientPin" className="col-3 col-form-label divider">
                            Client Pin
                          </label>
                          <div className="col">
                            <input className="form-control form-control-sm" type="text" />
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="comment" className="col-3 col-form-label divider">
                            Comments
                          </label>
                          <div className="col">
                            <textarea
                              className="form-control form-control-sm"
                              rows="1"
                              id="comment"
                              name="comment"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <div className="d-flex justify-content-start">
                    <p className="m-0 fw-bold" style={{ fontSize: '11px' }}>
                      Item Details
                    </p>
                  </div>
                  <div className="hstack gap-3">
                    <p className="m-0 fw-medium">
                      Credit Limit:{' '}
                      <span className="filter-btn text-decoration-underline" role="button">
                        9,000,000,000
                      </span>
                    </p>
                    <p className="m-0 fw-medium">
                      Balance:{' '}
                      <span className="filter-btn text-decoration-underline" role="button">
                        -130,191.084
                      </span>
                    </p>
                  </div>
                  <span>
                    <p className="m-0 text-danger fw-bold">Customer is Zero Rated</p>
                  </span>
                  <span>
                    <p className="m-0 text-danger fw-bold">Member Limit Daily = 1000|</p>
                  </span>
                  <p className="m-0 fw-bold text-decoration-underline text-primary" role={'button'}>
                    More Invoice Header Details
                  </p>
                </div>
                <hr className="m-0" />
                <AddItemLine />
              </form>
              <hr className="my-2" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body p-2">
              <p className="my-0 fw-semibold text-center">Sales Invoice Summary</p>
              <hr className="my-1" />
            </div>
          </div>
        </div>
      </div>
      <DeleteTransactionModal />
      <PostTransactionModal />
    </>
  )
}

export default CreateSalesInvoice
