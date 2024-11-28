import { CheckCircle, Cancel, HelpOutline } from "@mui/icons-material";
import { useQuestionStore } from "./store/questions";

export const Footer = () => {
    const questions = useQuestionStore(state => state.questions);
    let unanswered = 0
    let correct = 0
    let incorrect = 0
    

    questions.forEach(question => {
        if (question.userSelectedAnswer == null) unanswered++
        else if (question.userSelectedAnswer === question.correctAnswer) correct++
        else incorrect++
    })

    return(
        <footer style={{ marginTop: '16px'}}>
            <strong style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
            <CheckCircle sx={{ marginRight: '4px', color: '#44862a' }} /> 
                <span style={{ color: '#dcdcdc' }}>{correct} correct</span> -
                <Cancel sx={{ marginLeft: '8px', marginRight: '4px', color: '#ac2929' }} /> 
                <span style={{ color: '#dcdcdc' }}>{incorrect} incorrect</span> -
                <HelpOutline sx={{ marginLeft: '8px', marginRight: '4px', color: '' }} /> 
                <span style={{ color: '#dcdcdc' }}>{unanswered} unanswered</span>
            </strong>
        </footer>
    )
}