import { Task } from '../../../../store/lessons/types'

export interface DragProps {
  task: Task
  answers: Array<any>
  addAnswer: (answers: Array<any>) => void
  result: any
}
