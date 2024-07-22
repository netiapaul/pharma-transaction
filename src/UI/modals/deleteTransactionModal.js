import React from 'react'
import Modal from 'react-bootstrap/Modal'

function DeleteTransactionModal() {
  return (
    <Modal show={false} backdrop="static" centered>
      <Modal.Header className="delete-modal-header"></Modal.Header>
      <Modal.Body>
        <div className="hstack gap-3">
          <span className="delete-circle">
            <i className="mdi mdi-alert-outline text-danger" />
          </span>

          <div>
            <h6 className="fw-semibold">Delete Transaction</h6>
            <span className="m-0 text-muted">
              Are you sure you want to delete this record? All record related to this line will be
              deleted as well. This action cannot be undone.
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end bg-body-tertiary">
        <button
          type="button"
          style={{ width: '5rem' }}
          className="btn btn-sm cancel-delete-btn me-1"
        >
          Cancel
        </button>
        <button
          type="button"
          style={{ width: '5rem' }}
          className="btn btn-sm delete-modal-btn me-1"
        >
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  )
}

function PostTransactionModal() {
  return (
    <Modal show={false} backdrop="static" centered>
      <Modal.Header className="delete-modal-header"></Modal.Header>
      <Modal.Body>
        <div className="hstack gap-3">
          <span className="post-circle">
            <i className="mdi mdi-check-circle-outline text-success" />
          </span>

          <div>
            <h6 className="fw-semibold">Post Transaction</h6>
            <span className="m-0 text-muted">
              Are you sure you want to batch this record? All record related to this line will be
              batched as well. This action cannot be undone.
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end bg-body-tertiary">
        <button
          type="button"
          style={{ width: '5rem' }}
          className="btn btn-sm cancel-delete-btn me-1"
        >
          Cancel
        </button>
        <button type="button" style={{ width: '5rem' }} className="btn btn-sm post-modal-btn me-1">
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export { DeleteTransactionModal, PostTransactionModal }
