import React, { FC } from 'react'
import { useStore } from 'effector-react'
import { without, includes, isEmpty } from 'ramda'

import {
  TaskChoiseStyled,
  TestQuestionWrapper,
  TestQuestionStyled,
  OptionsWrapper,
  OptionWrapper,
  GridWrapper,
  LineWrapper,
  AnswerStyled,
  AnswerWrapper,
  AnswersWrapper,
  LineStyled,
  AnswerGrid,
} from './Drag.style'

import { DragProps } from './Drag.interface'

import { profileStore } from '../../../../store/profile/model'
import { Language } from '../../../../store/lessons/types'

export const Drag: FC<DragProps> = ({ task, addAnswer, answers, result }) => {
  const { info } = useStore(profileStore)
  return (
    <>
      <TestQuestionWrapper>
        <TestQuestionStyled>
          {task.info.question[info.language as keyof Language]}
        </TestQuestionStyled>
      </TestQuestionWrapper>
      <GridWrapper>
        <AnswerGrid>
          <LineWrapper>
            <LineStyled></LineStyled>
            <LineStyled></LineStyled>
            <LineStyled></LineStyled>
            <LineStyled></LineStyled>
          </LineWrapper>
          <AnswersWrapper>
            {answers.map((answer, index) => {
              return (
                <AnswerWrapper key={index}>
                  <AnswerStyled
                    disabled={!isEmpty(result)}
                    key={index}
                    onClick={() => addAnswer(without([answer], answers))}
                  >
                    {answer.c.ru}
                  </AnswerStyled>
                </AnswerWrapper>
              )
            })}
          </AnswersWrapper>
        </AnswerGrid>
        <OptionsWrapper>
          {task.info.choices.map((choice, index) => {
            const optionSelected = includes(choice, answers)
            return (
              <OptionWrapper checked={optionSelected} key={index}>
                <TaskChoiseStyled
                  onClick={() => addAnswer([...answers, choice])}
                  chosen={optionSelected}
                  disabled={!isEmpty(result) || optionSelected}
                >
                  {choice.c[info.language as keyof Language]}
                </TaskChoiseStyled>
              </OptionWrapper>
            )
          })}
        </OptionsWrapper>
      </GridWrapper>
    </>
  )
}
