import React from 'react'

import { Container, CssBaseline } from '@mui/material'

// The entry point of the entire react app
// Exists to give a location for managing state effectively without overfilling app.jsx
export default function EntryPoint (props) {
  return (
    <Container maxWidth="lg" data-testid="MuiContainer">
      <CssBaseline />
      <h1>Hello World!</h1>
    </Container>
  )
}
