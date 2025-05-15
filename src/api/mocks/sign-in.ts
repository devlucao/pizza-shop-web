import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'

// o never informa que nunca haverá parâmetros, inutilizando o params da requisição
export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    // armazena na constante o e-mail passado na requisição
    const { email } = await request.json()

    // valida se o e-mail passado na requisição é igual ao do teste e retorna uma resposta com status de sucesso, setando o auth nos cookies como sample-jwt
    if (email === 'johndoe@example.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: { 'Set-Cookie': 'auth-sample-jwt' },
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
