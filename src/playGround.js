// let availableTill = [
//   {
//     tillID: 1,
//     tillShiftLog: 'TILL: 1 SHFT: 30 USER: PaulDev-21/02/2024 11:47:26  ',
//     tillSession: 30,
//     acct: 'BNK-001',
//   },
//   {
//     tillID: 5,
//     tillShiftLog: 'TILL: 5 SHFT: 21 USER: CoreDemo-13/06/2024 14:39:57  ',
//     tillSession: 21,
//     acct: 'BNK-001',
//   },
//   {
//     tillID: 27,
//     tillShiftLog: 'TILL: 27 SHFT: 3 USER: Cedric-18/02/2024 21:34:49  ',
//     tillSession: 3,
//     acct: 'BNK-001',
//   },
//   {
//     tillID: 28,
//     tillShiftLog: 'TILL: 28 SHFT: 1 USER: templedemo-09/04/2024 09:43:42  ',
//     tillSession: 1,
//     acct: 'BNK-001',
//   },
//   {
//     tillID: 29,
//     tillShiftLog: 'TILL: 29 SHFT: 2 USER: Test-25/04/2024 11:08:36  ',
//     tillSession: 2,
//     acct: 'BNK-001',
//   },
// ]

// const handleChange = (k: string) => (t: string) => {
//   formik.setValues({ ...formik.values, [k]: t });
// };

// <form onSubmit={formik.handleSubmit}>
//   <button type="submit">Get Values</button>
//   <EuiSuperSelect
//     id="testId"
//     fullWidth
//     onChange={(value) => {
//       console.log(value)
//       formik.handleChange('testId')(value)
//     }}
//     options={[
//       { value: 'a', inputDisplay: 'a' },
//       { value: 'b', inputDisplay: 'b' },
//       { value: 'c', inputDisplay: 'c' },
//     ]}
//     valueOfSelected={formik.values.testId}
//   />
// </form>

// let itemDetailsData = {
//   itemCode: '20007',
//   itemName: '21 CENTURY ASCO C 250MG 60S',
//   pkz: 60,
//   totalStock: '72W46P',
//   totalStockUnits: 4366,
//   totalStockRaw: '72W46P',
//   totalStockUnitsRaw: 4366,
//   trade: 80,
//   tradeUnit: 1.3333333333333333,
//   minTrade: 0,
//   minTradeUnit: 0,
//   retail: 100,
//   retailUnit: 1.6666666666666667,
//   minRetail: 0,
//   minRetailUnit: 0,
//   wSale: 100,
//   wsaleUnit: 1.6666666666666667,
//   minWhsale: 0,
//   minWhsaleUnit: 0,
//   avgCost: 0.02,
//   specialPrice: 110,
//   minPrice: 1.1,
//   hasRefill: true,
//   sbGpName: 'VITAMIN+MINERAL',
//   taX_CODE: '00',
//   taxPerc: 0,
//   percQty: 7276.666666666667,
//   lastnitcost: 1,
//   notforsale: false,
//   qtyColorCode: 'Blue',
//   taxDesc: 'VAT 0 %',
//   taxType: 'NT',
//   inclusive: false,
//   isPhysicalItem: true,
//   depT_NAME: null,
//   depT_CODE: null,
//   contsub: false,
//   inv_maxprice: 200,
//   cashdisc: 10,
//   invdisc: 15,
//   casinvdisc: 0,
// }

