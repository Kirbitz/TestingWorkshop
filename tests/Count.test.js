import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Count from '../client/Count.jsx'

describe('Tests for <Count />', () => {
  let count
  const callback = (updateCount) => {
    count = updateCount
  }

  beforeEach(() => {
    count = 0
  })

  it('Intial Render', () => {
    const component = render(<Count />)

    expect(component.baseElement.outerHTML).toContain('Current Count:')
  })

  it('Button clicked with only count prop provided', async () => {
    const component = render(<Count count={count} />)

    await fireEvent.click(component.getByTestId('click-me-btn'))

    expect(component.getByTestId('count-txt').outerHTML).toContain('0')
  })

  it('Button clicked with count and callback prop provided', async () => {
    const component = render(<Count count={count} callback={callback} />)

    await fireEvent.click(component.getByTestId('click-me-btn'))

    expect(count).toBe(1)
  })
})