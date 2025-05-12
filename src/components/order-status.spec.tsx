import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  // isso deve mostrar o texto correto baseado no status do pedido
  /* Pending */
  it('should display the right text based on order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    // a função debug mostra no terminal o HTML gerado para esta renderização
    wrapper.debug()

    // caso queira validar com um console.log, pode-se passar statusText.outerHTML para verificar a tag do documento.
    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    // console.log(badgeElement.outerHTML)
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })
})

describe('Order Status', () => {
  it('should display the right text based on order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })
})

describe('Order Status', () => {
  it('should display the right text based on order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})

describe('Order Status', () => {
  it('should display the right text based on order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})

describe('Order Status', () => {
  it('should display the right text based on order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
