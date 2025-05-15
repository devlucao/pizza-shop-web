import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

// o never informa que nunca haverá parâmetros, inutilizando o params e nem para o body da requisição. O terceiro é a tipagem do formato da resposta
export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 20000,
    },
    {
      date: '02/01/2024',
      receipt: 2000,
    },
    {
      date: '03/01/2024',
      receipt: 10000,
    },
    {
      date: '04/01/2024',
      receipt: 24000,
    },
    {
      date: '05/01/2024',
      receipt: 33000,
    },
    {
      date: '06/01/2024',
      receipt: 100,
    },
    {
      date: '07/01/2024',
      receipt: 2020,
    },
  ])
})
