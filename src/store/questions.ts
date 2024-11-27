import { create } from 'zustand';
import { Question } from '../types'
import confetti from 'canvas-confetti';
interface State {
    questions: Question[];
    currentQuestion: number;
    fetchQuestion: (limit: number) => void;
    selectAnswer: (questionId: number, answerIndex: number) => void
}

// set = se utiliza para actualizar el estados (es nativo de Zustand)
// get =  cuando necesitas leer el estado dentro de una función que actualiza el estado. (es nativo de Zustand)
export const useQuestionStore = create<State>((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,  //Posicion array Question (Game.tsx)

        fetchQuestion: async (limit: number) => {
            const res = await fetch('http://localhost:5173/src/mock/data.json')
            const json = await res.json()
          
            const questions = json.sort(() => Math.random() -0.5).slice(0,limit)
            // actualiza question linea 12
            set({ questions })
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            const {questions} = get()

            // structuredClone = para clonar objetos.
            const newQuestions = structuredClone(questions)
            // encunetro el id de la pregunta que esta en json
            const questionIndex = newQuestions.findIndex( q => q.id === questionId)
            const questionInfo = newQuestions[questionIndex]
            
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
            if (isCorrectUserAnswer) confetti()
            // Actualiza la pregunta con la respuesta del usuario y si es correcta
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer: answerIndex
            }
             // Actualiza el estado con las nuevas preguntas
             set({ questions: newQuestions})
        }   
    }
})