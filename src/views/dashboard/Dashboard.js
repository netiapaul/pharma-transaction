import React, { useRef, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import Chart from 'react-apexcharts'
import DashboardAnalysisFilters from './dashboardAnalysisFilters'
import { GetSalesAnalysis } from '../../services/systemServices'
import { TelerikReportViewer } from '@progress/telerik-react-report-viewer'
import ReactApexChart from 'react-apexcharts'
import { CChartPie, CChart } from '@coreui/react-chartjs'

function salesDashboard() {
  let reportRef = useRef(null)
  const [salesBy, setSalesBy] = useState('Users')
  const [analysisData, setAnalysisData] = useState({
    salesByBranch: [],
    salesByCustomer: [],
    salesByProfitSummary: [],
    salesBySalesMan: [],
    salesByTypeProfit: [],
    salesByTypeProfitByMonth: [],
    salesByUser: [],
  })

  // const {
  //   isPending: isLoadinAnalysis,
  //   data: dashBoardAnalysis,
  //   error,
  // } = useQuery({
  //   queryKey: ['dashboardAnalysis'],
  //   queryFn: SysDefaults,
  // })

  const { isPending, mutate: HandleSubmit } = useMutation({
    mutationKey: ['dashboardAnalysis'],
    mutationFn: (data) => GetSalesAnalysis(data),
    onSuccess: (resData) => {
      setAnalysisData({
        salesByProfitSummary: resData?.data.salesByProfitSummary[0]?.table[0] || [],
        salesByBranch: resData?.data.salesByBranch[0]?.table || [],
        salesByCustomer: resData?.data.salesByCustomer[0]?.table[0]?.totalsales || [],
        salesBySalesMan: resData?.data.salesBySalesMan[0]?.table || [],
        salesByTypeProfit: resData?.data.salesByTypeProfit[0]?.table || [],
        salesByTypeProfitByMonth: resData?.data.salesByTypeProfitByMonth[0]?.table || [],
        salesByUser: resData?.data.salesByUser[0]?.table || [],
      })
    },
  })

  let isLoading = isPending

  return (
    <>
      <hr className="my-2" />
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between">
          <div className="flex-fill d-flex align-items-center">
            <div className="d-flex">
              <h6 className="m-0">Sales Dashboard</h6>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <DashboardAnalysisFilters isLoading={isLoading} HandleSubmit={HandleSubmit} />
      <div className="row">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h6 className="fw-semibold text-success mb-2">Revenue</h6>
              <h4 className="fw-medium">
                {new Intl.NumberFormat('en-US').format(
                  Number(analysisData?.salesByProfitSummary?.totalsales || 0).toFixed(2),
                )}
              </h4>
              <table className="table-borderless m-0 table text-white">
                <thead>
                  <tr>
                    <th scope="col" className="p-0">
                      Sale Type
                    </th>
                    <th scope="col" className="p-0">
                      Sales
                    </th>
                    <th scope="col" className="p-0">
                      TXC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analysisData?.salesByTypeProfit?.map((item, key) => (
                    <tr key={key}>
                      <td className="p-0">{item.saletype}</td>
                      <td className="p-0">{parseFloat(item.totalsales).toFixed(2)}</td>
                      <td className="p-0">{parseFloat(item.docscount).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h6 className="fw-semibold text-primary mb-">Profit</h6>
              <h4 className="fw-medium">
                {new Intl.NumberFormat('en-US').format(
                  Number(analysisData?.salesByProfitSummary?.totalprofit || 0).toFixed(2),
                )}
              </h4>
              <table className="table-borderless m-0 table text-white">
                <thead>
                  <tr>
                    <th scope="col" className="p-0">
                      Sale Type
                    </th>
                    <th scope="col" className="p-0">
                      Profit
                    </th>
                    <th scope="col" className="p-0">
                      %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analysisData?.salesByTypeProfit?.map((item, key) => (
                    <tr key={key}>
                      <td className="p-0">{item.saletype}</td>
                      <td className="p-0">{parseFloat(item.totalprofit).toFixed(2)}</td>
                      <td className="p-0">{parseFloat(item.percprofit).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h6 className="fw-semibold text-warning mb-">Profit %</h6>
              <h4 className="fw-medium">
                {new Intl.NumberFormat('en-US').format(
                  Number(analysisData?.salesByProfitSummary?.percprofit || 0).toFixed(2),
                )}
              </h4>
              <table className="table-borderless m-0 table text-white">
                <thead>
                  <tr>
                    <th scope="col" className="p-0">
                      Sale Type
                    </th>
                    <th scope="col" className="p-0">
                      % of Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analysisData?.salesByTypeProfit?.map((item, key) => (
                    <tr key={key}>
                      <td className="p-0">{item.saletype}</td>
                      <td className="p-0">{parseFloat(item.percofprofit).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h6 className="fw-semibold text-danger mb-">Sales</h6>
              <h4 className="fw-medium">
                {new Intl.NumberFormat('en-US').format(
                  Number(analysisData?.salesByProfitSummary?.avgsale || 0).toFixed(2),
                )}
              </h4>
              <table className="table-borderless m-0 table text-white">
                <thead>
                  <tr>
                    <th scope="col" className="p-0">
                      Sale Type
                    </th>
                    <th scope="col" className="p-0">
                      AVG Sales
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analysisData?.salesByTypeProfit?.map((item, key) => (
                    <tr key={key}>
                      <td className="p-0">{item.saletype}</td>
                      <td className="p-0">{parseFloat(item.avgsale).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <div className="card dashboard-card h-100 shadow-sm">
            <div className="card-header fw-bold mb-0">Sales by Branches</div>
            <div className="card-body">
              <Chart
                options={{
                  series: [
                    {
                      data: [
                        ...analysisData?.salesByBranch?.map((item) => parseInt(item.totalsales)),
                      ],
                    },
                  ],
                  chart: {
                    type: 'bar',
                    height: 350,
                  },
                  tooltip: {
                    y: {
                      formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      },
                    },
                  },
                  plotOptions: {
                    bar: {
                      horizontal: true,
                      dataLabels: {
                        position: 'top',
                      },
                      reversed: true,
                    },
                    dataLabels: {
                      enabled: true,
                      style: {
                        colors: ['#fff'],
                      },
                      offsetX: 30,
                    },
                  },
                  dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                      colors: ['#47404f'],
                      fontSize: '12px',
                    },
                    formatter: function (val, opt) {
                      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    },
                    offsetX: 30,
                  },
                  xaxis: {
                    categories: [...analysisData?.salesByBranch?.map((item) => item.salesbranch)],
                  },
                }}
                series={[
                  {
                    name: 'Total Sales',
                    data: [
                      ...analysisData?.salesByBranch?.map((item) => parseInt(item.totalsales)),
                    ],
                  },
                ]}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card dashboard-card h-100 shadow-sm">
            <div className="card-header d-flex justify-content-between">
              <div className="d-flex justify-content-between gap-3">
                <span className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="clientType"
                    id="desktop"
                    value={salesBy}
                    checked={salesBy === 'Users'}
                    onChange={() => setSalesBy('Users')}
                  />
                  <label className="form-check-label fw-bold" htmlFor="desktop">
                    Sales by Sales Users
                  </label>
                </span>
                <span className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="clientType"
                    id="desktop"
                    value={salesBy}
                    checked={salesBy === 'Sales Persons'}
                    onChange={() => setSalesBy('Sales Persons')}
                  />
                  <label className="form-check-label fw-bold" htmlFor="desktop">
                    Sales by Sales Persons
                  </label>
                </span>
              </div>
              <div></div>
            </div>

            <div className="card-body">
              {salesBy === 'Sales Persons' && (
                <CChartPie
                  data={{
                    labels: [...analysisData?.salesBySalesMan?.map((item) => item.salesman)],
                    datasets: [
                      {
                        data: [
                          ...analysisData?.salesBySalesMan?.map((item) =>
                            parseInt(item.totalsales),
                          ),
                        ],
                      },
                    ],
                  }}
                  height={350}
                />
              )}
              {salesBy === 'Users' && (
                <CChartPie
                  data={{
                    labels: [...analysisData?.salesByUser?.map((item) => item.docuser)],
                    datasets: [
                      {
                        data: [
                          ...analysisData?.salesByUser?.map((item) => parseInt(item.totalsales)),
                        ],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)',
                          'rgb(75, 192, 192)',
                          'rgb(255, 206, 86)',
                          'rgb(54, 162, 235)',
                        ],
                      },
                    ],
                  }}
                  height={350}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <div className="card dashboard-card h-100 shadow-sm">
            <div className="card-header fw-bold mb-0">Sales by Customer</div>
            <div
              className="card-body"
              style={{
                height: '400px',
              }}
            >
              {/* <TelerikReportViewer
                ref={reportRef}
                serviceUrl={`http://www.phamacoretraining.co.ke:81/api/reports`}
                reportSource={{
                  report: 'SalesByCustomerTop10.trdp',
                  parameters: {},
                }}
                viewerContainerStyle={{
                  position: 'absolute',
                  left: '10px',
                  right: '10px',
                  // width: '100%',
                  top: '40px',
                  bottom: '10px',
                  overflow: 'hidden',
                  clear: 'both',
                  fontFamily: 'ms sans serif',
                }}
                viewMode="INTERACTIVE"
                // viewMode="PRINT_PREVIEW"
                // scaleMode="FIT_PAGE_WIDTH"
                scaleMode="FIT_PAGE"
                // scaleMode="SPECIFIC"
                scale={1.0}
                enableAccessibility={true}
              /> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card dashboard-card h-100 shadow-sm">
            <div className="card-header fw-bold mb-0">Monthly Sales</div>
            <div className="card-body">
              <CChart
                type="bar"
                data={{
                  labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dev',
                  ],
                  datasets: [
                    {
                      label: 'Profit by Months',
                      backgroundColor: '#36a2eb',
                      data: [
                        ...analysisData?.salesByTypeProfitByMonth?.map((item) =>
                          parseInt(item.totalsales),
                        ),
                      ],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default salesDashboard
