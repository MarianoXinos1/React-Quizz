import { useQuestionStore } from "../store/questions";


//CustomHook
export const useQuestionsData = () => {
    const questions = useQuestionStore(state => state.questions);
    let unanswered = 0
    let correct = 0
    let incorrect = 0
    

    questions.forEach(question => {
        if (question.userSelectedAnswer == null) unanswered++
        else if (question.userSelectedAnswer === question.correctAnswer) correct++
        else incorrect++
    })

    return { correct, incorrect, unanswered }
}

