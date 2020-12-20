import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { WaitPageProps } from './ArenaWaitPage.interface'
import { getLessonLastPage, setLoading } from '../../../../../store/lessons/events'

import { I18nWrapper } from '../../../I18n/I18nWrapper/I18nWrapper'

import {
  RestartWrapper,
  TitlePageWrapper,
  TitlePage,
  ButtonWrapper,
} from './ArenaWaitPage.style'

import { ContinueButtonStyled } from '../ArenaPage.style'

export const ArenaWaitPage: FC<WaitPageProps> = ({ courseIndex }) => {
  const history = useHistory()

  const handleRestart = () => {
    setLoading(null)
    history.push(
      `${history.location.pathname
        .split('/')
        .slice(0, -1)
        .join('/')}/learn/${courseIndex}`
    )
  }

  return (
    <RestartWrapper>
      <TitlePageWrapper>
        <TitlePage>
          <I18nWrapper pathString={`arena.wait`} />
        </TitlePage>
      </TitlePageWrapper>
      <ButtonWrapper>
        <ContinueButtonStyled onClick={handleRestart}>
          <I18nWrapper pathString="buttons.continue" />
        </ContinueButtonStyled>
      </ButtonWrapper>
    </RestartWrapper>
  )
}
