import React from 'react'
import PropTypes from 'prop-types'

function FilterButton({ onClick }) {
  return (
    <button
      type="button"
      style={{ width: '5rem' }}
      className="btn btn-sm filter-btn me-1"
      onClick={onClick}
    >
      <i className="mdi mdi-filter-outline"></i> Filter
    </button>
  )
}

function DeleteTransactionButton({ text, onClick }) {
  return (
    <button
      type="button"
      style={{ width: '5rem' }}
      className="btn btn-sm delete-btn me-1"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

function NewTransactionButton({ text }) {
  return (
    <button type="button" style={{ width: '5rem' }} className="btn btn-sm add-btn me-1">
      {text}
    </button>
  )
}

function EditTransactionButton({ text }) {
  return (
    <button type="button" style={{ width: '5rem' }} className="btn btn-sm edit-btn me-1">
      {text}
    </button>
  )
}

function PrintReportButton() {
  return (
    <button type="button" style={{ width: '5rem' }} className="btn btn-sm print-btn me-1">
      Print
    </button>
  )
}

function CloseTransactionButton() {
  return (
    <button type="button" style={{ width: '5rem' }} className="btn btn-sm close-btn me-1">
      Close
    </button>
  )
}

FilterButton.propTypes = {
  onClick: PropTypes.func,
}
NewTransactionButton.propTypes = {
  text: PropTypes.string,
}
EditTransactionButton.propTypes = {
  text: PropTypes.string,
}
DeleteTransactionButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export {
  FilterButton,
  DeleteTransactionButton,
  NewTransactionButton,
  EditTransactionButton,
  PrintReportButton,
  CloseTransactionButton,
}
