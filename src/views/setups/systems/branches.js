import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { Branches } from '../../../services/system_Services'

function branches() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ['branches'],
    queryFn: () => Branches(),
  })

  const handleSelect = (e) => {
    setSelectedProduct(e.value)
    console.log(e)
  }

  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between">
          <div className="flex-fill d-flex align-items-center">
            <div className="d-flex">
              <h6 className="m-0">Branch Setups</h6>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="card">
        <div className="card-body">
          <DataTable
            value={data}
            showGridlines
            size={'small'}
            paginator={data?.length > 20}
            rows={20}
            rowsPerPageOptions={[5, 10, 15, 20, 50]}
            emptyMessage="No data found."
            selectionMode="single"
            selection={selectedProduct}
            // header={header}
            onSelectionChange={(e) => handleSelect(e)}
            paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          >
            <Column field="branchcode" header="BranchCode" style={{ width: '5rem' }}></Column>
            <Column field="brancH_NAME" header="BranchName"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phoneNumber" header="Contact"></Column>
            <Column
              field="enabled"
              header="Status"
              dataType="boolean"
              body={(rowData) => (
                <span
                  className={
                    rowData.enabled
                      ? 'badge rounded-pill text-bg-success'
                      : 'badge rounded-pill text-bg-danger'
                  }
                >
                  {rowData.enabled ? 'Active' : 'Inactive'}
                </span>
              )}
              style={{ width: '5rem', textAlign: 'center' }}
            ></Column>
            <Column field="bodExpiryDays" header="BODExpDays" style={{ width: '3rem' }}></Column>
            <Column
              field="bodExpires"
              header="BODExpires"
              style={{ width: '3rem', textAlign: 'center' }}
              body={(rowData) => (
                <input
                  type="checkbox"
                  id="mainbranch"
                  name="mainbranch"
                  className="form-check-input"
                  checked={rowData.bodExpires}
                  disabled
                  readOnly
                />
              )}
            ></Column>
            <Column
              field="mainbranch"
              header="MainBranch"
              dataType="boolean"
              body={(rowData) => (
                <input
                  type="checkbox"
                  id="mainbranch"
                  name="mainbranch"
                  className="form-check-input"
                  checked={rowData.mainbranch}
                  disabled
                  readOnly
                />
              )}
              style={{ width: '3rem', textAlign: 'center' }}
            ></Column>
            <Column
              field="smartlink"
              header="Smart"
              dataType="boolean"
              style={{ width: '3rem', textAlign: 'center' }}
              body={(rowData) => (
                <input
                  type="checkbox"
                  id="smartlink"
                  name="smartlink"
                  className="form-check-input"
                  checked={rowData.smartlink}
                  disabled
                  readOnly
                />
              )}
              //   body={(rowData) => (
              //     <i
              //       className={`mdi ${rowData.smartlink ? 'text-success mdi-check-circle-outline' : 'text-danger mdi-close-circle-outline'}`}
              //     ></i>
              //   )}
            ></Column>
            <Column
              field="slade"
              header="Slade"
              dataType="boolean"
              body={(rowData) => (
                <input
                  type="checkbox"
                  id="slade"
                  name="slade"
                  className="form-check-input"
                  checked={rowData.slade}
                  disabled
                  readOnly
                />
              )}
              style={{ width: '3rem', textAlign: 'center' }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default branches
