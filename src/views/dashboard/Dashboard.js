import React, { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Chart from 'react-apexcharts'
import DashboardAnalysisFilters from './dashboardAnalysisFilters'
import { GetSalesAnalysis } from '../../services/systemServices'
import { TelerikReportViewer } from '@progress/telerik-react-report-viewer'
import ReactApexChart from 'react-apexcharts'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

let data = {
  1: {
    totalsales: '4172403.2337500006 0 0 0 0 ',
    theMonth: 1,
    theYear: 2024,
  },
  2: {
    totalsales: '3638425.8619953305 0 49831.97 0 0 ',
    theMonth: 2,
    theYear: 2024,
  },
  3: {
    totalsales: '1980804.6694999998 0 0 710400 0 ',
    theMonth: 3,
    theYear: 2024,
  },
  4: {
    totalsales: '16330236.730000004 0 0 166 0 ',
    theMonth: 4,
    theYear: 2024,
  },
  5: {
    totalsales: '1438366.3869999994 0 0 0 0 ',
    theMonth: 5,
    theYear: 2024,
  },
  6: {
    totalsales: '335941.0714999999 0 0 0 0 ',
    theMonth: 6,
    theYear: 2024,
  },
  7: { totalsales: '412912.45 0 0 0 0 ', theMonth: 7, theYear: 2024 },
  8: { totalsales: '0 0 0 0 0 ', theMonth: 8, theYear: 2024 },
  9: { totalsales: '0 0 0 0 0 ', theMonth: 9, theYear: 2024 },
  10: { totalsales: '0 0 0 0 0 ', theMonth: 10, theYear: 2024 },
  11: { totalsales: '0 0 0 0 0 ', theMonth: 11, theYear: 2024 },
  12: { totalsales: '0 0 0 0 0 ', theMonth: 12, theYear: 2024 },
}

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

  function combineMonthlyData(arra) {
    const monthMap = {}

    arra.forEach((month) => {
      const { name, data } = month
      if (monthMap[name]) {
        monthMap[name].data.push(...data)
      } else {
        monthMap[name] = { name, data: [...data] }
      }
    })
    return Object.values(monthMap)
  }

  const { isPending, mutate: HandleSubmit } = useMutation({
    mutationKey: ['dashboardAnalysis'],
    mutationFn: (data) => GetSalesAnalysis(data),
    onSuccess: (resData) => {
      let profitMonths = []
      data?.forEach((item) => {
        let obj = { name: '', data: [] }
        switch (item.theMonth) {
          case 1:
            obj.name = 'Jan'
            obj.data.push(item?.totalsales)
            break
          case 2:
            obj.name = 'Feb'
            obj.data.push(item?.totalsales)
            break
          case 3:
            obj.name = 'Mar'
            obj.data.push(item?.totalsales)
            break
          case 4:
            obj.name = 'Apr'
            obj.data.push(item?.totalsales)
            break
          case 5:
            obj.name = 'May'
            obj.data.push(item?.totalsales)
            break
          case 6:
            obj.name = 'June'
            obj.data.push(item?.totalsales)
            break
          case 7:
            obj.name = 'July'
            obj.data.push(item?.totalsales)
            break
          case 8:
            obj.name = 'Aug'
            obj.data.push(item?.totalsales)
            break
          case 9:
            obj.name = 'Sep'
            obj.data.push(item?.totalsales)
            break
          case 10:
            obj.name = 'Oct'
            obj.data.push(item?.totalsales)
            break
          case 11:
            obj.name = 'Nov'
            obj.data.push(item?.totalsales)
            break
          case 12:
            obj.name = 'Dec'
            obj.data.push(item?.totalsales)
            break
          default:
            break
        }
        return profitMonths.push(obj)
      }),
        console.log(combineMonthlyData(profitMonths))
      console.log('qwe', resData?.data.salesByProfitSummary[0]?.table[0])
      setAnalysisData({
        salesByProfitSummary: resData?.data.salesByProfitSummary[0]?.table[0],
        salesByBranch: resData?.data.salesByBranch[0]?.table,
        salesByCustomer: resData?.data.salesByCustomer[0]?.table[0]?.totalsales,
        salesBySalesMan: resData?.data.salesBySalesMan[0]?.table,
        salesByTypeProfit: resData?.data.salesByTypeProfit[0]?.table,
        // salesByTypeProfitByMonth: combineMonthlyData(profitMonths),
        salesByTypeProfitByMonth: {},
        salesByUser: resData?.data.salesByUser[0]?.table,
      })
    },
  })

  // React.useEffect(() => {
  //   // Example usage of jQuery
  //   $('body').css('background-color', 'lightblue')
  // }, [])

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
      <DashboardAnalysisFilters isPending={isPending} HandleSubmit={HandleSubmit} />
      <div className="row">
        <div className="col">
          <div className="card h-100">
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
          <div className="card h-100">
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
          <div className="card h-100">
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
          <div className="card h-100">
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
          <div className="card dashboard-card h-100">
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
                // {new Intl.NumberFormat('en-US').format(
                //   Number(
                //     analysisData?.salesByProfitSummary?.totalsales || 0,
                //   ).toFixed(2),
                // )
                // parseInt(item.totalsales),
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card dashboard-card h-100">
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
                <Chart
                  options={{
                    labels: analysisData?.salesBySalesMan?.map((item) => item.salesman),
                    dataLabels: {
                      formatter: function (val, opts) {
                        return opts.w.config.series[opts.seriesIndex]
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      },
                    },
                    tooltip: {
                      y: {
                        formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        },
                      },
                    },
                    responsive: [
                      {
                        options: {
                          legend: {
                            position: 'bottom',
                          },
                        },
                      },
                    ],
                    legend: {
                      horizontalAlign: 'right',
                    },
                  }}
                  series={[
                    ...analysisData?.salesBySalesMan?.map((item) => parseInt(item.totalsales)),
                  ]}
                  type="pie"
                  height={350}
                />
              )}
              {salesBy === 'Users' && (
                <Chart
                  options={{
                    labels: analysisData?.salesByUser?.map((item) => item.docuser),
                    dataLabels: {
                      formatter: function (val, opts) {
                        return opts.w.config.series[opts.seriesIndex]
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      },
                    },
                    tooltip: {
                      y: {
                        formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        },
                      },
                    },
                    responsive: [
                      {
                        options: {
                          legend: {
                            position: 'bottom',
                          },
                        },
                      },
                    ],
                    legend: {
                      horizontalAlign: 'right',
                    },
                  }}
                  series={[...analysisData?.salesByUser?.map((item) => parseInt(item.totalsales))]}
                  type="pie"
                  height={350}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <div className="card dashboard-card">
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
          <div className="card dashboard-card h-100">
            <div className="card-header fw-bold mb-0">Monthly Sales</div>
            <div className="card-body">
              <Bar
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
                    'Dec',
                  ],
                  datasets: Object.values(data).map((item) => {
                    return {
                      label: 'Dataset 1',
                      data: item.totalsales.trim().split(' '),
                      backgroundColor: 'rgb(255, 99, 132)',
                      stack: 'Stack 0',
                    }
                  }),
                  // datasets: [
                  //   {
                  //     label: 'Dataset 1',
                  //     data: Array.from({ length: 12 }, (_, i) => Math.random() * 100000000),
                  //     backgroundColor: 'rgb(255, 99, 132)',
                  //     stack: 'Stack 0',
                  //   },
                  //   {
                  //     label: 'Dataset 2',
                  //     data: Array.from({ length: 12 }, (_, i) => Math.random() * 100000000),
                  //     backgroundColor: 'rgb(75, 192, 192)',
                  //     stack: 'Stack 1',
                  //   },
                  //   {
                  //     label: 'Dataset 3',
                  //     data: Array.from({ length: 12 }, (_, i) => Math.random() * 100000000),
                  //     backgroundColor: 'rgb(53, 162, 235)',
                  //     stack: 'Stack 2',
                  //   },
                  // ],
                }}
              />
              {/* <ReactApexChart
                options={{
                  chart: {
                    type: 'bar',
                    height: 350,
                  },
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '55%',
                      endingShape: 'rounded',
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent'],
                  },
                  xaxis: {
                    categories: [
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
                      'Dec',
                    ],
                    // categories: analysisData?.salesByTypeProfitByMonth?.map((month) => month?.name),
                  },
                  yaxis: {
                    title: {
                      text: 'Monthly Sales',
                    },
                    y: {
                      formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      },
                    },
                  },
                  fill: {
                    opacity: 1,
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        // return '$' + val + ' thousands';
                        return val
                      },
                    },
                  },
                }}
                series={analysisData?.salesByTypeProfitByMonth?.map((month, i) => {
                  return {
                    // name: `Branch ${i + 1}`,
                    data: month.data,
                  }
                })}
                type="bar"
                height={350}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default salesDashboard
