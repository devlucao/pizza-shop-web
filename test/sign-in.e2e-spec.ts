import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  // networkidle faz com que o playwright aguarde todas as requisições do JS serem realizadas para que assim dê o teste como finalizado
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail',
  )

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  // networkidle faz com que o playwright aguarde todas as requisições do JS serem realizadas para que assim dê o teste como finalizado
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('wrong@example.com')

  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to register restaurant', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo Estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
