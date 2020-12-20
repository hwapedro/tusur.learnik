import React, { FC } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { LessonEndPageProps, ParamTypes } from './LessonEndPage.interface'
import { getLessonLastPage, setLoading } from '../../../../../../store/lessons/events'
import {COURSES_PAGE} from '../../../../../../global/routes'

import { I18nWrapper } from '../../../../I18n/I18nWrapper/I18nWrapper'

import {
  LessonEndWrapper,
  TitlePageWrapper,
  TitlePage,
  ButtonWrapper,
  ContinueButtonStyled,
  BackButtonStyled,
  FakeGrid,
} from './LessonEndPage.style'

export const LessonEndPage: FC<LessonEndPageProps> = ({ setLessonDone, startNewLesson}) => {
  const { courseIndex, lessonIndex } = useParams<ParamTypes>()
  const history = useHistory()

  const handleContinue = () => {
    startNewLesson()
    history.push(
      `${history.location.pathname.split('/').slice(0, -1).join('/')}/${
        parseInt(lessonIndex) + 1
      }`
    )
    setLessonDone(false)
  }
  const handleBack = () => {
    history.push(`${COURSES_PAGE}/${courseIndex}`)
  }

  return (
    <FakeGrid>
      <LessonEndWrapper>
        <TitlePageWrapper>
          <TitlePage>
            <I18nWrapper pathString="lessonEndPage.message" />
          </TitlePage>
        </TitlePageWrapper>
        <ButtonWrapper>
          <BackButtonStyled onClick={handleBack}>
            <I18nWrapper pathString="buttons.lessonList" />
          </BackButtonStyled>
          <ContinueButtonStyled onClick={handleContinue}>
            <I18nWrapper pathString="buttons.nextLesson" />
          </ContinueButtonStyled>
        </ButtonWrapper>
      </LessonEndWrapper>
    </FakeGrid>
  )
}
