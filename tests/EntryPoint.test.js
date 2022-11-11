import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-test-renderer'

import EntryPoint from '../client/EntryPoint.jsx'

import BrowserRouter from 'react-router-dom'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Tests for <EntryPoint />', () => {
  window.alert = jest.fn()
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    mock.reset()
    mock.restore()
    mock.resetHandlers()
  })

  it('Initial Render', () => {
    const component = render(<EntryPoint />, { wrapper: BrowserRouter })

    expect(component.baseElement.outerHTML).toContain('Welcome to the best workshop ever!')
  })

  it('Click on update count button', async () => {
    const component = render(<EntryPoint />, { wrapper: BrowserRouter })

    await fireEvent.click(component.getByTestId('click-me-btn'))

    expect(component.getByTestId('count-txt').outerHTML).toContain('1')
  })

  it('Call data from /update', async () => {
    mock.onGet('/update').reply(200, { change: 'I am a mock' })
    await act( async () => { render(<EntryPoint />, { wrapper: BrowserRouter }) })

    expect(screen.getByTestId('MuiContainer').outerHTML).toContain('I am a mock')
  })
})