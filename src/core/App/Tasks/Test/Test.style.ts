import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const TestQuestionWrapper = styled.div`
  margin-bottom: 60px;

  ${media.rubber} {
    margin-bottom: 3.33rem;
  }

  ${media.phone} {
    margin-bottom: 3.33rem;
  }
`

export const TestQuestionStyled = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 21px;

  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 1.77rem;
    line-height: 1.166rem;
  }

  ${media.phone} {
    font-size: 1.77rem;
    line-height: 1.166rem;
  }
`

export const OptionsWrapper = styled.div``

export const OptionsChooseStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 12px;
  color: ${(props) => props.theme.commonText};
  margin-bottom: 10px;

  ${media.rubber} {
    font-size: 0.722rem;
    line-height: 0.66rem;
    margin-bottom: 0.55rem;
  }

  ${media.rubber} {
    font-size: 1rem;
    line-height: 1.11rem;
    margin-bottom: 0.55rem;
  }
`

export const OptionWrapper = styled.div<{ checked: boolean }>`
  cursor: pointer;
  width: 97%;
  height: 50px;
  border: 1px solid #dde4e9;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.commonButton};
  position: relative;

  /* &:hover{
        border: 1px solid #00A7E1;
        box-sizing: border-box;
    } */

  ${({ checked }: { checked: boolean }) =>
    checked &&
    css`
      border: 1px solid #00a7e1;
      box-sizing: border-box;
      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        bottom: -10px;
        left: -5px;
        height: 103%;
        width: 106%;
        opacity: 0.1;
        border-radius: 5px;
        background: ${(props) => props.theme.checkButton};
        -webkit-filter: blur(9px);
        -moz-filter: blur(9px);
        -o-filter: blur(9px);
        -ms-filter: blur(9px);
        filter: blur(9px);
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
      }
    `}
  ${media.rubber} {
    height: 2.77rem;
    border: 0.05rem solid #dde4e9;
    border-radius: 0.277rem;

    ${({ checked }: { checked: boolean }) =>
      checked &&
      css`
        border: 0.05rem solid #00a7e1;
        &:before {
          z-index: -1;
          bottom: -0.55rem;
          left: -0.277rem;
          opacity: 0.1;
          border-radius: 0.277rem;
          -webkit-filter: blur(0.5rem);
          -moz-filter: blur(0.5rem);
          -o-filter: blur(0.5rem);
          -ms-filter: blur(0.5rem);
          filter: blur(0.5rem);
        }
      `}
  }

  ${media.phone} {
    height: 60px;

  }
`

export const TaskChoiseStyled = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 1.11rem;
    line-height: 0.66rem;
  }

  
  ${media.phone} {
    font-size: 20px;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 15px;

  ${media.rubber} {
    grid-row-gap: 0.83rem;
  }
`
