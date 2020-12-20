import { Task } from '../../../../store/lessons/types'

export interface FillProps {
  task: Task
  answers: Array<any>
  addAnswer: (answers: Array<any>) => void
  result: any
}
