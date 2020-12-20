import React, { FC } from 'react'

import { Task } from '../../../store/lessons/types'
import { Fill } from './Fill/Fill'
import { Test } from './Test/Test'
import { Drag } from './Drag/Drag'

export interface TaskSwitchProps {
  task: Task
  answers: Array<any>
  addAnswer: (answers: Array<any>) => void
  result: any
}


export const TaskSwitch: FC<TaskSwitchProps> = ({ task, answers, addAnswer, result}) => {
  switch (task.type) {
    case 'fill':
      return <Fill task={task} answers={answers} addAnswer={addAnswer} result={result}/>
    case 'test':
      return <Test task={task} answers={answers} addAnswer={addAnswer} result={result}/>
    case 'drag':
      return <Drag task={task} answers={answers} addAnswer={addAnswer} result={result}/>
    default:
      return <></>
  }
}
