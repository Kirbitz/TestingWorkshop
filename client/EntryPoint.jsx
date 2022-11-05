import React, { useEffect } from 'react'

import { Box, Container, CssBaseline, Typography } from '@mui/material'

import { BrowserRouter } from 'react-router-dom'

import { getUpdateText } from './dataHelper.js'
import Count from './Count.jsx'

// The entry point of the entire react app
// Exists to give a location for managing state effectively without overfilling app.jsx
export default function EntryPoint (props) {
  const [count, setCount] = React.useState(0)
  const [callText, setCallText] = React.useState('')

  const updateText = () => {
    getUpdateText()
      .then((response) => {
        setCallText(response.data.change)
      })
      .catch((error) => {
        alert('Error!')
        console.error(error)
      })
  }

  useEffect(() => {
    updateText()
  }, [])

  const updateCount = (countData) => {
    setCount(countData)
  }

  return (
    <BrowserRouter>
      <Container maxWidth="lg" data-testid="MuiContainer">
        <CssBaseline />
        <Box justifyContent='center' display='flex'>
          <img src="./Logo.png" height='300px' width='auto' className="App-logo" alt="logo" />
        </Box>
        <Typography variant='h1' component='h1' align='center'>
          Welcome to the best workshop ever!
        </Typography>
        <Typography align='center' variant='span' component='div' sx={{ mt: 3 }}>
          {callText}
        </Typography>
        <Count count={count} callback={updateCount} />
      </Container>
    </BrowserRouter>
  )
}
