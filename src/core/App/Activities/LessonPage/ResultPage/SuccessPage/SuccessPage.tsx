import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

import { getLessonLastPage, setLoading } from '../../../../../../store/lessons/events'
import { SuccessPageProps } from './SuccessPage.interface'
import { I18nWrapper } from '../../../../I18n/I18nWrapper/I18nWrapper'

import {
  SuccessWrapper,
  TitlePageWrapper,
  TitlePage,
  ButtonWrapper,
  ContinueButtonStyled,
} from './SuccessPage.style'

export const SuccessPage: FC<SuccessPageProps> = ({ setIsSuccess, setPageLoading }) => {
  const { courseIndex, lessonIndex } = useParams()

  const handleContinue = () => {
    setPageLoading(true)
    getLessonLastPage({ courseIndex, lessonIndex })
    setIsSuccess(false)
  }

  return (
    <SuccessWrapper>
      <TitlePageWrapper>
        <TitlePage>
          <I18nWrapper pathString="successPage.win" />
        </TitlePage>
        <TitlePage>
          <I18nWrapper pathString="successPage.successMessage" />
        </TitlePage>
      </TitlePageWrapper>
      <ButtonWrapper>
        <ContinueButtonStyled onClick={handleContinue}>
          <I18nWrapper pathString="buttons.continue" />
        </ContinueButtonStyled>
      </ButtonWrapper>
    </SuccessWrapper>
  )
}
