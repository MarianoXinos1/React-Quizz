import {Card, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useQuestionStore } from "./store/questions";
import {  type Question as QuestionType } from "./types";



// sx = propiedad de mui para darle style al componente.
const Question = ({info}: {info: QuestionType}) => {
    const selectAnswer = useQuestionStore(state => state.selectAnswer)

    // doble funcion ¿ primera: nos da answerIndex , segunda: maneja el evento que se ejecuta onClick (linea 23)
    const handleClick = (answerIndex: number) => () => {
        selectAnswer(info.id, answerIndex)
    }

    const getBackgroundCOlor = (info: QuestionType, index: number) => {
        const {userSelectedAnswer, correctAnswer} = info

        //usuario no ha seleccionada nada todavia
        if (userSelectedAnswer == null) return 'transparent'
        //si ya selecciono pero es incorrecta
        if (index !== correctAnswer && index !==userSelectedAnswer) return 'transparent'
        // solucion correcta
        if (index === correctAnswer) return 'green'
        // si esta la seleccion del usurio pero no es correcta
        if (index === userSelectedAnswer) return 'red'
        //si no es ninguna de las anteriores
        return 'transparent'
    }

    return (
        <Card variant= 'outlined' sx={{ p: 4, backgroundColor: 'white'}}>   
            <h4>{info.question}</h4>
            <div>{info.code}</div>

            <List sx={{ backgroundColor: '#fff', border:'1px solid #e0e0e0', marginTop: 2}}>
                {info.answers.map((answer, index) => (
                    <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }} >
                        <ListItemButton 
                            disabled={info.userSelectedAnswer != null} //disabled es una propiedad de mui
                            onClick={handleClick(index)}
                            sx={{backgroundColor: getBackgroundCOlor(info,index)}}
                        >
                            <ListItemText primary={answer} sx={{textAlign: 'center'}} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>


    )
}

export const Game = () => {
    const questions = useQuestionStore(state => state.questions)
    const currentQuestion = useQuestionStore(state => state.currentQuestion)

    const questionInfo = questions[currentQuestion]

        return(
            <Question info={questionInfo} />
        )
}