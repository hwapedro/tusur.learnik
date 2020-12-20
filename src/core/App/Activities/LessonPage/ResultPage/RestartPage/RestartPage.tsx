import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

import { RestartPageProps } from './RestartPage.interface'
import { getLessonLastPage, setLoading } from '../../../../../../store/lessons/events'

import { I18nWrapper } from '../../../../I18n/I18nWrapper/I18nWrapper'

import {
  RestartWrapper,
  TitlePageWrapper,
  TitlePage,
  ButtonWrapper,
  TryButtonStyled,
} from './RestartPage.style'

export const RestartPage: FC<RestartPageProps> = ({ isRestart, setIsRestart }) => {
  const { courseIndex, lessonIndex } = useParams()

  const handleRestart = () => {
    setLoading(null)
    getLessonLastPage({ courseIndex, lessonIndex })
    setIsRestart(false)
  }

  return (
    <RestartWrapper>
      <TitlePageWrapper>
        <TitlePage>
          <I18nWrapper pathString="restartPage.lose" />
        </TitlePage>
        <TitlePage>
          <I18nWrapper pathString="restartPage.failMessage" />
        </TitlePage>
      </TitlePageWrapper>
      <ButtonWrapper>
        <TryButtonStyled onClick={handleRestart}>
          <I18nWrapper pathString="buttons.tryAgain" />
        </TryButtonStyled>
      </ButtonWrapper>
    </RestartWrapper>
  )
}
