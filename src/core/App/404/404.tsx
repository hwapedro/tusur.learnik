import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { I18nWrapper } from '../I18n/I18nWrapper/I18nWrapper'
import { COURSES_PAGE } from '../../../global/routes'

import { WrapperStyled, TextWrapper, ButtonGoToCourses } from './404.style'

export const Page404: FC = () => {
  const history = useHistory()
  return (
    <WrapperStyled>
      <TextWrapper>
        <I18nWrapper pathString="404.text" />
      </TextWrapper>

      <ButtonGoToCourses
        onClick={() => {
          history.push(COURSES_PAGE)
        }}
      >
        <I18nWrapper pathString="404.button" />
      </ButtonGoToCourses>
    </WrapperStyled>
  )
}
