import React, { useState } from 'react'
import DashboardAnalysisFilters from './dashboardAnalysisFilters'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

function StockAnalysis() {
  const [profitPicture, setProfitPicture] = useState([
    {
      mysaletime: '00',
      mysalescount: 9,
      mysalescountperc: 1.2968299711815563,
      mysalestotal: 62246.79000000001,
      mysalestotalperc: 0.11409138969869966,
      myprofit: 54377.06216654823,
      myprofitperc: 87.35721499301124,
      myprofitcontrib: 0.11126364651957796,
      myavgsales: 6916.310000000001,
    },
    {
      mysaletime: '00',
      mysalescount: 9,
      mysalescountperc: 1.2968299711815563,
      mysalestotal: 62246.79000000001,
      mysalestotalperc: 0.11409138969869966,
      myprofit: 54377.06216654823,
      myprofitperc: 87.35721499301124,
      myprofitcontrib: 0.11126364651957796,
      myavgsales: 6916.310000000001,
    },
    {
      mysaletime: '00',
      mysalescount: 9,
      mysalescountperc: 1.2968299711815563,
      mysalestotal: 62246.79000000001,
      mysalestotalperc: 0.11409138969869966,
      myprofit: 54377.06216654823,
      myprofitperc: 87.35721499301124,
      myprofitcontrib: 0.11126364651957796,
      myavgsales: 6916.310000000001,
    },
    {
      mysaletime: '00',
      mysalescount: 9,
      mysalescountperc: 1.2968299711815563,
      mysalestotal: 62246.79000000001,
      mysalestotalperc: 0.11409138969869966,
      myprofit: 54377.06216654823,
      myprofitperc: 87.35721499301124,
      myprofitcontrib: 0.11126364651957796,
      myavgsales: 6916.310000000001,
    },
    {
      mysaletime: '00',
      mysalescount: 9,
      mysalescountperc: 1.2968299711815563,
      mysalestotal: 62246.79000000001,
      mysalestotalperc: 0.11409138969869966,
      myprofit: 54377.06216654823,
      myprofitperc: 87.35721499301124,
      myprofitcontrib: 0.11126364651957796,
      myavgsales: 6916.310000000001,
    },
  ])

  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid p-0">
        <div className="flex-fill d-flex align-items-center">
          <div className="d-flex">
            <h6 className="m-0">Stock Analysis</h6>
          </div>
          <span className="flex-fill flex-grow-1"></span>
          <span></span>
        </div>
      </div>
      <hr className="my-2" />
      <DashboardAnalysisFilters isPending={true} HandleSubmit={() => console.log('greatness')} />
      <div className="card">
        <div className="card-body">
          <DataTable
            value={profitPicture}
            showGridlines
            size={'small'}
            paginator
            rows={20}
            rowsPerPageOptions={[5, 10, 15, 20, 50]}
            emptyMessage="No data found."
            paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          >
            <Column field="mysaletime" header="Sale Time"></Column>
            <Column field="mysalescount" header="Sales Count"></Column>
            <Column field="mysalestotal" header="Total Sales"></Column>
            <Column field="mysalestotalperc" header="%Total Sales"></Column>
            <Column field="myprofit" header="Profit"></Column>
            <Column field="myprofitperc" header="%Profit"></Column>
            <Column field="myprofitcontrib" header="Profit Contrib"></Column>
            <Column field="myavgsales" header="Avg Sales"></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default StockAnalysis
