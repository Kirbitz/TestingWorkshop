import EntryPoint from '../client/EntryPoint.jsx'
import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'
import BrowserRouter from 'react-router-dom'
import { act } from 'react-test-renderer'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe.skip('Tests for <EntryPoint />', () => {
  window.alert = jest.fn()
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
    jest.spyOn(console, 'error').mockImplementation(() => {})
    window.alert.mockClear()
  })

  afterEach(() => {
    mock.reset()
    mock.restore()
    mock.resetHandlers()
  })

  it('Initial Render', () => {
    const component = render(<EntryPoint />, { wrapper: BrowserRouter })

    expect(document.body).toBe(component.baseElement)
  })

  it('Update Count', async () => {
    const component = render(<EntryPoint />, { wrapper: BrowserRouter })

    await fireEvent.click(component.getByTestId('click-me-btn'))

    expect(component.getByTestId('count-txt').outerHTML).toContain('1')
  })

  it('Information collected from /update', async () => {
    mock.onGet('/update').reply(200, { change: 'I am a mock!' })
    await act(async () => { render(<EntryPoint />, { wrapper: BrowserRouter }) })

    expect(screen.getByTestId('MuiContainer').outerHTML).toContain('I am a mock!')
  })

  it('Information failed to collect from /update', async () => {
    mock.onGet('/update').networkError()
    await act(async () => { render(<EntryPoint />, { wrapper: BrowserRouter }) })

    expect(screen.getByTestId('MuiContainer').outerHTML).not.toContain('I am a mock!')
    expect(mock.history.get.length).toBe(1)
  })
})