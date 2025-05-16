import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-10', exact: true }),
  ).toBeVisible()
})

test('pagination test', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima Página' }).click()

  expect(
    page.getByRole('cell', { name: 'order-11', exact: true }),
  ).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'order-20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  await expect(
    page.getByRole('cell', { name: 'order-51', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-60', exact: true }),
  ).toBeVisible()

  await page.waitForTimeout(1000)

  await page.getByRole('button', { name: 'Página anterior' }).click()

  await expect(
    page.getByRole('cell', { name: 'order-41', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-10', exact: true }),
  ).toBeVisible()

  await page.waitForTimeout(1000)
})

// test('filter by order id', async ({ page }) => {
//   await page.goto('/orders', { waitUntil: 'networkidle' })

//   await page.getByRole('textbox', { name: 'ID do pedido' }).fill('order-11')
//   await page.getByRole('button', { name: 'Filtrar Resultados' }).click()

//  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()

//   await page.waitForTimeout(1000)
// })

// test('filter by customer name', async ({ page }) => {
//   await page.goto('/orders', { waitUntil: 'networkidle' })

//   await page
//     .getByRole('textbox', { name: 'Nome do cliente' })
//     .fill('Customer 11')
//   await page.getByRole('button', { name: 'Filtrar Resultados' }).click()

//   await expect(page.getByRole('cell', { name: 'Customer-11' })).toBeVisible()

// })

// test('filter by status', async ({ page }) => {
//   await page.goto('/orders', { waitUntil: 'networkidle' })

//   await page.getByRole('combobox').click()
//   await page.waitForTimeout(1000)

//   await page.getByLabel('Pendente').click()
//   await page.waitForTimeout(1000)

//   await page.getByRole('button', { name: 'Filtrar Resultados' }).click()

//   // retorna todas as células que estão pendentes no dashboard
//   const tableRows = await page.getByRole('cell', { name: 'Pendente' }).all()

//   // sabe-se que no mock foram incluídos 10 pedidos pendentes, logo, basta testar com esta quantidade
//   expect(tableRows).toHaveLength(10)

//   await page.waitForTimeout(1000)
// })
