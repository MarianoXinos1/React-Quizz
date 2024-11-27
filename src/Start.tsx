import { Button } from '@mui/material';
import { useQuestionStore } from './store/questions';

export const Start = () => {
    const fetchQuestion = useQuestionStore( state => state.fetchQuestion)

    const handleClick = () => {
        fetchQuestion(10) // cantidad de preguntas del limit (questions.tsx)
    }

    return <Button onClick= {handleClick} variant='contained'>
        ¡Start!
    </Button>
}