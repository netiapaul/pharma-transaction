import React, { useMemo } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'

function AccountingTills() {
  const data = [
    {
      tillID: 1,
      tillShiftLog: 'TILL: 1 SHFT: 30 USER: PaulDev-21/02/2024 11:47:26  ',
      tillSession: 30,
      acct: 'BNK-001',
    },
    {
      tillID: 5,
      tillShiftLog: 'TILL: 5 SHFT: 21 USER: CoreDemo-13/06/2024 14:39:57  ',
      tillSession: 21,
      acct: 'BNK-001',
    },
    {
      tillID: 27,
      tillShiftLog: 'TILL: 27 SHFT: 3 USER: Cedric-18/02/2024 21:34:49  ',
      tillSession: 3,
      acct: 'BNK-001',
    },
    {
      tillID: 28,
      tillShiftLog: 'TILL: 28 SHFT: 1 USER: templedemo-09/04/2024 09:43:42  ',
      tillSession: 1,
      acct: 'BNK-001',
    },
    {
      tillID: 29,
      tillShiftLog: 'TILL: 29 SHFT: 2 USER: Test-25/04/2024 11:08:36  ',
      tillSession: 2,
      acct: 'BNK-001',
    },
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'tillSession', //simple recommended way to define a column
        header: 'Session',
        size: 50,
        grow: false,
      },
      {
        accessorKey: 'tillShiftLog', //simple recommended way to define a column
        header: 'Till Shift',
        size: 200,
        grow: true,
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    data,
    columns,
    initialState: { density: 'compact' },
    enableSorting: false,
    invertSorting: false,
    enableMultiSort: false,
    enableToolbarInternalActions: true,
    enableTopToolbar: true,
    enableColumnActions: false,
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
    // muiTableBodyCellProps: {
    //   sx: {
    //     p: '2px 16px',
    //   },
    // },
    // muiTableBodyRowProps: {
    //   sx: {
    //     height: '10px',
    //   },
    // },
    // enableStickyHeader: true,

    // enableRowSelection: true,
  })

  return (
    <Modal show={false} backdrop="static" centered size="lg">
      <Modal.Header>Select Transacting Till</Modal.Header>
      <Modal.Body>
        <MaterialReactTable table={table} />
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

export default AccountingTills
