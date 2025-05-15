import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const GetProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '1231232',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
