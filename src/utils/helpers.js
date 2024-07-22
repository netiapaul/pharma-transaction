import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears,
} from 'date-fns'

const ranges = [
  'Today',
  'Yesterday',
  'This Week',
  'Last Week',
  'This Month',
  'Last Month',
  'Month To Date',
  'This Year',
  // 'Month To Year',
  'Last Year',
  'Year To Date',
  'Custom Range',
]

const dateDefineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfLastYear: startOfYear(addYears(new Date(), -1)),
  endOfLastYear: endOfYear(addYears(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOfNextYear: startOfYear(addYears(new Date(), +1)),
  endOfNextYear: endOfYear(addYears(new Date(), +1)),
}

export { ranges, dateDefineds }
