import { setupWorker } from 'msw/browser'

import { approveOrderMock } from '@/api/mocks/approve-order-mock'
import { cancelOrderMock } from '@/api/mocks/canceled-order-mock'
import { deliverOrderMock } from '@/api/mocks/deliver-order-mock'
import { dispatchOrderMock } from '@/api/mocks/dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from '@/api/mocks/get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount'
import { GetManagedRestaurantMock } from '@/api/mocks/get-managed-restaurant-mock'
import { GetMonthCanceledOrdersAmountMock } from '@/api/mocks/get-Month-canceled-orders-amount-mock'
import { GetMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amount-mock'
import { GetMonthRevenueMock } from '@/api/mocks/get-month-revenue'
import { GetOrderDetailsMock } from '@/api/mocks/get-order-details-mock'
import { getOrdersMock } from '@/api/mocks/get-orders-mock'
import { GetPopularProductsMock } from '@/api/mocks/get-popular-products-mock'
import { GetProfileMock } from '@/api/mocks/get-profile-mock'
import { registerRestaurantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in'
import { UpdateProfileMock } from '@/api/mocks/upate-profile-mock'
import { env } from '@/env'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  GetMonthCanceledOrdersAmountMock,
  GetMonthOrdersAmountMock,
  GetMonthRevenueMock,
  GetPopularProductsMock,
  getDailyRevenueInPeriodMock,
  GetProfileMock,
  GetManagedRestaurantMock,
  UpdateProfileMock,
  getOrdersMock,
  GetOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
