import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const TicketWrapper = styled.div<{ show: boolean }>`
  height: 90px;
  width: 300px; /* 0 width - change this with JavaScript */
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  margin: 0 auto;
  opacity: 0;
  z-index: 1; /* Stay on top */
  background-color: ${(props) => props.theme.elevation1};
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
  border-left: 0.055rem solid ${(props) => props.theme.navLine};
  border-top: 0.055rem solid ${(props) => props.theme.navLine};
  border-right: 0.055rem solid ${(props) => props.theme.navLine};
  /* position: fixed;
  

  ${media.rubber} {
    height: 5rem;
    width: 16.66rem;
    border-right: 0.055rem solid ${(props) => props.theme.navLine};
  } */

  ${({ show }: { show: boolean }) =>
    show &&
    css`
      opacity: 1;
      background-color: ${(props) => props.theme.container};
    `}
`

const ButtonStyled = styled.button`
  width: 160px;
  height: 100%;
  font-size: 15px;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  ${media.rubber} {
    width: 8.88rem;
    height: 2.22rem;
    font-size: 0.83rem;
  }

  ${media.phone} {
    width: 15rem;
    height: 3rem;
    font-size: 1rem;
  }
`

export const ArenaButtonLeaveStyled = styled(ButtonStyled)`
  color: #f45b69;
  background: ${(props) => props.theme.commonButton};
  border: 1px solid #f45b69;
`

export const ArenaTextWrapper = styled.div`
  width: 70%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16.8387px;
  line-height: 20px;
  color: ${(props) => props.theme.titleText};
  margin-bottom: 10px;
  ${media.rubber} {
    font-size: 0.935483rem;
    line-height: 1.11rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 20px;
    line-height: 1.11rem;
    margin-bottom: 15px;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  margin: 10px 60px;
  line-height: 20px;

  h1 {
    font-size: 31px;
    margin-bottom: 55px;
  }

  p {
    margin-top: 15px;
    font-size: 16px;
  }
`

export const TextStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #b4bbc0;

  ${media.rubber} {
    font-size: 0.66rem;
    line-height: 0.77rem;
  }
`

export const ImageStyled = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  color: ${(props) => props.theme.checkButton};

  ${media.rubber} {
    height: 1.11rem;
    width: 1.11rem;
    margin-right: 0.55rem;
  }

  ${media.phone} {
    height: 1.11rem;
    width: 1.11rem;
    margin-right: 0.55rem;
  }
`
