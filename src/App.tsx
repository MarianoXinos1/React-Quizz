//import { useState } from 'react'
import './App.css';
import { Container, Stack } from '@mui/material';
import { ReactLogo } from './ReactLogo';
import { Start } from './Start';
import { useQuestionStore } from './store/questions';
import {Game} from './Game'

function App() {
const questions = useQuestionStore(state => state.questions)
console.log(questions);

//maxWidth = propiedad de mui.
  return (
    <>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <ReactLogo/>
          <h1 className="react-title">
            React Quizz
          </h1>
        </Stack>

        
        {questions.length === 0 && <Start/>}
        {questions.length > 0 && <Game/>}

      </Container>
    </>
  )
}

export default App
