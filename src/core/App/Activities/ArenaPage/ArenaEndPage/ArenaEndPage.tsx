import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { RestartPageProps } from './ArenaEndPage.interface'
import { setLoading } from '../../../../../store/lessons/events'

import { I18nWrapper } from '../../../I18n/I18nWrapper/I18nWrapper'

import {
  RestartWrapper,
  TitlePageWrapper,
  TitlePage,
  ButtonWrapper,
} from './ArenaEndPage.style'

import { ContinueButtonStyled } from '../ArenaPage.style'

export const ArenaEndPage: FC<RestartPageProps> = ({ victory, courseIndex }) => {
  const history = useHistory()

  const checkWinState = () => {
    switch (victory) {
      case 'win':
        return 'winMessage'
      case 'lose':
        return 'loseMessage'
      case 'draw':
        return 'drawMessage'
      default:
        return
    }
  }

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
          <I18nWrapper pathString={`arena.${checkWinState()}`} />
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
