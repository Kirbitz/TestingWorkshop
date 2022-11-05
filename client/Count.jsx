import React from 'react'

import { Button, Typography } from '@mui/material'

// The entry point of the entire react app
// Exists to give a location for managing state effectively without overfilling app.jsx
export default function Count (props) {
  const { count, callback } = props

  const incrementCount = () => {
    callback(count + 1)
  }

  return (
    <React.Fragment>
      <Typography data-testid='count-txt' align='center' variant='span' component='div' sx={{ mt: 3 }}>
        Current Count: { count }
      </Typography>
      <Button data-testid="click-me-btn" onClick={incrementCount} variant='outlined' color='success' sx={{ mx: 'auto', display: 'flex', mb: 3 }}>
        Click Me!
      </Button>
    </React.Fragment>
  )
}
