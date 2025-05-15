import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

// o never informa que nunca haverá parâmetros, inutilizando o params e nem para o body da requisição. O terceiro é a tipagem do formato da resposta
export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      product: 'Pizza 1',
      amount: 2,
    },
    {
      product: 'Pizza 2',
      amount: 3,
    },
    {
      product: 'Pizza 3',
      amount: 5,
    },
    {
      product: 'Pizza 4',
      amount: 26,
    },
    {
      product: 'Pizza 5',
      amount: 1,
    },
  ])
})
