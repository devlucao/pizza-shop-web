import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <title>pizza-shop | Dashboard</title>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid-col-9 grid gap-4">
          <RevenueChart />
        </div>
        <PopularProductsChart />
      </div>
    </>
  )
}
