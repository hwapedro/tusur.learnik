import styled from 'styled-components'

import { media } from '../../../../theme/helper'
import logo from '../../../../assets/logo.svg'

export const LogoWrapperStyled = styled.div`
  margin: 0 auto;
  padding-top: 5rem;
`

export const LogoStyled = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${logo});
  
  ${media.rubber} {
    height: 16.666rem;
    width: 16.666rem;
  }
`

export const TextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5rem 0.5rem;
  margin: 0 auto;
  color: black;
`

export const SubtitleStyled = styled.span`
  padding-top: 0.5rem;
  font-size: 1.1rem;
`

export const TitleStyled = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
`
