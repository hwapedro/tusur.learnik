import styled from 'styled-components'
import { media } from '../../../theme/helper'

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const TextWrapper = styled.div`
  text-align: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: ${(props) => props.theme.commonText};
  ${media.rubber} {
    font-size: 2rem;
    line-height: 2.8888rem;
  }

  ${media.phone} {
    font-size: 2rem;
    line-height: 2.8888rem;
  }
`

const ButtonStyled = styled.button`
  height: 50px;
  font-size: 15px;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  ${media.rubber} {
    width: 8.88rem;
    height: auto;
    font-size: 0.83rem;
  }

  ${media.phone} {
    width: 11.88rem;
    height: 3rem;
    font-size: 0.83rem;
  }
`

export const ButtonGoToCourses = styled(ButtonStyled)`
  margin-top: 15px;
  color: #00a7e1;
  background: ${(props) => props.theme.commonButton};
  border: 1px solid #00a7e1;
`
