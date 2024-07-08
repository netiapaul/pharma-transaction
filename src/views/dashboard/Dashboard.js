import React from 'react'

function salesDashboard() {
  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid bg-light p-0">
        <div className="d-flex justify-content-between">
          <div className="flex-fill d-flex align-items-center">
            <div className="d-flex">
              <h6 className="m-0">Sales Dashboard</h6>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="row">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-semibold text-success mb-2">Revenue</h6>
              <h4 className="fw-medium">asd</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-semibold text-primary mb-2">Profit</h6>
              <h4 className="fw-medium">asd</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-semibold text-warning mb-2">Profit %</h6>
              <h4 className="fw-medium">asd</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-semibold text-danger mb-2">Sales</h6>
              <h4 className="fw-medium">asd</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <div className="card dashboard-card h-100">
            <div className="card-header fw-bold mb-0">Sales by Branches</div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col">
          <div className="card dashboard-card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="d-flex justify-content-between gap-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="card dashboard-card">
            <div className="card-header fw-bold mb-0">Sales by Customer</div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col">
          <div className="card dashboard-card">
            <div className="card-header fw-bold mb-0">Monthly Sales</div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default salesDashboard