// let salesInvoiceData = {
//   bcode: 2147483647,
//   cusCode: 'string',
//   memberNumber: 'string',
//   schemecode: 'string',
//   savdate: 'string',
//   savpayduedate: 'string',
//   cusref: 'string',
//   cU_INVOICENUMBER: 'string',
//   cusreftwo: 'string',
//   cusContactId: 0,
//   ordernum: 'string',
//   salescode: 'string',
//   comments: 'string',
//   salesmanId: 'string',
//   exchrate: 1,
//   cusCurrencyCode: 'string',
//   smartinvoice: 1,
//   smartId: 0,
//   transpId: 0,
//   wayBill: 0,
//   doctype: 2,
//   pricingmode: 3,
//   savcuspoints: 0,
//   savcuspointsredeemed: 0,
//   savisweborder: 1,
//   itmcode: 'string',
//   itmName: 'string',
//   itmpackqty: 1,
//   itmprice: 0,
//   itmpriceinclusive: 1,
//   itmqty: 0,
//   itmpartwhole: 's',
//   itmbonus: 0,
//   itmlinedisc: 0,
//   itmtaxCode: 'string',
//   itmdeptcode: 0,
//   itmordquantity: 0,
//   itmordtype: 0,
//   itmordlinedetid: 0,
//   itmcusquotelinedetid: 0,
//   itmstknum: 0,
//   line_InStoreID: 0,
//   smartmembbal: 0,
//   clientName: 'string',
//   clientPIN: 'string',
//   userName: 'string',
//   password: 'string',
//   moduleId: 0,
//   sladeClaimId: 'string',
//   hasCopay: true,
//   copayPerc: 100,
//   copayFixedAmount: 0,
//   copayCusBenefitBalance: 0,
//   minPrice: 0,
//   isPhysicalItem: true,
//   addDiagnosis: [
//     {
//       diaG_CODE: 'string',
//     },
//   ],
//   batchList: [
//     {
//       qtyOut: 0,
//       inStkNum: 0,
//       inStkEntryNum: 0,
//       inDocDetnum: 0,
//     },
//   ],
//   bonusBatchList: [
//     {
//       qtyOut: 0,
//       inStkNum: 0,
//       inStkEntryNum: 0,
//       inDocDetnum: 0,
//     },
//   ],
// }

//   <DataTable
//     value={products}
//     paginator
//     rows={5}
//     rowsPerPageOptions={[5, 10, 25, 50]}
//     showGridlines
//     size={'small'}
//     dataKey="id"
//     globalFilterFields={['name', 'country.name', 'representative.name', 'status']}
//     emptyMessage="No customers found."
//     loading={false}
//     selectionMode="single"
//     selection={selectedProduct}
//     onSelectionChange={(e) => handleSelect(e)}
//   >
//     <Column field="code" header="Code"></Column>
//     <Column field="name" header="Name"></Column>
//     <Column field="category" header="Category"></Column>
//     <Column field="quantity" header="Quantity"></Column>
//   </DataTable>

let data = [
  {
    totalsales: 4172403.2337500006,
    theMonth: 1,
    theYear: 2024,
  },
  {
    totalsales: 3638425.8619953305,
    theMonth: 2,
    theYear: 2024,
  },
  {
    totalsales: 1980804.6694999998,
    theMonth: 3,
    theYear: 2024,
  },
  {
    totalsales: 16330236.730000004,
    theMonth: 4,
    theYear: 2024,
  },
  {
    totalsales: 1438366.3869999994,
    theMonth: 5,
    theYear: 2024,
  },
  {
    totalsales: 335941.0714999999,
    theMonth: 6,
    theYear: 2024,
  },
  {
    totalsales: 412912.45,
    theMonth: 7,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 8,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 9,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 10,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 11,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 12,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 1,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 2,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 3,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 4,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 5,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 6,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 7,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 8,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 9,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 10,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 11,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 12,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 1,
    theYear: 2024,
  },
  {
    totalsales: 49831.97,
    theMonth: 2,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 3,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 4,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 5,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 6,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 7,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 8,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 9,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 10,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 11,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 12,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 1,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 2,
    theYear: 2024,
  },
  {
    totalsales: 710400,
    theMonth: 3,
    theYear: 2024,
  },
  {
    totalsales: 166,
    theMonth: 4,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 5,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 6,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 7,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 8,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 9,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 10,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 11,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 12,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 1,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 2,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 3,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 4,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 5,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 6,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 7,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 8,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 9,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 10,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 11,
    theYear: 2024,
  },
  {
    totalsales: 0,
    theMonth: 12,
    theYear: 2024,
  },
]

const result = data.reduce((acc, { totalsales, theMonth }) => {
  if (!acc[theMonth]) {
    acc[theMonth] = { totalsales: [], theMonth, theYear: 2024 }
  }
  acc[theMonth].totalsales += `${totalsales} `
  //   acc[theMonth].sales = [...totalsales]
  return acc
}, {})

// console.log(result)
console.log(
  Object.values({
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
  }),
)
