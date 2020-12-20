import styled, { css } from 'styled-components'
import { media } from '../../../../../theme/helper'

export const ResultWrapper = styled.div`
  grid-column: 1;
  grid-row: 3;
  z-index: 122;
  position: relative;
  border-top: 2px solid rgba(255, 255, 255, 0.05);

  ${media.rubber} {
    border-top: 0.11rem solid rgba(255, 255, 255, 0.05);
  }

  ${media.phone} {
    height: 100px;
    background-color: ${(props) => props.theme.body};
    position: fixed;
    bottom: 0px;
    width: 100%;

    border-top: 0.11rem solid rgba(255, 255, 255, 0.05);
  }
`
export const ButtonWrapper = styled.div`
  height: 100%;
  width: 1000px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 110;
  display: flex;
  flex-direction: row;


  ${media.rubber} {
    width: 55.55rem;
  }

  ${media.phone} {
    width: 100%;
    padding: 0 7% 15px;
  }
`

export const TextStyled = styled.div<{ isCorrect: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 21px;
  ${({ isCorrect }: { isCorrect: boolean }) =>
    isCorrect ?
      css`
        color:  rgba(94, 203, 161, 0.85);
    `: css`
    color: rgba(208, 83, 96, 0.85);
    `} 
`

export const Wrapper = styled.div<{ isCorrect: boolean }>`
  height: 100%;
  width: 100%;
  
  /* ${({ isCorrect }: { isCorrect: boolean }) =>
    isCorrect ?
      css`
        background: #b8f28b;
    `: css`
    background: rgba(208, 83, 96, 0.85);
    `} */
`


const ButtonStyled = styled.button`
  width: 170px;
  height: 50px;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  ${media.rubber} {
    width: 9.44rem;
    height: 2.77rem;
    font-size: 1.11rem;
    margin-right: 0.55rem;
    border-radius: 0.22rem;
  }

  ${media.phone} {
    width: 9.44rem;
    height: 2.77rem;
    font-size: 1.11rem;
    margin-right: 0.55rem;
    border-radius: 0.22rem;
  }
`

export const ContinueButtonStyled = styled(ButtonStyled) <{ isCorrect: boolean }>`
  color: #ffffff;
  border: 1px solid;

  ${media.rubber} {
    border: 0.055rem;
  }

  ${({ isCorrect }: { isCorrect: boolean }) =>
    isCorrect ?
      css`
       background: rgba(94, 203, 161, 0.85);
       border-color:  rgba(94, 203, 161, 0.85);
    `: css`
    background: rgba(208, 83, 96, 0.85);
    border-color: rgba(208, 83, 96, 0.85);
    `} 
`
