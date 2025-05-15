import { http, HttpResponse } from 'msw'

import { registerRestaurantBody } from '../register-restaurant'

// o never informa que nunca haverá parâmetros, inutilizando o params da requisição
export const registerRestaurantMock = http.post<never, registerRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    // armazena na constante o e-mail passado na requisição
    const { restaurantName } = await request.json()

    // valida se o nome do restaurante passado na requisição é igual ao do teste e retorna uma resposta com status de sucesso, setando o auth nos cookies como sample-jwt ou erro caso seja diferente
    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
        headers: { 'Set-Cookie': 'auth-sample-jwt' },
      })
    }
    return new HttpResponse(null, { status: 400 })
  },
)
