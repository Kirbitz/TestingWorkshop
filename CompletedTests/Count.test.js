import Count from '../client/Count.jsx'

import React from 'react'
import { render, fireEvent } from '@testing-library/react'

describe.skip('Tests for <Count />', () => {
  let count
  let incrementCount = (updateCount) => {
    count = updateCount
  }
  
  beforeEach(() => {
    count = 0
  })

  it('Initial render', () => {
    const component = render(<Count count={count} />)

    expect(component.getByTestId('count-txt').outerHTML).toContain(String(count))
  })

  it('No callback function provided', async () => {
    const component = render(<Count count={count} />)

    await fireEvent.click(component.getByTestId('click-me-btn'))

    expect(component.getByTestId('count-txt').outerHTML).toContain('0')
  })

  it('Count updated', async () => {
    const component = render(<Count count={count} callback={incrementCount} />)

    await fireEvent.click(component.getByTestId('click-me-btn'))

    expect(component.getByTestId('count-txt').outerHTML).toContain('1')
  })
})