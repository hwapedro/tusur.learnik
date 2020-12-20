import { boolean } from 'yup'

export interface AnswerResultProps {
  isCorrect: boolean
  handleContinue: Function
  task?: any
  correctAnswer?: any
  arena: boolean
}
