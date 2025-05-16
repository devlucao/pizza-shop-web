import { expect, test } from '@playwright/test'

test('Update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'John Doe' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByRole('textbox', { name: 'Nome' }).fill('Rocket Pizza')
  await page
    .getByRole('textbox', { name: 'Descrição' })
    .fill('Another Description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  // waitForLoadState('networkidle') aguarda a finalização de toda e qualquer requisição HTTP
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
})
