import React, { FC } from 'react'
import { useStore } from 'effector-react'
import { without, includes, isEmpty } from 'ramda'

import {
  TaskChoiseStyled,
  TestQuestionWrapper,
  TestQuestionStyled,
  OptionsWrapper,
  OptionsChooseStyled,
  OptionWrapper,
  GridWrapper,
} from './Test.style'

import { TestProps } from './Test.interface'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import { profileStore } from '../../../../store/profile/model'
import { Language } from '../../../../store/lessons/types'

export const Test: FC<TestProps> = ({ task, addAnswer, answers, result }) => {
  const { info } = useStore(profileStore)
  return (
    <>
      <TestQuestionWrapper>
        <TestQuestionStyled>{task.info.question.ru}</TestQuestionStyled>
      </TestQuestionWrapper>

      <OptionsWrapper>
        <OptionsChooseStyled>
          <I18nWrapper pathString="lessonPage.testTask" />
        </OptionsChooseStyled>

        <GridWrapper>
          {task.info.choices.map((choice, index) => {
            return (
              <OptionWrapper
                onClick={() => {
                  if (!isEmpty(result)) {
                    return
                  }
                  includes(index, answers)
                    ? addAnswer(without([choice.i], answers))
                    : addAnswer([...answers, choice.i])
                }}
                checked={includes(index, answers)}
                key={index}
              >
                <TaskChoiseStyled>
                  {choice.c[info.language as keyof Language]}
                </TaskChoiseStyled>
              </OptionWrapper>
            )
          })}
        </GridWrapper>
      </OptionsWrapper>
    </>
  )
}
