import React, { FC } from 'react'
import { useStore } from 'effector-react'

import { AnswerResultProps } from './AnswerResult.interface'
import { I18nWrapper } from '../../../I18n/I18nWrapper/I18nWrapper'
import {
  ResultWrapper,
  ButtonWrapper,
  ContinueButtonStyled,
  Wrapper,
  TextStyled,
} from './AnswerResult.style'
import { profileStore } from '../../../../../store/profile/model'
import { Language } from '../../../../../store/lessons/types'

export const AnswerResult: FC<AnswerResultProps> = ({
  isCorrect,
  task,
  correctAnswer,
  handleContinue,
  arena,
}) => {
  const { info } = useStore(profileStore)

  const resolveAnswer = () => {
    console.log(correctAnswer)
    if (task.info.choices) {
      const answer = task.info.choices
        .filter((el: any, index: number) => correctAnswer.includes(index))
        .map((el: any) => el.c[info.language])
        .toString()
      return answer
    } else {
      return correctAnswer.toString().replace(',', ', ')
    }
  }

  return (
    <ResultWrapper>
      <Wrapper isCorrect={isCorrect}>
        <ButtonWrapper>
          {isCorrect ? (
            <TextStyled isCorrect={isCorrect}>
              <I18nWrapper pathString="lessonPage.correct" />
            </TextStyled>
          ) : (
            <TextStyled isCorrect={isCorrect}>
              {arena && <I18nWrapper pathString="lessonPage.incorrect" />}
              {!arena && <I18nWrapper pathString="lessonPage.incorrect" />}
              {!arena && resolveAnswer()}
            </TextStyled>
          )}
          <ContinueButtonStyled isCorrect={isCorrect} onClick={() => handleContinue()}>
            <I18nWrapper pathString="buttons.continue" />
          </ContinueButtonStyled>
        </ButtonWrapper>
      </Wrapper>
    </ResultWrapper>
  )
}
