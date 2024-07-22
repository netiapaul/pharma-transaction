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

function SalesInvoice() {
  document.title = 'Sales Invoice | phAMACore Cloud'
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([
    {
      docNumber: 'SD10000148',
      docDate: '2024-02-09T00:00:00',
      docAmt: '235,967.25',
      acct: 'CUS0044',
      acctRef: '-',
      bch: false,
      doneBy: 'CoreDemo',
      docID: 10000148,
      docBcode: 1,
      numberOfItems: 2,
      curr: 'KES',
      acctName: 'SOUTH WEST PHARMACY',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 0,
      },
    },
    {
      docNumber: 'SD10000147',
      docDate: '2024-02-09T00:00:00',
      docAmt: '484,035.60',
      acct: 'CUS0034',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000147,
      docBcode: 1,
      numberOfItems: 1,
      curr: 'KES',
      acctName: 'A1 PAHARMACY MERU',
      branch: 'MAIN',
      printcopy: 4,
      printtime: '2024-02-09T12:31:04.02',
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 1,
      },
    },
    {
      docNumber: 'SD10000140',
      docDate: '2024-02-07T00:00:00',
      docAmt: '4,000.00',
      acct: 'CUS0017',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000140,
      docBcode: 1,
      numberOfItems: 1,
      curr: 'KES',
      acctName: 'BUTERE',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 2,
      },
    },
    {
      docNumber: 'SD10000139',
      docDate: '2024-02-07T00:00:00',
      docAmt: '90,691.08',
      acct: 'CUS0043',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000139,
      docBcode: 1,
      numberOfItems: 2,
      curr: 'KES',
      acctName: 'DAIMA MERU W/SALE',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 3,
      },
    },
    {
      docNumber: 'SD10000138',
      docDate: '2024-02-07T00:00:00',
      docAmt: '9,375.00',
      acct: 'CUS0001',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000138,
      docBcode: 1,
      numberOfItems: 2,
      curr: 'KES',
      acctName: 'DAWA PHAM',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 4,
      },
    },
    {
      docNumber: 'SD10000137',
      docDate: '2024-02-06T00:00:00',
      docAmt: '5,315.73',
      acct: 'CUS0017',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000137,
      docBcode: 1,
      numberOfItems: 1,
      curr: 'KES',
      acctName: 'BUTERE',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 5,
      },
    },
    {
      docNumber: 'SD10000135',
      docDate: '2024-02-06T00:00:00',
      docAmt: '24,200.00',
      acct: 'CUS0034',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000135,
      docBcode: 1,
      numberOfItems: 3,
      curr: 'KES',
      acctName: 'A1 PAHARMACY MERU',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 6,
      },
    },
    {
      docNumber: 'SD10000128',
      docDate: '2024-02-01T00:00:00',
      docAmt: '196,080.00',
      acct: 'CUS0034',
      acctRef: 'isiolo',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000128,
      docBcode: 1,
      numberOfItems: 1,
      curr: 'KES',
      acctName: 'A1 PAHARMACY MERU',
      branch: 'MAIN',
      printcopy: 1,
      printtime: '2024-02-01T13:00:29.473',
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 7,
      },
    },
    {
      docNumber: 'SD10000127',
      docDate: '2024-02-01T00:00:00',
      docAmt: '70,250.00',
      acct: 'CUS0034',
      acctRef: '-',
      bch: true,
      doneBy: 'CoreDemo',
      docID: 10000127,
      docBcode: 1,
      numberOfItems: 2,
      curr: 'KES',
      acctName: 'A1 PAHARMACY MERU',
      branch: 'MAIN',
      printcopy: 0,
      printtime: null,
      schemeid: '',
      schemename: '',
      membername: '',
      unbatched: 0,
      tableData: {
        id: 8,
      },
    },
  ])
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

  const verifiedBodyTemplate = (rowData) => {
    return (
      <i
        className={`mdi ${rowData.bch ? 'text-success mdi-check-circle-outline' : 'text-danger mdi-close-circle-outline'}`}
      ></i>
    )
  }

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-end d-inline-flex">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Keyword Search"
          name=""
          id=""
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          disabled
        />
      </div>
    )
  }

  const header = renderHeader()

  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid p-0">
        <div className="flex-fill d-flex align-items-center">
          <div className="d-flex">
            <h6 className="m-0">Sales Invoice</h6>
          </div>
          <span className="flex-fill flex-grow-1"></span>
          <span>
            <FilterButton onClick={() => setIsDrawerOpened(true)} />
            <NewTransactionButton text={'New'} />
            <EditTransactionButton text={'Edit'} />
          </span>
        </div>
        <React.Fragment key={'right'}>
          <Drawer anchor={'right'} open={isDrawerOpened} PaperProps={{ style: { width: '40em' } }}>
            <div className="container-fluid p-3 h-100">
              <h6 className="fw-bold mb-0 offcanvas-title">Filter Options</h6>
              <hr className="mt-1 mb-3" />
              <form autoComplete="off">
                <div className="row mb-3">
                  <label htmlFor="date" className="col-3 col-form-label divider">
                    Date
                  </label>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <DatePicker
                          className="form-control form-control-sm"
                          selected={new Date()}
                          //
                          dropdownMode="select"
                          showMonthDropdown
                          showYearDropdown
                        />
                      </div>
                      <div className="col">
                        <DatePicker
                          className="form-control form-control-sm"
                          selected={new Date()}
                          //
                          dropdownMode="select"
                          showMonthDropdown
                          showYearDropdown
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="amount" className="col-3 col-form-label divider">
                    Amount
                  </label>
                  <div className="col">
                    <input type="text" className="form-control form-control-sm" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="reference" className="col-3 col-form-label divider">
                    Reference
                  </label>
                  <div className="col">
                    <input type="text" className="form-control form-control-sm" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="batched" className="col-3 col-form-label divider">
                    Batched
                  </label>
                  <div className="col">
                    <input type="text" className="form-control form-control-sm" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="batched" className="col-3 col-form-label divider">
                    View All
                  </label>
                  <div className="col">
                    <input type="text" className="form-control form-control-sm" />
                  </div>
                </div>
              </form>
              <hr />
              <div className="d-flex justify-content-end">
                <NewTransactionButton text={'Select'} />
                <DeleteTransactionButton text={'Close'} onClick={() => setIsDrawerOpened(false)} />
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
      <hr className="my-2" />
      <div className="card">
        <div className="card-body">
          {JSON.stringify(selectedProduct)}
          <DataTable
            value={products}
            showGridlines
            size={'small'}
            paginator
            rows={20}
            rowsPerPageOptions={[5, 10, 15, 20, 50]}
            emptyMessage="No data found."
            selectionMode="single"
            selection={selectedProduct}
            header={header}
            onSelectionChange={(e) => handleSelect(e)}
            paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          >
            <Column field="docNumber" header="DocNumber"></Column>
            <Column field="docDate" header="DocDate" body={dateBodyTemplate}></Column>
            <Column field="docAmt" header="DocAmount"></Column>
            <Column field="curr" header="Curr"></Column>
            <Column field="acct" header="Acct"></Column>
            <Column field="acctName" header="AcctName"></Column>
            <Column field="membername" header="Member"></Column>
            <Column field="acctRef" header="Ref"></Column>
            <Column field="numberOfItems" header="Items"></Column>
            <Column field="printcopy" header="PrintedCopies"></Column>
            <Column
              field="bch"
              header="Batched"
              dataType="boolean"
              body={verifiedBodyTemplate}
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
