import { Task } from '../../../../store/lessons/types'

export interface TestProps {
  task: Task
  answers: Array<any>
  addAnswer: (answers: Array<any>) => void
  result: any
}
