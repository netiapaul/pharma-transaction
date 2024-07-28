import React from 'react'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

export function AlertSuccessResponse({ success }) {
  return (
    <Alert show={true} variant="success">
      <p className="m-0">{success}</p>
    </Alert>
  )
}

export function AlertErrorResponse({ error }) {
  return (
    <Alert show={true} variant="danger">
      <p className="m-0">{error}</p>
    </Alert>
  )
}

export function AlertErrorArrayResponse({ ErrorArray }) {
  return (
    <Alert show={true} variant="danger">
      <p className="fw-medium mb-1">Error/s with your submission!</p>
      <ul className="m-0">
        {ErrorArray?.map((err, index) => (
          <li className="p-1" key={index}>
            {err}
          </li>
        ))}
      </ul>
    </Alert>
  )
}

AlertSuccessResponse.propTypes = {
  success: PropTypes.string,
}

AlertErrorResponse.propTypes = {
  error: PropTypes.string,
}

AlertErrorArrayResponse.propTypes = {
  ErrorArray: PropTypes?.array,
}
