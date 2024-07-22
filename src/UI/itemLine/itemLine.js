import React from 'react'

export function AddItemLine() {
  return (
    <div className="row">
      <div className="col-md-1 pe-md-0">
        <label htmlFor="itemCode" className="col-form-label">
          Code
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md-3 px-md-0">
        <label htmlFor="itemCode" className="col-form-label">
          itemName
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="itemCode" className="col-form-label">
          pkz
        </label>
        <input className="form-control form-control-sm " type="number" readOnly />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="itemQty" className="col-form-label">
          Qty
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="itemBonus" className="col-form-label">
          Bns
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="itemPartWhole" className="col-form-label">
          P/W
        </label>
        <select
          className="form-select form-select-sm packaging fw-semibold text-center"
          id="itemPartWhole"
          name="itemPartWhole"
        >
          <option value={'P'}>P</option>
          <option value={'W'}>W</option>
        </select>
      </div>
      <div className="col-md-1 px-md-0">
        <label htmlFor="itemPrice" className="col-form-label">
          Price
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md-1 px-md-0">
        <label htmlFor="itemTotal" className="col-form-label">
          Total
        </label>
        <input className="form-control form-control-sm " type="number" readOnly />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="itemDisc" className="col-form-label">
          Disc%
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="itemTaxCode" className="col-form-label">
          VAT
        </label>
        <input className="form-control form-control-sm " type="text" readOnly />
      </div>
      <div className="col-md-1 px-md-0">
        <label htmlFor="itemNett" className="col-form-label">
          Nett
        </label>
        <input className="form-control form-control-sm " type="number" readOnly />
      </div>
      <div className="col-md px-md-0">
        <label htmlFor="margin" className="col-form-label">
          Mrgn
        </label>
        <input className="form-control form-control-sm " type="number" disabled />
      </div>
      <div className="col-md-1 px-md-0">
        <label htmlFor="itemDeptCode" className="col-form-label">
          Dept
        </label>
        <input className="form-control form-control-sm " type="text" />
      </div>
      <div className="col-md-1">
        <span className="form-check mt-1 mb-0">
          <input
            className="form-check-input"
            type="checkbox"
            // checked={this.state?.canSelectBatches}
            name="canSelectBatches"
            id="canSelectBatches"
            // onChange={this.function.handleChange}
            // onKeyDown={onKeyDown}
          />
          <label className="form-check-label" htmlFor="canSelectBatches">
            Select Batch
          </label>
        </span>
        <button type="button" className="btn btn-sm add-btn w-100">
          Add
        </button>
      </div>
    </div>
  )
}
