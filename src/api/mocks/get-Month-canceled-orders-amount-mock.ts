import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

// o never informa que nunca haverá parâmetros, inutilizando o params e nem para o body da requisição. O terceiro é a tipagem do formato da resposta
export const GetMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
