//import { useState } from 'react'
import './App.css'
import { Container, Stack } from '@mui/material'
import { ReactLogo } from './ReactLogo'

function App() {


  return (
    <>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <ReactLogo/>
          <h1>React Quizz</h1>
        </Stack>
      </Container>
    </>
  )
}

export default App
