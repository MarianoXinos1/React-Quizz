import { Button } from '@mui/material';
import { useQuestionStore } from './store/questions';

export const Start = () => {
    const fetchQuestion = useQuestionStore( state => state.fetchQuestion)

    const handleClick = () => {
        fetchQuestion(35) // cantidad de preguntas que queremos, del limit (questions.tsx)
    }

    return <Button onClick= {handleClick} variant='contained'>
        ¡Start!
    </Button>
}