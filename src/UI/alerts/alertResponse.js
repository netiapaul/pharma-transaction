import React from 'react'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

export function AlertSuccessResponse() {
  return (
    <Alert show={true} variant="success">
      <p className="m-0">
        Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor
        ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
      </p>
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
      <h6>Error/s with your submission!</h6>
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

AlertErrorResponse.propTypes = {
  error: PropTypes.string,
}

AlertErrorArrayResponse.propTypes = {
  ErrorArray: PropTypes.array,
}
