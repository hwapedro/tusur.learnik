import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  width: 1113px;
  margin: 0 auto 0;
  padding-top: 52px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  text-align: center;

  ${media.rubber} {
    width: 61.83rem;
    margin: 0 auto 0;
    padding-top: 2.88ren;
  }

  ${media.phone} {
    width: 100vw;
    padding: 3% 6% 0;
  }
`

export const TitleWrapper = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: ${(props) => props.theme.titleText};

  ${media.rubber} {
    font-size: 2rem;
    line-height: 2.38rem;
  }

  ${media.phone} {
    font-size: 28px;
    padding: 3% 6% 0;
  }
`

export const LanguageSwitcherWrapper = styled.div``
export const LeftStyled = styled.div``

export const RightStyled = styled.div``
export const BurgerWrapper = styled.div`
  margin-top: 10px;
`

export const ProfileWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const UsernameStyled = styled.span`
  margin-right: 40px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.titleText};

  ${media.rubber} {
    margin-right: 2.222rem;
    font-size: 1rem;
    line-height: 1.1666rem;
  }

  ${media.phone} {
    margin-right: 2.222rem;
    font-size: 1rem;
    line-height: 1.1666rem;
  }
`

export const ImageWrapper = styled.div``
export const ImageStyled = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;

  ${media.rubber} {
    height: 2.77rem;
    width: 2.77rem;
  }
`
