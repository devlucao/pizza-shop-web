import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const GetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    name: 'John Doe',
    description: 'Custom restaurante description',
    createdAt: new Date(),
    updatedAt: null,
  })
})
