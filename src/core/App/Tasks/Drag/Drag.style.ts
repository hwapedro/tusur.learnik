import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const TaskChoiseStyled = styled.button<{ chosen: boolean, disabled: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  background: ${(props) => props.theme.commonButton};
  color: ${(props) => props.theme.commonText};
  height: 42px;
  border: 1px solid #dde4e9;
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  padding: 6px 10px;
  cursor: pointer;

  ${media.rubber} {
    font-size: 1.11rem;
    line-height: 0.66rem;
    height: 2.33rem;
    border: 0.05rem solid #dde4e9;
    border-radius: 0.55rem;
    margin-left: 0.277rem;
    margin-right: 0.277rem;
    padding: 0.333rem 0.55rem;
  }


  ${({ disabled }: { disabled: boolean }) =>
    disabled &&
    css`
      cursor: default;
    `}

  ${({ chosen }: { chosen: boolean }) =>
    chosen &&
    css`
      background-color: #e5e5e5;
      border: 1px solid #e5e5e5;
      color: #e5e5e5;
      cursor: default;
      ${media.rubber} {
        border: 0.05rem solid #e5e5e5;
      }
      ${media.phone} {
        border: 1px solid #e5e5e5;
      }
    `}
`

export const TestQuestionWrapper = styled.div`
  margin-bottom: 60px;

  ${media.rubber} {
    margin-bottom: 3.33rem;
  }

  ${media.phone} {
    margin-bottom: 1.33rem;
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

export const OptionsWrapper = styled.div`
  margin: 10px auto;
  text-align: center;

  ${media.rubber} {
    margin: 0.55rem auto;
  }

`

export const OptionWrapper = styled.div<{ checked: boolean }>`
  cursor: pointer;
  width: auto;
  display: inline-block;
  position: relative;
  height: 50px;
  margin: 0px 3px;

  ${media.rubber} {
    height: 2.77rem;
    margin: 0px 0.166rem;
  }

  ${media.phone} {
    height: 50px;
  }

  /* &:hover{
        border: 1px solid #00A7E1;
        box-sizing: border-box;
    } */
`

export const GridWrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-row-gap: 32px;

  ${media.rubber} {
    grid-row-gap: 1.77rem;
  }

  ${media.phone} {
    grid-row-gap: 1rem;
  }
`

export const LineWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
`

export const LineStyled = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.line};
  width: 100%;
  height: 50px;
  margin-bottom: 10px;

  ${media.rubber} {
    border-bottom: 0.11rem solid ${(props) => props.theme.line};
    height: 2.77rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    height: 50px;
  }
`

export const AnswerStyled = styled.button<{ disabled: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  background: ${(props) => props.theme.commonButton};
  color: ${(props) => props.theme.commonText};
  height: 42px;
  border: 1.1px solid #dde4e9;
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  padding: 6px 10px;
  cursor: pointer;


  ${({ disabled }: { disabled: boolean }) =>
    disabled &&
    css`
      cursor: default;
    `}

  ${media.rubber} {
    font-size: 1.11rem;
    line-height: 0.66rem;
    height: 2.33rem;
    border: 0.05rem solid #dde4e9;
    border-radius: 0.55rem;
    margin-left: 0.277rem;
    margin-right: 0.277rem;
    padding: 0.33rem 0.55rem;
  }

  ${media.phone} {
    padding: 13px 8px;
  }
`

export const AnswerGrid = styled.div`
  position: relative;
`

export const AnswerWrapper = styled.div`
  height: 50px;
  margin: 0px 3px 9px;

  ${media.rubber} {
    height: 2.77rem;
    margin: 0 0.16rem 0.5rem;
  }

  ${media.phone} {
    margin: 0px 3px 8px;
  }
`

export const AnswersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
`
