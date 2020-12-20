import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const TextWrapperStyled = styled.div`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 200;
  text-align: center;

  ${media.rubber} {
    font-size: 1.45rem;
    margin-bottom: 1.94rem;
  }
`

export const TitleStyled = styled.div`
  text-align: center;
  margin: 40px 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 27px;
  color: #003459;

  ${media.rubber} {
    margin: 2.22rem 0;
    font-size: 1.27rem;
    line-height: 1.5rem;
  }
`

export const ButtonWrapperStyled = styled.div`
  text-align: center;
`

export const ButtonsWrapperStyled = styled.div`
  margin: 20px 0px 54px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.rubber} {
    margin: 1.11rem 0px 3rem;
  }
`

export const ButtonStyled = styled.button<{ type?: string }>`
  min-width: 150px;
  height: 40px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  border: 1.5px solid #00a7e1;
  background: #00a7e1;
  border-radius: 6px;
  cursor: pointer;

  ${media.rubber} {
    min-width: 8.33rem;
    height: 2.22rem;
    font-size: 0.83rem;
    line-height: 1rem;
    border: 0.083rem solid #00a7e1;
    border-radius: 0.33rem;
  }

  ${({ type }: { type?: string }) =>
    !type &&
    css`
      color: #003459;
      border: 1.5px solid #003459;
      background-color: #ffffff;
      margin-right: 40px;

      ${media.rubber} {
        border: 0.083rem solid #003459;
        margin-right: 2.22rem;
      }
    `}
`
