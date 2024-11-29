import { CheckCircle, Cancel, HelpOutline } from "@mui/icons-material";
import { useQuestionsData } from "./hooks/useQuestionsData";


export const Footer = () => {
    const { correct, incorrect, unanswered } = useQuestionsData()

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