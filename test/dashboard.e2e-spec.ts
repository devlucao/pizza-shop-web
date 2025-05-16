import { expect, test } from '@playwright/test'

test('Display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20')).toBeVisible()
  expect(page.getByText('-13% em relação ao mês passado')).toBeVisible()
})

test('Display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('Display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(page.getByText('-13% em relação ao mês passado')).toBeVisible()
})

test('Display total month receipt metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 20.000,00')).toBeVisible()
  expect(page.getByText('+10% em relação ao mês passado').first()).toBeVisible()
})
