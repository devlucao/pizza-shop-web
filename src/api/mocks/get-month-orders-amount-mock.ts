import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-month-orders.amount'

// o never informa que nunca haverá parâmetros, inutilizando o params e nem para o body da requisição. O terceiro é a tipagem do formato da resposta
export const GetMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  })
})
